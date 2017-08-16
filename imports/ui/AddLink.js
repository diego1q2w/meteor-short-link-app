import React from 'react'
import Modal from 'react-modal'
export default class AddLink extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            url: '',
            isOpen: false,
            error: ''
        }
    }

    onSubmit(e){
        e.preventDefault();
        const {url}= this.state;

        Meteor.call('links.insert', url, (err, res) => {
            if(!err) this.handleModalClose();
            else this.setState({error: err.reason})
        });
    }

    handleModalClose(){
        this.setState({isOpen: false, url:'', error:''})
    }

    onChange(e){
        this.setState({url: e.target.value.trim()})
    }

    render(){
        return(<div>
            <button onClick={() => this.setState({isOpen: true})} className="button">+Add Link</button>
            <Modal
                isOpen={this.state.isOpen}
                contentLabel="Add Link"
                onAfterOpen={()=> this.refs.url.focus()}
                onRequestClose={this.handleModalClose.bind(this)}
                className="boxed-view__box"
                overlayClassName="boxed-view boxed-view--modal">
                <h1>Add Link</h1>
                { this.state.error? <p>{this.state.error}</p>: undefined}
                <form onSubmit={this.onSubmit.bind(this)} className="boxed-view__form">
                    <input onChange={this.onChange.bind(this)}
                           type="text"placeholder="URL" ref='url' value={this.state.url}/>
                    <button className="button">Add Link</button>
                    <button type="button" className="button button--secondary" onClick={this.handleModalClose.bind(this)}>Cancel</button>
                </form>
            </Modal>
        </div>)
    }
}

