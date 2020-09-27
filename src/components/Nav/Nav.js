import React, {Component} from 'react';
import styles from './Nav.module.scss';
import {Link} from "react-router-dom";

class Nav extends Component {
    render() {
        return (
            <div
                className={`${styles.TemplateName} d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-white border-bottom box-shadow`}
                data-testid="Nav">
                <h5 className="my-0 mr-md-auto font-weight-normal">Company name</h5>
                <nav className="my-2 my-md-0 mr-md-3">
                    <Link className="p-2 text-dark" to="/login">login</Link>
                    <Link className="p-2 text-dark" to="/welcome">welcome</Link>
                </nav>
                <a className="btn btn-outline-primary" href="#">help</a>
            </div>
        );
    }
}

export default Nav;