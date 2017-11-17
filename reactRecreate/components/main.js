import React from "react";
import Post from "./post";
import Authors from "./authors";
import About from "./about";
import Search from "./search";
import ComposePost from "./compose";
import { Link } from 'react-router-dom';

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
            .then(posts => this.setState({
                posts
            }),
            this.setState({
                toggler: false
            })
        ).then((response) => {
            let jbniState = JSON.stringify(this.state.posts);
            localStorage.setItem('allPosts', jbniState);
        })
        

        // this.createNewPostArray();
    }

    // createNewPostArray() {
    //     this.addNewPost();

    //     let allPostsTogether = this.state.allPosts;
    //     allPostsTogether = this.state.posts.concat(this.state.newPosts)

    //     this.setState({
    //         allPosts: allPostsTogether
    //     })
    // }

    // addNewPost() {
    //     let newPost = localStorage.getItem('newPosts');

       
    //     console.log(newPost);

    //     this.setState({
    //         newPost: parsedPosts
    //     })
    // }

    searchByTitle(searchTerm) {
        // let allPosts = get
        const matchedPosts = this.state.posts.filter(post => (post.title.indexOf(searchTerm) >= 0))
        
        this.setState({
            matchedPosts
        })
        this.setState({
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
        let newPosts = localStorage.getItem('newAllPosts');
        console.log(newPosts);

        if (!this.state.toggler) {
            posts = JSON.parse(newPosts);
        } else {
            posts = this.state.matchedPosts;
        }



        return (
            <div>
                <Search handleInputByTitle={this.searchByTitle} resetResults={this.resetPage} instant={true} />
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