import React, {Component} from 'react';
import styles from './Welcome.module.scss';

class Welcome extends Component {
    render() {
        return (
            <div className={`container ${styles.App}`} data-testid="Welcome">
                Welcome component works!
            </div>
        );
    }
}

export default Welcome;