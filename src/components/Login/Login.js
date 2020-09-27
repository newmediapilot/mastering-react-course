import React, {Component} from 'react';
import styles from './Login.module.scss';
import {Link} from "react-router-dom";

class Login extends Component {
    render() {
        return (
            <div className={`container ${styles.TemplateName}`} data-testid="Login">
                Login works!
                <Link to="./auth/welcome">Welcome</Link>
            </div>
        );
    }
}

export default Login;