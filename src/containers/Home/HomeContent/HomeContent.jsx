import React, { Component } from 'react'
import { VideoGrid } from '../../../components/VideoGrid/VideoGrid';
import './HomeContent.scss'

export class HomeContent extends Component {
    render() {
        return (
            <div className='home-content'>
                <div className="responsive-video-grid-container">
                    <VideoGrid title='Trending' />
                    <VideoGrid title='Autos & Vehicles' hideDivider={true} />
                </div>
            </div>
        )
    }
}