import React, {Component} from 'react';

//The form doesn't save to state
//Uncontrolled component which uses ref instead of state
class AddContact extends Component {
    constructor(props) {
        super(props);

        this.nameInput = React.createRef();
        this.emailInput = React.createRef();
        this.phoneInput = React.createRef();
    }

    onSubmit = (e) => {
        e.preventDefault();
        const contact = {
            name: this.nameInput.current.value,
            email: this.emailInput.current.value,
            phone: this.phoneInput.current.value
        };
        console.dir(contact)
    };

    static defaultProps = {
        name: 'Fred',
        email: 'fred@g.com',
        phone: '0122345689'
    };

    render() {
        const {name, email, phone} = this.props;

        return (
            <div className="card mb-3">
                <div className="card-header">
                    Add Contact
                </div>
                <div className="card-body">
                    <form onSubmit={this.onSubmit}>
                        <div className="form-group">
                            <label htmlFor="name">Name</label>
                            <input type="text" name="name"
                                   className="form-control form-control-lg"
                                   placeholder="Enter name"
                                   defaultValue={name}
                                   ref={this.nameInput}/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input type="email" name="email"
                                   className="form-control form-control-lg"
                                   placeholder="Enter email"
                                   defaultValue={email}
                                   ref={this.emailInput}/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="phone">Phone</label>
                            <input type="text" name="phone"
                                   className="form-control form-control-lg"
                                   placeholder="Enter phone no."
                                   defaultValue={phone}
                                   ref={this.phoneInput}/>
                        </div>
                        <input type="submit" value="Add Contact"
                               className="btn btn-block btn-white"/>
                    </form>
                </div>

            </div>
        );
    }
}


export default AddContact;