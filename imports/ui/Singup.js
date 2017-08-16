import React from 'react'
import { Link } from 'react-router-dom'
import {Accounts} from 'meteor/accounts-base'
import {Meteor} from 'meteor/meteor'
import browserHistory from './../client/browserHistory'

export default class SingUp extends React.Component{

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
        if(password.length < 4){
            return this.setState({error: 'Password must be more than 4 characters long'});
        }
        Accounts.createUser({email, password}, err => {
            if(err) this.setState({error: err.reason});
            else this.setState({error: ''});
        });
    }

    render(){
        return (
            <div className="boxed-view">
                <div className="boxed-view__box">
                    <h1>Joint to Short Link</h1>
                    {this.state.error? <p>{this.state.error}</p>: undefined}
                    <form onSubmit={this.submit.bind(this)} noValidate className="boxed-view__form">
                        <input type="email" ref="email" name="email" placeholder="Email"/>
                        <input type="password" ref="password" name="password" placeholder="Password"/>
                        <button className="button">Create Account</button>
                    </form>
                    <Link to="/">Already have an account</Link>
                </div>
            </div>
        )
    }
}
