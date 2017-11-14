import React from 'react';

class Authors extends React.Component {
    constructor(props) {
        super(props)

        this.state = {data:[]}
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
            <div>
                <h2 style={{marginTop: "75px", textAlign: "center"}}>NAME SURNAME</h2>
                 <p>Sam Smith</p>
                <h2 style={{marginTop: "75px", textAlign: "center"}}>EXPERTISE</h2>
                 <p>Molecular Biology</p>
                
            </div>
        )
    }
}

export default Authors;