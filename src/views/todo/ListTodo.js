import React from 'react';
import { toast } from 'react-toastify';
class ListTodo extends React.Component {
    state = {
        isShow: false,
        editTodo: {},
        title: "",
        listTodos: [
            {
                id: 'todo-1',
                title: 'read a book',
            },
            {
                id: 'todo-2',
                title: 'listen a music',
            },
            {
                id: 'todo-3',
                title: 'write a blog',
            },
        ],
    }

    handleGetValue = (e) => {
        this.setState({ title: e.target.value })
    }

    handleAdd = () => {
        if (!this.state.title) {
            toast.error('Vui lòng nhập thông tin đầy đủ!');
            return;
        }

        let lists = {
            id: `todo-${Math.floor(Math.random() * 100)}`,
            title: this.state.title,
        }

        let listsNew = [...this.state.listTodos, lists];

        this.setState({ listTodos: listsNew, title: '' })

        toast.success('🦄 Add Success!');
    }

    handleDelete = (item) => {
        let listNews = this.state.listTodos.filter(list => list.id !== item.id);
        this.setState({ listTodos: listNews });
        toast.success('🦄 Delete Success!');
    }

    handleEdit = (item) => {
        let isCheckEditTodo = Object.keys(this.state.editTodo).length === 0;

        if (!isCheckEditTodo && this.state.editTodo.id === item.id) {
            let listTodosCopy = [...this.state.listTodos];
            let objectIndex = listTodosCopy.findIndex(obj => obj.id === item.id)
            listTodosCopy[objectIndex].title = this.state.editTodo.title;

            this.setState({ listTodos: listTodosCopy, editTodo: {} });
            toast.success('🦄 Update Success!');
            return;
        }

        this.setState({ editTodo: item });
    }

    handleOnChangeEdit = (e) => {
        let editTodoCopy = { ...this.state.editTodo };
        editTodoCopy.title = e.target.value;
        this.setState({ editTodo: editTodoCopy });
    }

    handleShowHide = () => {
        this.setState({ isShow: !this.state.isShow })
    }

    render() {
        let isCheckEditTodo = Object.keys(this.state.editTodo).length === 0;

        return (
            <>
                <div className="todo-container">
                    <div className="todo-form">
                        <input type="text" value={this.state.title} onChange={(e) => this.handleGetValue(e)} />
                        <button onClick={() => this.handleAdd()}>Add</button>
                    </div>
                    <br />
                    <button onClick={() => this.handleShowHide()}>Show/Hide</button>
                    <br />
                    {this.state.isShow &&
                        this.state.listTodos.map((item) => {
                            return (
                                <>
                                    <ul className="todo-list" key={item.id}>
                                        <li className="todo-item">
                                            {
                                                !isCheckEditTodo && this.state.editTodo.id === item.id
                                                    ?
                                                    <input
                                                        type="text"
                                                        value={this.state.editTodo.title}
                                                        onChange={(e) => this.handleOnChangeEdit(e)}
                                                    />
                                                    :
                                                    <span>{item.title}</span>
                                            }
                                            <span style={{ margin: '0 5px' }}> - </span>
                                            <span
                                                onClick={() => this.handleEdit(item)}
                                                style={{
                                                    fontSize: '0.8rem',
                                                    padding: '0.3rem 0.7rem',
                                                    backgroundColor: '#000',
                                                    borderRadius: '50%',
                                                    color: '#fff'
                                                }}>
                                                {isCheckEditTodo === false && this.state.editTodo.id === item.id ? 'Save' : 'Edit'}
                                            </span>
                                            <span style={{ margin: '0 5px' }}>-</span>
                                            <span
                                                onClick={() => this.handleDelete(item)}
                                                style={{
                                                    fontSize: '0.8rem',
                                                    padding: '0.3rem 0.7rem',
                                                    backgroundColor: '#000',
                                                    borderRadius: '50%',
                                                    color: '#fff'
                                                }}>
                                                Delete
                                            </span>
                                        </li>
                                    </ul>
                                </>
                            )
                        })
                    }
                </div>
            </>
        );
    }
}

export {
    ListTodo,
};