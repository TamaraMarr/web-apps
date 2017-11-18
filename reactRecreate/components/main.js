import React from "react";
import Post from "./post";
import Authors from "./authors";
import About from "./about";
import Search from "./search";
import ComposePost from "./compose";
import {
    Link
} from 'react-router-dom';

class Main extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            posts: [],
            newPosts: [],
            matchedPosts: [],
            allPosts: [],
            toggler: true
        };

        this.searchByTitle = this.searchByTitle.bind(this);
        this.resetPage = this.resetPage.bind(this);
        // this.createNewPostArray = this.createNewPostArray.bind(this);
        // this.addNewPost = this.addNewPost.bind(this);
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(posts => {
                this.setState({
                        posts
                    }),
                this.setState({
                        toggler: false
                    })
            })
            .then((response) => {
                let jbniState = JSON.stringify(this.state.posts);
                localStorage.setItem('allPosts', jbniState);
            })
    }

    searchByTitle(searchTerm) {
        if(localStorage.getItem('allPosts')) {
            let newPosts = localStorage.getItem('allPosts');
            newPosts = JSON.parse(newPosts);
            const matchedPosts = newPosts.filter(post => (post.title.indexOf(searchTerm) >= 0));
        } else {
            let newPosts = localStorage.getItem('allPosts');
            newPosts = JSON.parse(newPosts);
            const matchedPosts = this.state.newPosts.filter(post => (post.title.indexOf(searchTerm) >= 0));
        }

        this.setState({
            matchedPosts,
            toggler: true
        })
    }

    resetPage() {
        this.setState({
            toggler: false
        });
    }

    render() {
        let posts;

        if (!this.state.toggler) {
            if(localStorage.getItem('allPosts')) {
                let newPosts = localStorage.getItem('allPosts');
                posts = JSON.parse(newPosts);
                console.log(posts + ' U IFU U IFU')
            } else {
                let newPosts = localStorage.getItem('allPosts');
                posts = JSON.parse(newPosts);
                console.log(posts + ' U PRETPOSLEDNJEM ELSU')
            }
        } else {
            posts = this.state.matchedPosts;
            console.log(posts + ' U POSLEDNJEM ELSU')
        }

        return (
            <div>
            <Search handleInputByTitle={this.searchByTitle} resetResults={this.resetPage} instant={false} />
                <div className="row">
                    {posts.map((item) => {
                        return (<Post post={item} postId={item.id} key={item.id} />)
                    })
                    }
                </div>
            </div>
        )
    }
}

export default Main;