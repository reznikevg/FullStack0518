import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class Ex22 extends Component
{
  constructor()
  {
    super()
    this.state= { name : '', age:''}
  }
  getname = async (e) =>
  {
    await this.setState({name : e.target.value})
    if (this.state.name.length>4)
    {
      this.swife()
    }
  }
  getage = async (e) =>
  {
    await this.setState({age : e.target.value})
    if (this.state.age.length>4)
    {
      this.swife()
    }
  }



  swife = () =>
   {
    let temp=this.state.name
    this.setState({name : this.state.age,age:temp})
   }

  render()
  // 2.	Create a component with 2 text boxes . Present their data an separated elements .
  //  Add a button. A click on the button will swapped between the age and the name.  
  //  If one of textboxes will contains more than 4 chars – the texts will be swapped as well. 

  {
    return (
      <div className="MyDiv">
        <input type="textbox" id="name" onChange={this.getname} /><br/>
        <input type="textbox" id="age" onChange={this.getage} /><br/>
        <input type="button" value="swife" onClick={this.swife}  /><br/>
        {this.state.name}<br/>
        {this.state.age}
 
        {/* total: {this.state.total} */}
      </div>
    )
  }
}
export default Ex22;
