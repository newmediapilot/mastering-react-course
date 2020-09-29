import React from 'react';
import styles from './Items.module.scss';
import itemsFixtures from '../../../fixtures/items';
import {Link, useRouteMatch} from "react-router-dom";

const Items = () => {
    let {url} = useRouteMatch();
    let {items} = itemsFixtures;

    let renderItems = items.map((item) => {
        return (
            <li>
                <Link key={item.id} to={`${url}/view/${item.id}`}>{item.label}</Link>
            </li>
        )
    });

    return (
        <div className={`container ${styles.App}`} data-testid="Items">
            <ul>{renderItems}</ul>
        </div>
    )
};

export default Items;