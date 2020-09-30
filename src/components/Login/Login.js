import React, {Component} from 'react';
import styles from './Login.module.scss';
import {Link} from "react-router-dom";

class Login extends Component {
    render() {
        return (
            <div className={`container ${styles.TemplateName}`} data-testid="Login">
                <h1>Login</h1>
                <form>
                    <div className="form-group">
                        <label htmlFor="name">
                            Name
                        </label>
                        <input className="form-control" id="name" type="text"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="pass">
                            Password
                        </label>
                        <input className="form-control" id="pass" type="password"/>
                    </div>
                    <button className="btn btn-info" type="submit">Submit</button>
                </form>
                <Link to="./auth/welcome">Welcome</Link>
            </div>
        );
    }
}

export default Login;