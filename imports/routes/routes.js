import React from 'react'
import SingUp from './../ui/Singup'
import Link from './../ui/Link'
import NoFound from './../ui/NotFound'
import Login from './../ui/Login'
import {Route, Router, Switch} from 'react-router'
import browserHistory from './../client/browserHistory'

const unauthenticatedPages = ['/', '/signup'];
const authenticatedPages = ['/links'];

export const onAuthChange = isAuthenticated =>{
    const pathname =  browserHistory.location.pathname;
    const isUnauthenticatedPage = unauthenticatedPages.includes(pathname);
    const isAuthenticatedPage = authenticatedPages.includes(pathname);
    if(isUnauthenticatedPage && isAuthenticated) browserHistory.replace('/links');
    else if(isAuthenticatedPage && !isAuthenticated) browserHistory.replace('/')
};

export const routes = (
    <Router history={browserHistory}>
        <Switch>
            <Route exact path="/" component={Login}/>
            <Route path="/links" component={Link}/>
            <Route path="/signup" component={SingUp}/>
            <Route path="*" component={NoFound}/>
        </Switch>
    </Router>
);
