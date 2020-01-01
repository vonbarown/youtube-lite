import React from 'react'
import { Icon, Progress } from 'semantic-ui-react'
import './Rating.scss'

export const Rating = (props) => {
    let progress = null

    if (props.likeCount && props.disLikeCount) {
        const percent = 100 * (props.likeCount / (props.likeCount + props.disLikeCount));
        progress = <Progress className='progress' percent={percent} size='tiny' />;
    }

    return (
        <div className='rating'>
            <div className='thumbs-up'>
                <Icon name='thumbs outline up' />
                <span>{props.likeCount}</span>
            </div>
            <div className='thumbs-down'>
                <Icon name='thumbs outline down' />
                <span>{props.disLikeCount}</span>
            </div>
            {progress}
        </div>
    )
}