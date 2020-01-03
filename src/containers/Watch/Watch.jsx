import React from 'react'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { RelatedVideos } from '../../components/RelatedVideos/RelatedVideos'
import { Video } from '../../components/Video/Video'
import { VideoMetaData } from '../../components/VideoMetaData/VideoMetaData'
import { VideoInfoBox } from '../../components/VideoInfoBox/VideoInfoBox'
import { Comments } from '../../containers/Comments/Comments'
import * as watchActions from '../../store/actions/watch';
import { getYoutubeLibraryLoaded } from '../../store/reducers/api';
import './Watch.scss'


export class Watch extends React.Component {

    componentDidMount() {
        if (this.props.youtubeLibraryLoaded) {
            this.fetchWatchContent();
        }
    }

    componentDidUpdate(prevProps) {
        if (this.props.youtubeLibraryLoaded !== prevProps.youtubeLibraryLoaded) {
            this.fetchWatchContent();
        }
    }

    fetchWatchContent() {
        const videoId = this.getVideoId();
        if (!videoId) {
            this.props.history.push('/');
        }
        this.props.fetchWatchDetails(videoId, this.props.channelId);
    }

    render() {
        return (
            <div className='watch-grid'>
                <Video className='video' id='-7fuHEEmEjs' />
                <VideoMetaData className='metaData' viewCount={1000} />
                <VideoInfoBox className='video-info-box' />
                <Comments className='comments' />
                <RelatedVideos className='relatedVideos' />
            </div>)
    }
}

const mapStateToProps = (state) => {
    return {
        getYoutubeLibraryLoaded: getYoutubeLibraryLoaded(state)
    }
}

const mapDispatchToProps = (dispatch) => {
    const fetchWatchDetails = watchActions.details.request;
    return (bindActionCreators({ fetchWatchDetails }, dispatch))
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Watch));