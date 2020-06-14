import React, {Component} from 'react';
import './NameAge.css';
import Names from './Names'
import MyContext from './MyContext'

class NameAge extends Component
{
  constructor()
  {
    super()
    this.state = { name : '', age : 0 , users : []}
  }
    getName = (e) =>
    {
      this.setState({name : e.target.value})
    }

    getAge = (e) =>
    {
      this.setState({age : e.target.value})
    }
  
    add = (e) =>
    {
      let obj = {name : this.state.name , age: this.state.age}
      this.setState({users : [...this.state.users,obj]})
    }

  render()
  {
    return(
      <MyContext.Provider
      value = {{users : this.state.users}} >
      <div  className="BackY">
        Name <input type="text" onChange={this.getName} /><br/>
          Age <input type="text" onChange={this.getAge} /><br/>
          <input type="button" value="Add" onClick={this.add} />
          <br/>
        <Names  />
      </div>
      </MyContext.Provider>
    )
  }
}

export default NameAge;
