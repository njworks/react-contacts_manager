import React, {Component} from 'react';
import {Consumer} from "../../context";
import GlobalUseContact from "./GlobalUseContact";

class NewMembers extends Component {
    render() {
        return (
            <Consumer>
                {value => {
                    //Get contacts from Context.js state
                    const {contacts} = value;
                    return (
                        <React.Fragment>
                            {contacts.map(contact => (
                                <GlobalUseContact key={contact.id} contact={contact}/>
                            ))}
                        </React.Fragment>
                    )
                }}
            </Consumer>
        );
    }
}

export default NewMembers;