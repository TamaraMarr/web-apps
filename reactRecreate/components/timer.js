import React from "react";
import EventListener, {withOptions} from 'react-event-listener';

let intervalToggler;
let counter = true;

class Timer extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            time: "The time is..." ,
            buttonValue: "Stop Time"
        };
    }

    intervalFunc() {
        intervalToggler = setInterval(() => {
            this.setState({
                time: new Date().toLocaleTimeString()
            })
            this.props.tickTock(this.state.time);
        }, this.props.interval);
    }

    componentDidMount() {
        this.intervalFunc();
    }

    
    handleClick() {
        if(counter) {
            clearInterval(intervalToggler);
            this.setState({
                buttonValue: 'Start Time'
            })
        } else {
            this.intervalFunc();
            this.setState({
                buttonValue: 'Stop Time'
            })
        }
        counter = !counter;
    }

    render() {
        return (
            <div>
                <h2 style={this.props.style} id={'timer'}>
                    {this.state.time}
                </h2>
                <input type="button" id="stopTimer" value={this.state.buttonValue} onClick={(e) => this.handleClick(e)} />
            </div>
        );
    }
}

export default Timer;