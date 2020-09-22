import React, {Component} from 'react';
import styles from './Login.module.scss';

class Login extends Component {
    render() {
        return (
            <div className={styles.TemplateName} data-testid="Login">
                Login component works!
            </div>
        );
    }
}

export default Login;