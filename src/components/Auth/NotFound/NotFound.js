import React, {Component} from 'react';
import styles from './NotFound.module.scss';

class NotFound extends Component {
    render() {
        return (
            <div className={`container ${styles.App}`} data-testid="NotFound">
                NotFound component works!
            </div>
        );
    }
}

export default NotFound;