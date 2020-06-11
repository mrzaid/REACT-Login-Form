import React, { Component } from 'react';
import { BrowserRouter, Route,Switch,Redirect } from 'react-router-dom'
import Login from './component/Login/Login'
import Dashboard from './component/Dashboard/Dashboard'
class Router extends Component {
    state = {
        login:JSON.parse(localStorage.getItem("currentUser"))?true:false
    }
    render() {
        const {login} = this.state
        console.log(login);
        
        return (<BrowserRouter>
            <div>
                {/*  //static cheeze hay */}
                {login && <Navbar/>}
                <Switch>
                    <PrivateRoute exact  path="/dashboard" login={login} component={Dashboard} />
                    <Route exact path="/" component={Login} />
                </Switch>
            </div>
        </BrowserRouter>);

    }
}
const Navbar = ()=>{
    return(
        <div>
       <strong> Navbar </strong>
        </div>
        )
}
const PrivateRoute = ({ component: Component, login, ...rest }) => {
    return (
        <Route {...rest}
            render={(props) => login ?
                <Component exact {...props} /> :
                <Redirect to="/" />}
        />
    )
}
export default Router;
