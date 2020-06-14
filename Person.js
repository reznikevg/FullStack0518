import React, {Component} from 'react';
import Task from './Task'

const Person = (props) =>
{
    var tasks = props.data.tasks.map((item,index) =>
    {
        return <Task key ={index} title={item.title} completed={item.completed}/>
    })

    return (
        <div style={{width:'400px', border: '8px solid red'}}>
            <h2>{props.data.name}</h2>
            <h3>Tasks: </h3>
                {tasks}
        </div>
    )
}
export default Person