import React, { Component } from 'react';
import './Course.css'

class Course extends Component {
    state = {
        course: {
            id: null,
            title: null
        }
        
    }

    componentDidMount() {
        console.log(this.props);
        this.loadData();
    }

    componentDidUpdate() {
        if(this.state.course.id !== this.props.match.params.id) {
            this.loadData();
        }
    }

    loadData() {
        // console.log(this.props.location.search);
        // const query = new URLSearchParams(this.props.location.search);
        // for(let param in query.entries()){
        //     console.log(param);
        // }
        const course = {
            id: this.props.match.params.id,
            title: this.props.match.params.title
        }

        this.setState({course: course});
    }

    render () {
        return (
            <div>
                <h1>{this.state.course.title}</h1>
                <p>You selected the Course with ID: {this.state.course.id}</p>
            </div>
        );
    }
}

export default Course;