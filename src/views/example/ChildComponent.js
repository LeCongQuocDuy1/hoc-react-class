import React from 'react';

class ChildComponent extends React.Component {

    state = {
        isShow: false,
        isActive: false,
    }

    handleShowHide = () => {
        this.setState({ isShow: !this.state.isShow })
    }

    handleDeleteJob = (job) => {
        this.props.deleteJob(job);
    }

    handleUpdateJob = (job) => {
        this.props.updateJob(job);
    }

    render() {
        let { listJobs } = this.props;
        let { isShow } = this.state;

        return (
            <>
                <button onClick={() => this.handleShowHide()}>Show / Hide</button>
                {isShow && <>
                    {listJobs.map((job) => {
                        return (
                            <>
                                <ul key={job.id} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', listStyle: 'none' }}>
                                    <li style={{ marginRight: '15px' }}>{job.id}</li>
                                    <li style={{ marginRight: '15px' }}>{job.title}</li>
                                    <li style={{ marginRight: '15px' }}>{job.salary}$</li>
                                    <li style={{ marginRight: '15px' }}> <span style={{ fontSize: '1rem', padding: '0.5rem 0.8rem', backgroundColor: '#000', borderRadius: '50%', color: '#fff' }} onClick={() => this.handleUpdateJob(job)}>@</span> </li>
                                    <li style={{ marginRight: '15px' }}> <span style={{ fontSize: '1rem', padding: '0.5rem 0.8rem', backgroundColor: '#000', borderRadius: '50%', color: '#fff' }} onClick={() => this.handleDeleteJob(job)}>X</span> </li>
                                </ul>
                                <br />
                            </>
                        )
                    })}
                </>}
            </>
        )
    }
}

export {
    ChildComponent,
};