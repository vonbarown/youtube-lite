import React, { Component } from 'react'
import { CommentsHeader } from './CommentstHeader/CommentsHeader'
import { AddComment } from './AddComment/AddComment'
import { Comment } from './Comment/Comment'
import './Comments.scss'

export class Comments extends Component {
    render() {
        return (
            <div>
                <CommentsHeader commentAmount={this.props.commentAmount} />
                <AddComment />
                <Comment />
                <Comment />
                <Comment />
            </div>
        )
    }
}