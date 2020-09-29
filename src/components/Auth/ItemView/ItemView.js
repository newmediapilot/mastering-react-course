import React, {Component} from 'react';
import styles from './ItemView.module.scss';

class ItemView extends Component {
    render() {
        return (
            <div className={styles.ItemView} data-testid="ItemView">
                ItemView component works!
            </div>
        );
    }
}

export default ItemView;