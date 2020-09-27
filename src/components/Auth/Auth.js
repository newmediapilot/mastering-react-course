import React, {Component} from 'react';
import styles from './Auth.module.scss';
import Welcome from "../Welcome/Welcome";
import {Route, Switch, Redirect} from "react-router-dom";
import Nav from "../Nav/Nav";
import NotFound from "../NotFound/NotFound";

class Auth extends Component {
    render() {
        return (
            <main className={styles.TemplateName} data-testid="TemplateName">
                <Nav/>
                <Switch>
                    <Route path="./welcome" component={Welcome}/>
                    <Route path="./not-found" component={NotFound}/>
                    <Redirect to="./not-found"/>
                </Switch>
            </main>
        );
    }
}

export default Auth;