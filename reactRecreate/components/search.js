import React from 'react';
import Main from './main';

class Search extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            inputVal: ''
        }

        this.handleInput = this.handleInput.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.handleKeyPress = this.handleKeyPress.bind(this);
    }

    handleInput(event) {
        let input = event.target.value;

        this.setState({
            inputVal: input
        });

        if (input === "") {
            this.props.resetResults();
            return;
        }

        if (this.props.instant) {
            this.props.handleInputByTitle(input);
        }
    }

    handleClick() {
        this.props.handleInputByTitle(this.state.inputVal);
    }

    handleKeyPress(e) {
        if (e.key === 'Enter') {
            this.props.handleInputByTitle(this.state.inputVal);
        }
    }

    render() {
        return (
            <div>
                <input id="inputVal" onChange={this.handleInput} value={this.state.inputVal} onKeyPress={this.handleKeyPress} />
                {!this.props.instant ? <button onClick={this.handleClick}>Search</button> : '   Instant search is on.'}
            </div>
        )
    }
}

export default Search;