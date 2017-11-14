import React from "react";
import Timer from "./timer";
import {Link} from 'react-router-dom';

class Header extends React.Component {
    constructor(props){
        super(props);
        
        this.state = { time: "pending" };    
    }

    render() {
        return (
            <div className="container-fluid" style={{padding: "0"}}>
                <h1>Well, whaddaya know</h1>
                <Timer style={{color:"#6D5A7D"}} interval="1000" />
                <nav>
                    <ul>
                        <li><Link to='/'>Home</Link></li>
                        <li><Link to='/authors'>Authors</Link></li>
                        <li><Link to='/about'>About</Link></li>
                    </ul>
                </nav>
            </div>
        );
    }
};

export default Header;