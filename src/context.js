import React, {Component} from 'react';

const Context = React.createContext();
//Remove function - take in state and action (id)
const reducer = (state,action)=>{
    switch(action.type) {
        case 'DELETE':
            return {
                //get current state iterable
                ...state,
                contacts: state.contacts.filter(contact =>
                    contact.id !== action.payload)
            };
        default:
            return state;
    }
};

//Global class: Can access state from anywhere in project
export class Provider extends Component {
    state = {
        contacts: [
            {
                id: 5,
                name: "Tom",
                email: "tom@gmail.com",
                phone: "0123456789"
            },
            {
                id: 6,
                name: "Bob",
                email: "bob@gmail.com",
                phone: "0123456789"
            },
            {
                id: 7,
                name: "Job",
                email: "job@gmail.com",
                phone: "0123456789"
            }
        ],
        //make dispatch a global varaible to be called to remove from anywhere
        dispatch: action => this.setState(state => reducer(state, action))
    };

    render() {
        return (
            //pass the whole state
            <Context.Provider value={this.state}>
                {this.props.children}
            </Context.Provider>
        )
    }
}

export const Consumer = Context.Consumer;

