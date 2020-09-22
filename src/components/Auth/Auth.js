import React, {Component} from 'react';
import styles from './Auth.module.scss';

class Auth extends Component {
    render() {
        return (
            <div className={styles.TemplateName} data-testid="TemplateName">
                Auth component works!
            </div>
        );
    }
}

export default Auth;