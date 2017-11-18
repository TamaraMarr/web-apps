import React from 'react';
import { withRouter } from 'react-router';


class ComposePost extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            titleVal: '',
            textVal: '',
            myPosts: []
        }

        this.handleInput = this.handleInput.bind(this);
        this.sendPost = this.sendPost.bind(this);
    }

    handleInput(event) {
        if (event.target.id === 'text') {
            let textInput = event.target.value;

            this.setState({
                textVal: textInput
            });
        } else {
            let titleInput = event.target.value;

            this.setState({
                titleVal: titleInput
            });
        }
    }

    sendPost() {
        fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            body: JSON.stringify({
                title: this.state.titleVal,
                body: this.state.textVal,
                userId: 1
            }),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
            })
            .then((response) => {
                return response.json();
            })
            .then((ourPost) => {
                let allPosts = localStorage.getItem('allPosts');
                let allPostsArr = JSON.parse(allPosts);
                let ourParsedPost = JSON.parse(ourPost)
                allPostsArr.push(ourParsedPost);
                let allPostsStringified = JSON.stringify(allPostsArr);
                localStorage.setItem('newAllPosts', allPostsStringified);
            })

            this.props.history.push('/');
    }

    render() {
        return (
            <div>
                <form id="createPost">
                    <label htmlFor="title">Title</label>
                    <br />
                    <input id="title" type="text" value={this.state.titleVal} onChange={this.handleInput} />
                    <br />
                    <label htmlFor="text">Post</label>
                    <br />
                    <textarea id="text" value={this.state.textVal} onChange={this.handleInput} />
                    <br />
                    <button type="submit" form="createPost" onClick={this.sendPost}>Submit</button>
                </form>
            </div>
        )
    }

}

export default withRouter(ComposePost);