import React, {Component} from 'react';
import styles from './TemplateName.module.scss';

class TemplateName extends Component {
    render() {
        return (
            <div className={styles.TemplateName} data-testid="TemplateName">
                TemplateName component works!
            </div>
        );
    }
}

export default TemplateName;