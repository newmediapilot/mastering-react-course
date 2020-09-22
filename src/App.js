import React from 'react';
import styles from './App.scss';
import '../node_modules/bootstrap/scss/bootstrap.scss';
import Login from "./components/Login/Login";
import Auth from "./components/Auth/Auth";
import {Route} from "react-router-dom";

function App() {
    return (
        <main className={`main ${styles.App}`} data-testid="App">
            <Route exact path="/ " component={Auth}/>
            <Route exact path="/login" component={Login}/>
        </main>
    );
}

export default App;
