import React from "react";

class Timer extends React.Component {
    constructor(props) {
        super(props);

        this.state = { time: "pending" };
    }

    componentDidMount() {
        setInterval(() => {
            this.setState({
                time: new Date().toLocaleTimeString()
            })
        }, this.props.interval);
    }

    render() {
        return (
            <h2 style={this.props.style} id={'timer'}>
                {this.state.time}
            </h2>
        );
    }
}

export default Timer;