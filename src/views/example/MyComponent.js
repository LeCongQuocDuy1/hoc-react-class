import React from 'react';
import { ChildComponent } from './ChildComponent';
import FormComponent from './FormComponent';


class MyComponent extends React.Component {

    state = {
        listJobs: [
            { id: 1, title: "Front End Developer", salary: 1000, },
            { id: 2, title: "Back End Developer", salary: 2000, },
            { id: 3, title: "Fullstack Developer", salary: 5000, },
        ],
    }

    addNewJob = (job) => {

        // this.state.listJobs.push(job);
        // this.setState({
        //     listJobs: this.state.listJobs,     --- CACH 1 ---
        // });

        const jobCu = this.state.listJobs;
        this.setState({
            listJobs: [...jobCu, job]
        });
    }

    deleteJob = (job) => {
        let jobCu = this.state.listJobs;

        jobCu = jobCu.filter(item => item.id !== job.id);

        this.setState({
            listJobs: jobCu,
        })
    }

    // updateJob = (job) => {
    //     this.setState({
    //         title: job.title,
    //         salary: job.salary.toString(),
    //     });
    // }

    render() {
        return (
            <>
                <FormComponent
                    addNewJob={this.addNewJob}
                    updateJob={this.updateJob}
                />

                <ChildComponent
                    listJobs={this.state.listJobs}
                    deleteJob={this.deleteJob}
                    updateJob={this.updateJob}
                />
            </>
        )
    }
}

export {
    MyComponent,
};