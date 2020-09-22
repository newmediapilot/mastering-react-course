import React, {Component} from 'react';
import styles from './Auth.module.scss';

class Auth extends Component {
    render() {
        return (
            <div className={`container ${styles.TemplateName}`} data-testid="TemplateName">
                Auth works!
            </div>
        );
    }
}

export default Auth;