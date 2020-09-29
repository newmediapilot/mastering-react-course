import React, {Component} from 'react';
import styles from './ItemView.module.scss';
import {Link, useParams, useRouteMatch, useHistory} from "react-router-dom";

const ItemView = () => {
    let {id} = useParams();
    let {url} = useRouteMatch();
    let {goBack} = useHistory();
    return (
        <div className={`container ${styles.App}`} data-testid="ItemView">
            <h1>
                ItemView component works! -> {id}
            </h1>
            <div>
                <button onClick={()=>goBack()}>Back</button>
            </div>
        </div>
    );
};

export default ItemView;