import React from "react";
import PropTypes from "prop-types";


const Post = (props) => {
    return (
        <div className="col-12 posts">
            <div className="border">
                <h2 style={{ color: "rgb(172, 111, 172)" }}>{props.post.title}</h2>
                <p>{props.post.body}</p>
                <hr />
            </div>
        </div>
    );
};


// Post.propTypes = {
//     post: PropTypes.shape({
//         userId: PropTypes.number,
//         id: PropTypes.number,
//         title: PropTypes.string,
//         body: PropTypes.string
//     }).isRequired
// };

export default Post;