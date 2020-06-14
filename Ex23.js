import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class Ex23 extends Component
{
  constructor()
  {
    super()
    this.state= { n : true }
  }
  // getname = (e) =>
  // {
  //   this.setState({name : e.target.value})
  // }
  // getage = (e) =>
  // {
  //   this.setState({age : e.target.value})
  // }


  checkcb = () =>
   {

      console.log("ch")  
      
      var obj1=document.getElementById("cb")
      obj1.checked=true
 
 
   }

   uncheckcb = () =>
   {
      var obj1=document.getElementById("cb")
      obj1.checked=false
 
   }


   render()

  // 3.	Add to the Component a checkbox and two radio (radio1 & radio2) buttons.
  //  A selection of one radio button will checked the checkbox. 
  //  A selection of the other radio button will un-checked the checkbox. 

  {
    return (
      <div className="MyDiv">

        <input type="radio" id="radio1" name="a" onClick={this.checkcb}/><br/>
        <input type="radio" id="radio2" name="a" onClick={this.uncheckcb}/><br/>
        <input type="checkbox" id ="cb"  /><br/>

      </div>
    )
  }
}
export default Ex23;
