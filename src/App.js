import React from 'react';
import styles from './App.scss';
import '../node_modules/bootstrap/scss/bootstrap.scss';
import Login from "./components/Login/Login";
import Auth from "./components/Auth/Auth";
import {Route, Switch, Redirect} from "react-router-dom";

function App() {
    return (
        <main className={`main ${styles.App}`} data-testid="App">
            <Switch>
                <Route path="/login" component={Login}/>
                <Route path="/auth" component={Auth}/>
                <Redirect to="/login"/>
            </Switch>
        </main>
    );
}

export default App;
