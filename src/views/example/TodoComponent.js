import React from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ListTodo } from '../todo/ListTodo';
import { WithColor } from '../HOC/WithColor';


class TodoComponent extends React.Component {
    state = {}
    render() {
        return (
            <>
                <h1>TODO PAGE</h1>
                <h1>Build a To Do App</h1>
                <br />

                <ListTodo />

                <ToastContainer
                    position="top-right"
                    autoClose={3000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                    theme="light"
                />
            </>
        );
    }
}

export default WithColor(TodoComponent);