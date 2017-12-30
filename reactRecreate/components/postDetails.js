import React from 'react';
import PostPage from './postPage';
import AuthorPosts from './authorPosts';
import { Link } from 'react-router-dom';

class PostDetails extends React.Component {
    constructor(props){
        super(props)
    }

    render() {
        return(
            <div>
                <PostPage itemId={this.props.match.params.postId} />
                <AuthorPosts itemId={this.props.match.params.postId} />
            </div>
        )
    }
}

export default PostDetails;