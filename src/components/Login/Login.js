import React, {Component, createRef} from 'react';
import styles from './Login.module.scss';
import {Link} from "react-router-dom";

class Login extends Component {

    state = {
        account: {
            username: '',
            password: ''
        },
        viewOpts: {
            showPassword: false
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
        let state = {...this.state};
        let {account} = state;
        account[e.currentTarget.name] = e.currentTarget.value;
        this.setState(state);
    }

    togglePassword() {
        let state = {...this.state};
        let {viewOpts} = state;
        viewOpts.showPassword = !viewOpts.showPassword;
        this.setState(state);
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
                               onChange={(e) => this.handleChange(e)} ref={this.nameRef}
                               name="username"
                               className="form-control"
                               id="name" type="text"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="pass">
                            Password
                        </label>
                        <input value={this.state.account.password}
                               onChange={(e) => this.handleChange(e)}
                               name="password"
                               className="form-control"
                               id="pass" type={(this.state.viewOpts.showPassword) ? "text" : "password"}/>
                    </div>
                    <button className="btn btn-info mr-3" type="submit">Submit</button>

                    <button className="btn btn-info" type="button" onClick={() => this.togglePassword()}>{(this.state.viewOpts.showPassword) ? "Hide" : "Show"} Password
                    </button>
                </form>
                <hr/>
                <Link to="./auth/welcome">Welcome</Link>
            </div>
        );
    }
}

export default Login;