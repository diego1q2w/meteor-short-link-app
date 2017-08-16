import React from 'react';
import { Session } from 'meteor/session'

export default class LinksListFilter extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            showVisible: true
        }
    }

    componentDidMount(){
        this.showVisibleTraker = Tracker.autorun(() => {
            this.setState({showVisible: Session.get('showVisible')})
        });
    }

    componentWillUnmount(){
        this.showVisibleTraker.stop()
    }

    render(){
        return(
            <div>
                <label className="checkbox">
                    <input className="checkbox__box" checked={!this.state.showVisible}
                        type="checkbox" onChange={(e) => Session.set('showVisible', !e.target.checked)}/>
                    show hidden links
                </label>
            </div>
        )
    }
}