import React from 'react';
import { ChildComponent } from './ChildComponent';


class MyComponent extends React.Component {

    state = {
        name: "",
        listJobs: [
            { id: 1, title: "Front End Developer", salary: 1000, },
            { id: 2, title: "Back End Developer", salary: 2000, },
            { id: 3, title: "Fullstack Developer", salary: 5000, },
        ],
    }

    render() {
        return (
            <>
                <input type="text" value={this.state.name} onChange={(e) => this.setState({ name: e.target.value })} />
                <h1>{this.props.title}</h1>
                <ChildComponent
                    title="child component oi"
                    name={this.state.name}
                    age="20"
                    listJobs={this.state.listJobs}
                />
            </>
        )
    }
}

export {
    MyComponent,
};