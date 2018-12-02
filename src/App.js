import React, {Component} from 'react';
// import './App.css';
import Header from "./components/Header";
import 'bootstrap/dist/css/bootstrap.min.css'
import Contacts from "./components/Contacts";
import {Provider} from "./context";
import NewMembers from "./components/NewMembers";

class App extends Component {
    render() {
        return (
            //Wrap with provider so other classes can use it
            <Provider>
                <div className="App">
                    <Header/>
                    <div className="container">
                        <Contacts/>

                        <NewMembers/>
                    </div>
                </div>
            </Provider>
        );
    }
}

export default App;
