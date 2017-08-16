import React from 'react';
import {Tracker} from 'meteor/tracker'
import {Links} from './../api/links'
import {Meteor} from 'meteor/meteor'
import LinksListItem from './LinksListItem'
import { Session } from 'meteor/session'
import FlipMove from 'react-flip-move'

export default class LinksList extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            links: []
        }
    }

    componentDidMount(){
        this.linksTraker = Tracker.autorun(() => {
            Meteor.subscribe('links');
            const links = Links.find({
                visible: Session.get('showVisible')
            }).fetch();
            this.setState({links})
        });
    }

    componentWillUnmount(){
        this.linksTraker.stop()
    }

    renderLinksItems(){
        if(this.state.links.length == 0)
            return (<div className="item">
                <p className="item__warning">No links found</p>
            </div>);
        return this.state.links.map(link => {
            const shortUrl = Meteor.absoluteUrl(link._id);
            return <LinksListItem key={link._id} {...link} shortUrl={shortUrl}/>
        })
    }

    render(){
        return(
            <div>
                <div>
                    <FlipMove maintainContainerHeight={true}>
                        {this.renderLinksItems()}
                    </FlipMove>
                </div>
            </div>
        )
    }
}