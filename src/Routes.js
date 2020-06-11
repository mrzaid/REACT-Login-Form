import React, { Component } from 'react';
import { BrowserRouter, Route, } from 'react-router-dom'
import Login from './component/Login/Login'
class Router extends Component {
    state = {}
    render() {
        return (<BrowserRouter>
            <div>
                <switch>
                    <Route path="/" component={Login} />
                </switch>
            </div>
        </BrowserRouter>);

    }
}

export default Router;
