import React from 'react';
import ReactDOM from 'react-dom';
import 'babel-polyfill';
import {BrowserRouter} from "react-router-dom";

import App from './components/app.js';

ReactDOM.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>,
    document.getElementById('app')
);