import React from 'react';
import { Link } from 'react-router-dom';

class AuthorPosts extends React.Component {
    constructor(props) {
        super(props)
        console.log(props);

        this.state = {
            postsInfo: {},
            userContent: {},
            concretePostInfo: {}
        }
    }

    componentDidMount() {
        fetch(`https://jsonplaceholder.typicode.com/posts/`)
            .then(response => response.json())
            .then(jsonResponse => this.setState({ postsInfo: jsonResponse }))
            .then(() => {
                fetch(`https://jsonplaceholder.typicode.com/posts/${this.props.itemId}`)
                    .then((response) => response.json())
                    .then(jsonResponse => this.setState({ concretePostInfo: jsonResponse }))
            })
    }

    render() {
        const postsInfo = this.state.postsInfo;
        const postId = this.props.itemId;
        const concretePostInfo = this.state.concretePostInfo;
        const idOfUser = concretePostInfo.userId;
        let authorsTitles = [];


        let numOfPosts = 0;
        let userId;

        for (let i = 0; i < postsInfo.length; i++) {
            if (postsInfo[i].userId === idOfUser) {
                authorsTitles.push(postsInfo[i].title);
                numOfPosts++;
            }
        }

        return (
            <div>
                <p>{numOfPosts} more posts from the same author</p>
                <ol>
                    {authorsTitles.map((title, index) => {
                        return (
                            <Link to="./PostDetails/"><li style={{textTransform: "capitalize"}} key={index}>{authorsTitles[index]}</li></Link>
                        )
                    })}
                </ol>
            </div>
        )
    }
}

export default AuthorPosts;