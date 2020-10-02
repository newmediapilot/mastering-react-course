import React, {Component, createRef} from 'react';
import styles from './Login.module.scss';
import {Link} from "react-router-dom";

class Login extends Component {

    state = {
        account: {
            username: '',
            password: ''
        }
    };

    constructor() {
        super();
        this.nameRef = createRef();
    }

    componentDidMount() {
        this.nameRef.current.focus();
    }

    handleSubmit = e => {
        e.preventDefault();

        // do things...
        console.log('handleSubmit...');
    };

    handleChange(e) {
        const account = {...this.state.account};
        account.username = e.currentTarget.value;
        this.setState({account});
    }

    render() {
        return (
            <div className={`container ${styles.TemplateName}`} data-testid="Login">
                <h1>Login</h1>
                <form onSubmit={(e) => this.handleSubmit(e)}>
                    <div className="form-group">
                        <label htmlFor="name">
                            Name
                        </label>
                        <input value={this.state.account.username}
                               onChange={(e) => this.handleChange(e)}
                               ref={this.nameRef}
                               className="form-control"
                               id="name" type="text"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="pass">
                            Password
                        </label>
                        <input //value={this.state.account.password}
                            className="form-control"
                            id="pass" type="password"/>
                    </div>
                    <button className="btn btn-info" type="submit">Submit</button>
                </form>
                <Link to="./auth/welcome">Welcome</Link>
            </div>
        );
    }
}

export default Login;