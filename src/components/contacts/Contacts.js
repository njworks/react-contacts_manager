import React, {Component} from 'react';
import Contact from "./Contact";

class Contacts extends Component {
    state = {
        contacts: [
            {
                id: 1,
                name: 'John',
                email: 'john@gmail.com',
                phone: '0123456789'
            },
            {
                id: 2,
                name: 'Karen',
                email: 'karen@gmail.com',
                phone: '0123456789'
            },
            {
                id: 3,
                name: 'James',
                email: 'james@gmail.com',
                phone: '0123456789'
            }
        ]
    };

    //Delete contact by filtering out unwanted id
    deleteContact =(id) => {
        const {contacts} = this.state;
        const newContacts = contacts.filter(x =>
        x.id !== id);
        this.setState({
        contacts: newContacts
        })
    };


    render() {
        const {contacts} = this.state;
        return (
            //Fragment allows to remove unwanted div or elements
            <React.Fragment>
                {contacts.map(contact => (
                    <Contact key={contact.id} contact={contact}
                            //allows function to access state of component
                             deleteHandler={this.deleteContact.bind(this,
                             contact.id)} />
                ))}
            </React.Fragment>
        );
    }
}

export default Contacts;