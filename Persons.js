import React, {Component} from 'react';
import Person from './Person'

class Persons extends Component
{
    constructor(props)
    {
        super(props)
        this.state ={ persons :[
            {name : 'avi',
             tasks : [
                 {title : 'taska', completed: true},
                 {title : 'taskab', completed: false}
             ]},
             {name : 'dana',
             tasks : [
                 {title : 'taskc', completed: false},
                 {title : 'taskad', completed: true}
             ]}
        ]
        }
    }

    render()
    {  
        var persons = this.state.persons.map((item,index) =>
        {
            return <Person key={index} data={item}/>
        })
        return(
            <div className="App" style={{width:'500px',border:'10px solid green'}}>
            <h1>Person List:</h1><br/>
            {persons}
            </div>
        )
    }
}
export default Persons;