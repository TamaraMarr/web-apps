import React from "react";
import Post from "./post";
import Authors from "./authors";
import About from "./about";
import { Link } from 'react-router-dom';

class Main extends React.Component {
    constructor(props) {
        super(props)
        this.state = { posts: [] };
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(posts => this.setState({ posts }))
    }

    render() {
        const posts = this.state.posts;

        if (posts.length === 0) {
            return <p>No posts</p>
        }

        return (
            <div className="row">
                {posts.map((item) => {
                    return (
                        <Link to={`./postDetails/${item.id}`} key={item.id}>
                            <Post post={item} postId={item.id} />
                        </Link>
                    )
                })}
            </div>
        )
    }
}

export default Main;