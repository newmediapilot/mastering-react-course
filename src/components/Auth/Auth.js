import React, {Component} from 'react';
import styles from './Auth.module.scss';
import Welcome from "./Welcome/Welcome";
import {useRouteMatch, Route, Switch, Redirect} from "react-router-dom";
import Nav from "../Nav/Nav";
import NotFound from "./NotFound/NotFound";
import Items from "./Items/Items";
import ItemView from "./ItemView/ItemView";

const Auth = () => {
    let {path, url} = useRouteMatch();
    return (
        <main className={styles.TemplateName} data-testid="TemplateName">
            <Nav/>
            <Switch>
                <Route path={`${path}/welcome`} component={Welcome}/>
                <Route path={`${path}/items/:id`} component={(props)=><ItemView/>}/>
                <Route path={`${path}/items`} component={Items}/>
                <Route path={`${path}/not-found`} component={NotFound}/>
                <Redirect to={`${path}/not-found`}/>
            </Switch>
        </main>
    );
};

export default Auth;