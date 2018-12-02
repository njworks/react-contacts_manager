import React, {Component} from 'react';
// import './App.css';
import Header from "./components/layout/Header";
import 'bootstrap/dist/css/bootstrap.min.css'
import Contacts from "./components/contacts/Contacts";
import {Provider} from "./context";
import NewMembers from "./components/contacts/NewMembers";
import AddContact from "./components/contacts/AddContact";
import AddContactDifferent from "./components/contacts/AddContactDifferent";


class App extends Component {
    render() {
        return (
            //Wrap with provider so other classes can use it
            <Provider>
                <div className="App">
                    <Header/>
                    <div className="container">
                        {/*<AddContact/>*/}
                        <AddContactDifferent/>
                        <Contacts/>
                        <NewMembers/>
                    </div>
                </div>
            </Provider>
        );
    }
}

export default App;
