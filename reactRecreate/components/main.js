import React from "react";
import Post from "./post";
import Authors from "./authors";
import About from "./about";

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
            <div>
                {posts.map((item) => {
                    return <Post post={item} key={item.id} />
                })}
            </div>
        )
    }
}

export default Main;