import React from 'react'
import { VideoPreview } from '../../components/VideoPreview/VideoPreview'
import './Watch.scss'


export class Watch extends React.Component {
    render() {
        return (
            <div style={{ maxWidth: '80%' }}>
                <VideoPreview horizontal={true} />
                <VideoPreview />
            </div>
        )
    }
}