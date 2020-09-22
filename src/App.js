import React from 'react';
import styles from './App.scss';
import '../node_modules/bootstrap/scss/bootstrap.scss';
import Login from "./components/Login/Login";
import Nav from "./components/Nav/Nav";
import Welcome from "./components/Welcome/Welcome";

function App() {
    return (
        <main className={`main ${styles.App}`} data-testid="App">
            <Nav />
            <Welcome />
        </main>
    );
}

export default App;
