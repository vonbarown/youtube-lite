import React from 'react'
import './VideoGrid.scss'
import { Divider } from 'semantic-ui-react'
import { VideoGridHeader } from './VideoGridHeader/VideoGridHeader'
import { VideoPreview } from '../VideoPreview/VideoPreview'

export const VideoGrid = (props) => {
    if (!props.videos || !props.videos.length) {
        return <div />
    }

    const gridItems = props.videos.map(video => {
        return (<VideoPreview
            video={video}
            key={video.id}
            pathname='/watch'
            search={`?v=${video.id}`}
        />
        )
    })

    const divider = props.hideDivider ? null : <Divider />

    return (<div className='video-section'>
        <VideoGridHeader title={props.title} />
        <div className='video-grid'>
            {gridItems}
        </div>
        {divider}
    </div>)
}