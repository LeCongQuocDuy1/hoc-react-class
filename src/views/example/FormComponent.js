import React from "react";

class FormComponent extends React.Component {
    state = {
        title: "",
        salary: "",
    }

    handleSubmit = (e) => {
        e.preventDefault();

        if (!this.state.title || !this.state.salary) {
            alert("Dien day du thong tin gium t cai?");
            return;
        }

        this.props.addNewJob({
            id: Math.round(Math.random() * 100),
            title: this.state.title,
            salary: this.state.salary,
        })
        this.setState({
            title: "",
            salary: "",
        })
    }

    render() {
        return (
            <>
                <form>
                    <label>Job's Title:</label> <br />
                    <input type="text" value={this.props.title} onChange={(e) => this.setState({ title: e.target.value })} /> <br />
                    <label>Job's Salary:</label> <br />
                    <input type="text" value={this.props.salary} onChange={(e) => this.setState({ salary: e.target.value })} /> <br />
                    <button onClick={(e) => this.handleSubmit(e)}>Submit</button> <br /><br /><br />
                </form>
            </>
        );
    }
}

export default FormComponent;