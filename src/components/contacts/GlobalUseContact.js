import React, {Component} from 'react';
import {Consumer} from "../../context";

class Contact extends Component {
    state = {
        showContact: false
    };
    //Allow onShowClick to access state of component
    // this.onShowClick = this.onShowClick.bind(this);

    //Bind the function to class by using = () =>
    onShowClick = (event) => {
        this.setState({
            //Change boolean when clicked on to opposite
            showContact: !this.state.showContact
        })
    };

    //Access dispatch in context.js to delete
    onDeleteClick = (id, dispatch) => {
        dispatch({type: 'DELETE', payload: id})
    };

    render() {
        const {id, name, email, phone} = this.props.contact;
        const {showContact} = this.state;
        return (
            <Consumer>
                {value => {
                    const {dispatch} = value;
                    return (
                        <div className="card card-body mb-3">
                            <h4>{name}</h4>
                            <h3 onClick={this.onShowClick}
                                style={{cursor: 'pointer'}}>+</h3>
                            <h3 style={{
                                cursor: 'pointer', float: 'right',
                                color: 'red'
                                //    pass in id and dispatch function to remove
                            }} onClick={this.onDeleteClick.bind(this, id, dispatch)}>X</h3>
                            {showContact ?
                                <ul className="list-group">
                                    <li className="list-group-item">Email: {email}</li>
                                    <li className="list-group-item">Phone: {phone}</li>
                                </ul>
                                : null}
                        </div>
                    )
                }}
            </Consumer>
        );
    }

}

export default Contact;