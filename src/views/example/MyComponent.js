import React from 'react';

class MyComponent extends React.Component {
    state = {
        fisrtname: "",
        lastname: "",
    }

    handleChangeFirstName = (e) => {
        this.setState({ fisrtname: e.target.value })
    }

    handleChangeLastName = (e) => {
        this.setState({ lastname: e.target.value })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        console.log("Data :", this.state);
    }

    render() {
        return (
            <>
                <h2>HTML Forms</h2>

                <form >
                    <label>First name:</label><br />
                    <input
                        type="text"
                        value={this.state.fisrtname}
                        onChange={(e) => this.handleChangeFirstName(e)}
                    />
                    <br />
                    <label>Last name:</label><br />
                    <input
                        type="text"
                        value={this.state.lastname}
                        onChange={(e) => this.handleChangeLastName(e)}
                    /><br />
                    <br />
                    <input type="button" value="Submit" onClick={(e) => this.handleSubmit(e)} />
                </form>
            </>
        )
    }
}

export {
    MyComponent,
};