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
        let input = this.state.inputVal;
        this.setState({
            inputVal: event.target.value
        })

        if(!input){
            this.props.resetResults();
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
                <button onClick={this.handleClick}>Search</button>
            </div>
        )
    }
}

export default Search;