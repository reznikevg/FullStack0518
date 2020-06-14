import React, {Component} from 'react';
import {UserProvider} from './UserContext'
import Todos from './Todos'



class AddTask extends Component
{
state=
{
    array: [] , name: "" , duedate : "" , completed : ''
}

add = () =>
{
    let temp = this.state.array;
    temp.push({
        name:this.state.name,
        duedate:this.state.duedate,
        completed:this.state.completed});

    this.setState({arr:temp})
}

render()
{
return (
    <UserProvider value ={this.state}>
        <div style={{border: '5px solid green', width:'300px'}}>
            <h1>add a new ToDo</h1>
            Name<input type="text" onChange={ e => this.setState({name: e.target.value})} /><br/>
            Due Date<input type="text" onChange={ e => this.setState({duedate: e.target.value})} /><br/>
            Completed<input type="checkbox" onChange={ e => this.setState({completed: e.target.checked})} /><br/>
            Add<input type="button" value="add" onChange={this.add} /><br/>  
            <Todos/>     
        </div>


    </UserProvider>

)

}
}
export default AddTask

