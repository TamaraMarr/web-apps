import React from 'react';

class PostPage extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            content: {},
            userContent: {}
        }
    }

    componentDidMount() {
        fetch(`https://jsonplaceholder.typicode.com/posts/${this.props.itemId}`)
            .then(response => response.json())
            .then(jsonResponse => this.setState({ content: jsonResponse }))
            .then(() => {
                fetch(`https://jsonplaceholder.typicode.com/users/${this.state.content.userId}`)
                    .then((response) => response.json())
                    .then(jsonResponse => this.setState({ userContent: jsonResponse }))
            })
    }

    render() {
        const content = this.state.content;
        const userContent = this.state.userContent;

        return (
            <div>
                <h2 style={{ textTransform: "capitalize", color: "purple", margin: "35px" }}>{content.title}</h2>
                <p style={{textAlign: "center", fontSize: "1.2em"}}>{userContent.name}</p>
                <p style={{ marginBottom: "25px" }}>{content.body}</p>
                <hr />
            </div>
        )
    }
}

export default PostPage;