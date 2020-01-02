import React, { Component } from 'react'
import { connect } from 'react-redux'
import { VideoGrid } from '../../../components/VideoGrid/VideoGrid';
import { getMostPopularVideos, getVideosByCategory } from '../../../store/reducers/video'
// import { InfiniteScroll } from '../../../components/InfiniteScroll/InfiniteScroll'
import './HomeContent.scss'

const AMOUNT_TRENDING_VIDEOS = 12
export class HomeContent extends Component {
    render() {
        const trendingVideos = this.getTrendingVideos()
        const categoryGrids = this.getVideoGridsForCategories();
        return (
            <div className='home-content'>
                <div className="responsive-video-grid-container">
                    <VideoGrid title='Trending' videos={trendingVideos} />
                    {categoryGrids}
                </div>
            </div>
        )
    }

    getVideoGridsForCategories() {
        const categoryTitles = Object.keys(this.props.videosByCategory || {});
        return categoryTitles.map((categoryTitle, index) => {
            const videos = this.props.videosByCategory[categoryTitle];
            const hideDivider = index === categoryTitles.length - 1;
            return <VideoGrid title={categoryTitle} videos={videos} key={categoryTitle} hideDivider={hideDivider} />;
        });
    }

    getTrendingVideos = () => this.props.mostPopularVideos.slice(0, AMOUNT_TRENDING_VIDEOS);

}

const mapStateToProps = (state) => {
    return {
        videosByCategory: getVideosByCategory(state),
        mostPopularVideos: getMostPopularVideos(state),
    }
}

export default connect(mapStateToProps, null)(HomeContent)