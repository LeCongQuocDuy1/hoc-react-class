import React from 'react';
import './Navigation.scss';
import {
    NavLink
} from "react-router-dom";

class Navigation extends React.Component {
    state = {}
    render() {
        return (
            <>
                <div className="topnav">
                    <NavLink to="/" activeClassName="active" exact={true}>
                        Home
                    </NavLink>
                    <NavLink to="/todo" activeClassName="active">
                        Todo
                    </NavLink>
                    <NavLink to="/users" activeClassName="active">
                        Users
                    </NavLink>
                </div>
            </>
        );
    }
}

export default Navigation;