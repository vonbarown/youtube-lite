import React from 'react'
import { RelatedVideos } from '../../components/RelatedVideos/RelatedVideos'
import { Video } from '../../components/Video/Video'
import { VideoMetaData } from '../../components/VideoMetaData/VideoMetaData'
import { VideoInfoBox } from '../../components/VideoInfoBox/VideoInfoBox'


import './Watch.scss'


export class Watch extends React.Component {
    render() {
        return (
            <div className='watch-grid'>
                <Video className='video' id='-7fuHEEmEjs' />
                <VideoMetaData className='metaData' viewCount={1000} />
                <VideoInfoBox className='video-info-box' />
                <div className='comments' style={{ width: '100%', height: '100px', background: '#9013FE' }}>comments</div>
                <RelatedVideos className='relatedVideos' />
            </div>)
    }
}