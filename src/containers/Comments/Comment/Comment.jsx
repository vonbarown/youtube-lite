import React from 'react'
import { Button, Image } from 'semantic-ui-react'
import { Rating } from '../../../components/Rating/Rating'
import './Comment.scss'

export const Comment = (props) => {
    return (
        <div className='comment'>
            <Image className='user-image' src='http://via.placeholder.com/48x48' circular />
            <div>
                <span>Comment text</span>
                <div className='comment-action'>
                    <Rating likeCount={1} /> <Button size='mini' compact>Reply</Button>
                </div>
            </div>
        </div>
    )
}