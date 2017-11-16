import React from "react";
import Post from "./post";
import Authors from "./authors";
import About from "./about";
import Search from "./search";

import { Link } from 'react-router-dom';

let toggler = true;

class Main extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            posts: [],
            matchedPosts: []
        };

        this.searchByTitle = this.searchByTitle.bind(this);
        this.resetPage = this.resetPage.bind(this);
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(posts => this.setState({ 
                posts }),
                toggler = false
            )
    }

    searchByTitle(searchTerm) {
        const matchedPosts = this.state.posts.filter(post => (post.title.indexOf(searchTerm) >= 0))

        this.setState({
            matchedPosts
        })
        toggler = true
    }

    resetPage(){
        this.setState({
            posts: this.state.posts
        })
        toggler = false;
    }

    render() {
        let posts;

        if(!toggler) {
            posts = this.state.posts;
        } else {
            posts = this.state.matchedPosts;
        }

        if (posts.length === 0) {
            return (
                <div>
                    <p>No posts</p>
                    <Search handleInputByTitle={this.searchByTitle} resetResults={this.resetPage} />
                </div>
            )
        }
        
        return (
            <div>
            <Search handleInputByTitle={this.searchByTitle} resetPage={this.resetPage}/>
                <div className="row">
                    {posts.map((item) => {
                        return (
                            <Post post={item} postId={item.id} key={item.id} />
                        )
                    })}
                </div>
            </div>
        )
    }
}

export default Main;