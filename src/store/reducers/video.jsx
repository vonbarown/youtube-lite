import { createSelector } from 'reselect'
import { MOST_POPULAR, VIDEO_CATEGORIES, MOST_POPULAR_BY_CATEGORY } from '../actions/video';
import { SUCCESS } from '../actions';
import { WATCH_DETAILS } from '../actions/watch';
import { VIDEO_LIST_RESPONSE, SEARCH_LIST_RESPONSE } from '../api/youtube-response-types';



const initialState = {
    byId: {},
    mostPopular: {},
    categories: {},
};
export default function videos(state = initialState, action) {
    switch (action.type) {
        case VIDEO_CATEGORIES[SUCCESS]:
            return reduceFetchVideoCategories(action.response, state);
        case MOST_POPULAR[SUCCESS]:
            return reduceFetchMostPopularVideos(action.response, state);
        case MOST_POPULAR_BY_CATEGORY[SUCCESS]:
            return reduceFetchMostPopularVideosByCategory(action.response, action.categories, state);
        case WATCH_DETAILS[SUCCESS]:
            return reduceWatchDetails(action.response, state);
        default:
            return state;
    }
}

const reduceFetchMostPopularVideos = (response, prevState) => {
    const videoMap = response.items.reduce((accumulator, video) => {
        accumulator[video.id] = video;
        return accumulator;
    }, {});

    let items = Object.keys(videoMap);
    if (response.hasOwnProperty('prevPageToken') && prevState.mostPopular) {
        items = [...prevState.mostPopular.items, ...items];
    }

    const mostPopular = {
        totalResults: response.pageInfo.totalResults,
        nextPageToken: response.nextPageToken,
        items,
    };

    return {
        ...prevState,
        mostPopular,
        byId: { ...prevState.byId, ...videoMap },
    };
}

const reduceFetchVideoCategories = (response, prevState) => {
    const categoryMapping = response.items.reduce((accumulator, category) => {
        accumulator[category.id] = category.snippet.title;
        return accumulator;
    }, {});
    return {
        ...prevState,
        categories: categoryMapping,
    };
}

const reduceFetchMostPopularVideosByCategory = (responses, categories, prevState) => {
    let videoMap = {};
    let byCategoryMap = {};

    responses.forEach((response, index) => {
        // ignore answer if there was an error
        if (response.status === 400) return;

        const categoryId = categories[index];
        const { byId, byCategory } = groupVideosByIdAndCategory(response.result);
        videoMap = { ...videoMap, ...byId };
        byCategoryMap[categoryId] = byCategory;
    });

    // compute new state
    return {
        ...prevState,
        byId: { ...prevState.byId, ...videoMap },
        byCategory: { ...prevState.byCategory, ...byCategoryMap },
    };
}

const groupVideosByIdAndCategory = (response) => {
    const videos = response.items;
    const byId = {};
    const byCategory = {
        totalResults: response.pageInfo.totalResults,
        nextPageToken: response.nextPageToken,
        items: [],
    };

    videos.forEach((video) => {
        byId[video.id] = video;

        const items = byCategory.items;
        if (items && items) {
            items.push(video.id);
        } else {
            byCategory.items = [video.id];
        }
    });

    return { byId, byCategory };
}

const reduceWatchDetails = (responses, prevState) => {
    const videoDetailResponse = responses.find(r => r.result.kind === VIDEO_LIST_RESPONSE);
    const video = videoDetailResponse.result.items[0];
    const relatedEntry = reduceRelatedVideosRequest(responses);

    return {
        ...prevState,
        byId: {
            ...prevState.byId,
            [video.id]: video
        },
        related: {
            ...prevState.related,
            [video.id]: relatedEntry
        }
    };
}
const reduceRelatedVideosRequest = (responses) => {
    const relatedVideosResponse = responses.find(r => r.result.kind === SEARCH_LIST_RESPONSE);
    const { pageInfo, items, nextPageToken } = relatedVideosResponse.result;
    const relatedVideoIds = items.map(video => video.id);

    return {
        totalResults: pageInfo.totalResults,
        nextPageToken,
        items: relatedVideoIds
    };
}

//selectors
export const getMostPopularVideos = createSelector(
    (state) => state.videos.byId,
    (state) => state.videos.mostPopular,
    (videosById, mostPopular) => {
        if (!mostPopular || !mostPopular.items) {
            return []
        }
        return mostPopular.items.map(videoId => videosById[videoId])
    }
)

export const getVideoCategoryIds = createSelector(
    state => state.videos.categories,
    (categories) => {
        return Object.keys(categories || {});
    }
);

export const getVideosByCategory = createSelector(
    state => state.videos.byCategory,
    state => state.videos.byId,
    state => state.videos.categories,
    (videosByCategory, videosById, categories) => {
        return Object.keys(videosByCategory || {}).reduce((accumulator, categoryId) => {
            const videoIds = videosByCategory[categoryId].items;
            const categoryTitle = categories[categoryId];
            accumulator[categoryTitle] = videoIds.map(videoId => videosById[videoId]);
            return accumulator;
        }, {});
    }
);

export const videoCategoriesLoaded = createSelector(
    state => state.videos.categories,
    (categories) => {
        return Object.keys(categories || {}).length !== 0;
    }
);

export const videosByCategoryLoaded = createSelector(
    state => state.videos.byCategory,
    (videosByCategory) => {
        return Object.keys(videosByCategory || {}).length;
    }
);

export const getVideoById = (state, videoId) => {
    return state.videos.byId[videoId];
};