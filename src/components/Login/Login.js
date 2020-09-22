import React, {Component} from 'react';
import styles from './Login.module.scss';

class Login extends Component {
    render() {
        return (
            <div className={`container ${styles.TemplateName}`} data-testid="Login">
                Login works!
            </div>
        );
    }
}

export default Login;