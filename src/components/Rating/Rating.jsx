import React from 'react'
import { Icon, Progress } from 'semantic-ui-react'
import { getShortNumberString } from '../../services/number/number-format';
import './Rating.scss'

export const Rating = (props) => {
    let rating = null;
    let likeCount = props.likeCount !== 0 ? props.likeCount : null;
    let dislikeCount = null;

    if (props.likeCount && props.dislikeCount) {
        const amountLikes = parseFloat(props.likeCount);
        const amountDislikes = parseFloat(props.dislikeCount);
        const percentagePositiveRatings = 100.0 * (amountLikes / (amountLikes + amountDislikes));

        likeCount = getShortNumberString(amountLikes);
        dislikeCount = getShortNumberString(amountDislikes);
        rating = <Progress percent={percentagePositiveRatings} size='tiny' />;
    }
    return (
        <div className='rating'>
            <div >
                <Icon name='thumbs outline up' />
                <span>{likeCount}</span>
            </div>
            <div >
                <Icon name='thumbs outline down' />
                <span>{dislikeCount}</span>
            </div>
            {rating}
        </div>
    );
}