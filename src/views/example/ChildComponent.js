import React from 'react';

class ChildComponent extends React.Component {
    render() {
        let { title, name, age, listJobs } = this.props;

        return (
            <>
                <h1>{title}</h1>
                <h1>{name}</h1>
                <h1>{age}</h1>
                <br />
                {listJobs.map((job) => {
                    return (
                        <ul key={job.id}>
                            <li>{job.id}</li>
                            <li>{job.title}</li>
                            <li>{job.salary}$</li>
                        </ul>
                    )
                })}
            </>
        )
    }
}

export {
    ChildComponent,
};