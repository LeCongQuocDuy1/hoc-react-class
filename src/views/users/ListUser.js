import React from 'react';
import axios from 'axios';
import './ListUser.scss';
import { WithColor } from '../HOC/WithColor';

class ListUser extends React.Component {
    state = {
        listUsers: [],
    }

    async componentDidMount() {
        // axios.get('https://reqres.in/api/users?page=2')
        //     .then(res => {
        //         console.log(res.data.data);
        //     })
        let res = await axios.get('https://reqres.in/api/users?page=2');

        this.setState({
            listUsers: res && res.data ? res.data.data : [],
        });

        console.log(this.state.listUsers);
    }

    render() {
        let listUsers = this.state.listUsers;

        return (
            <>
                <h1>User List Manage</h1>

                <table>
                    <tr>
                        <th>ID</th>
                        <th>Avatar</th>
                        <th>Full Name</th>
                        <th>Email</th>
                    </tr>
                    {
                        listUsers && listUsers.length > 0 &&
                        <>
                            {
                                listUsers.map((user) => {
                                    return (
                                        <tr key={user.id}>
                                            <td>{user.id}</td>
                                            <td><img src={user.avatar} alt="" className='avatar' /></td>
                                            <td><h4>{`${user.first_name} ${user.last_name}`}</h4></td>
                                            <td><p>{user.email}</p></td>
                                        </tr>
                                    )
                                })
                            }
                        </>
                    }
                </table>
            </>
        );
    }
}

export default WithColor(ListUser);