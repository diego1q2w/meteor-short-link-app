import React from 'react'
import { Link } from 'react-router-dom'
import {Meteor} from 'meteor/meteor'
import browserHistory from './../client/browserHistory'

export default class Login extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            error: ''
        }
    }

    componentDidMount(){
        if(Meteor.userId()) browserHistory.replace('/links')
    }

    submit(e){
        e.preventDefault();
        let email = this.refs.email.value.trim();
        let password = this.refs.password.value.trim();
        Meteor.loginWithPassword({email}, password, err => {
            if(err) this.setState({error: err.reason});
            else this.setState({error: ''});
        })
    }

    render(){
        return (
            <div className="boxed-view">
                <div className="boxed-view__box">
                    <h1>Login</h1>
                    {this.state.error? <p>{this.state.error}</p>: undefined}
                    <form onSubmit={this.submit.bind(this)} className="boxed-view__form">
                        <input type="email" ref="email" name="email" placeholder="Email"/>
                        <input type="password" ref="password" name="password" placeholder="Password"/>
                        <button className="button">LoggIn</button>
                    </form>
                    <Link to="/signup"> Dont you have an account?</Link>
                </div>
            </div>
        )
    }
}