import React from 'react'
import { RelatedVideos } from '../../components/RelatedVideos/RelatedVideos'
import { Video } from '../../components/Video/Video'
import { VideoMetaData } from '../../components/VideoMetaData/VideoMetaData'
import { VideoInfoBox } from '../../components/VideoInfoBox/VideoInfoBox'
import { Comments } from '../../containers/Comments/Comments'

import './Watch.scss'


export class Watch extends React.Component {


    getVideoId() {
        const searchParams = new URLSearchParams(this.props.location.search);
        return searchParams.get('v');
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