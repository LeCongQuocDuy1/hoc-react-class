import React from "react";
import { withRouter } from "react-router-dom";
import axios from 'axios';
import '../users/DetailUser.scss';


class DetailUser extends React.Component {
    state = {
        userItem: {},
    }

    async componentDidMount() {
        if (this.props.match && this.props.match.params) {
            let id = this.props.match.params.id;
            let res = await axios.get(`https://reqres.in/api/users/${id}`);
            this.setState({
                userItem: res && res.data ? res.data.data : {},
            });
        }
    }

    render() {
        let user = this.state.userItem;
        let isCheckUser = Object.keys(user).length === 0;

        return (
            <>
                <h1>Detail User</h1>

                {!isCheckUser &&
                    <>
                        <div className="card">
                            <img src={user.avatar} alt="John" style={{ width: '100%' }} />
                            <h3>{`${user.first_name} ${user.last_name}`}</h3>
                            <p className="title">{user.email}</p>
                            <p><button>Contact</button></p>
                        </div>
                    </>
                }
            </>
        );
    }
}

export default withRouter(DetailUser);