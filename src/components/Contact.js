import React, {Component} from 'react';

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

    render() {
        const {name, email, phone} = this.props.contact;
        const {showContact} = this.state;
        return (
            <div className="card card-body mb-3">
                <h4>{name}</h4>
                <h3 onClick={this.onShowClick}>+</h3>
                {showContact ?
                    <ul className="list-group">
                        <li className="list-group-item">Email: {email}</li>
                        <li className="list-group-item">Phone: {phone}</li>
                    </ul>
                    : null}
            </div>
        );
    }
}

export default Contact;