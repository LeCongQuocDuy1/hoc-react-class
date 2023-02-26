import React from 'react';
// import {
//     withRouter
// } from "react-router";
import { WithColor } from '../HOC/WithColor';

class HomeComponent extends React.Component {

    // componentDidMount() {
    //     setTimeout(() => {
    //         this.props.history.push('/todo')
    //     }, 3000);
    // }

    render() {
        return (
            <>
                <h1>HOME PAGE</h1>
                <h1>Hoc React Class voi Quoc Duy</h1>
            </>
        );
    }
}

export default WithColor(HomeComponent);