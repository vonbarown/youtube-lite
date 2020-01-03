import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Video } from '../../../components/Video/Video';
import { VideoMetaData } from '../../../components/VideoMetaData/VideoMetaData';
import { VideoInfoBox } from '../../../components/VideoInfoBox/VideoInfoBox';
import { Comments } from '../../Comments/Comments';
import { RelatedVideos } from '../../../components/RelatedVideos/RelatedVideos';
import { getVideoById } from '../../../store/reducers/video';

import './WatchContent.scss';

class WatchContent extends Component {

    render() {
        if (!this.props.videoId) {
            return <div />
        }
        return (
            <div className='watch-grid'>
                <Video className='video' id={this.props.videoId} />
                < VideoMetaData video={this.props.video} />
                <VideoInfoBox className='video-info-box' video={this.props.video} />
                <Comments commentAmount={112499} />
                <RelatedVideos className='relatedVideos' />
            </div>
        );
    }
}

const mapStateToProps = (state, props) => {
    return {
        video: getVideoById(state, props.videoId)
    }
}

export default connect(mapStateToProps, null)(WatchContent);