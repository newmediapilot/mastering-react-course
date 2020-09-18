import React, {Component} from 'react';
import styles from './Welcome.module.scss';

class Welcome extends Component {
    render() {
        <div className={styles.Welcome} data-testid="Welcome">
            Welcome component works!
        </div>
    }
}

export default Welcome;