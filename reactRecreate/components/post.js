import React from "react";
import PropTypes from "prop-types";
import PostDetails from "./postDetails";
import { Link } from 'react-router-dom';

class Post extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="col-12 col-md-6 posts" >
                <div className="border">
                    <Link to={`./postDetails/${this.props.postId}`}><h2 style={{ color: "rgb(172, 111, 172)" }}>{this.props.post.title}</h2> </Link>
                    <p>{this.props.post.body}</p>
                    <hr />
                </div>
            </div>
        );
    }
}

// Post.propTypes = {
//     post: PropTypes.shape({
//         userId: PropTypes.number,
//         id: PropTypes.number,
//         title: PropTypes.string,
//         body: PropTypes.string
//     }).isRequired
// };

export default Post;