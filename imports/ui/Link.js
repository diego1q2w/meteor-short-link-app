import React from 'react'
import {Meteor} from 'meteor/meteor'
import browserHistory from './../client/browserHistory'
import LinksList from './LinksList'
import PrivateHeader from './PrivateHeader'
import AddLink from './AddLink'
import LinksListFilter from './LinksListFilter'

export default class Link extends React.Component{
    componentDidMount(){
        if(!Meteor.userId()) browserHistory.replace('/')
    }

    render(){
        return (<div>
            <PrivateHeader title="Links"/>
            <div className="page-content">
                <LinksListFilter/>
                <AddLink/>
                <LinksList/>
            </div>
        </div>)
    }
}