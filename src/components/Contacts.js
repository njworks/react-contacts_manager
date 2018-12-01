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

    render() {
        const {contacts} = this.state;
        return (
            //Fragment allows to remove unwanted div or elements
            <React.Fragment>
                {contacts.map(contact => (
                    <Contact key={contact.id} contact={contact}/>
                ))}
            </React.Fragment>
        );
    }
}

export default Contacts;