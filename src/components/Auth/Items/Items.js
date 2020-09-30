import React from 'react';
import styles from './Items.module.scss';
import itemsFixtures from '../../../fixtures/items';
import {Link, useRouteMatch} from "react-router-dom";

const Items = () => {
    let {url} = useRouteMatch();
    let {items} = itemsFixtures;

    console.log('useRouteMatch()', useRouteMatch());

    let renderItems = items.map((item) => {
        return (
            <tr key={item.id}>
                <td><Link to={`${url}/${item.id}`}>{item.label}</Link></td>
            </tr>
        )
    });

    return (
        <div className={`container ${styles.App}`} data-testid="Items">
            <div className="row col">
                <div className="col">
                    <table width="100%" className="table">
                        <thead>
                        <tr>
                            <td>Name</td>
                        </tr>
                        </thead>
                        <tbody>{renderItems}</tbody>
                    </table>
                </div>
            </div>
        </div>
    )
};

export default Items;