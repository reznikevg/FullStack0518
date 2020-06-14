import React, {Component} from 'react';

const Task = (props) =>
{

    return (
        <div style={{width:'300px',border:'5px solid blue'}}>
            Title: {props.title} <br/>
            Completed: {props.completed.toString()}<br/>
        </div>

    )
}
export default Task;