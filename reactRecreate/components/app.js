import React from 'react';
import { Switch, Route } from "react-router-dom";
import Header from './header';
import Main from './main';
import Footer from './footer';
import Authors from './authors';
import About from './about';

class App extends React.Component {
    // constructor(props) {
    //     super(props);
    // }

    render() {
        return (
            <div>
                <Header />
                <div className="container">
                    <Switch>
                        <Route exact path='/' component={Main} />
                        <Route path='/authors' component={Authors} />
                        <Route path='/about' component={About} />
                    </Switch>
                </div>
                <Footer />
            </div>
        );
    }
}

export default App;