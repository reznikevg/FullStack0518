import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class Ex11 extends Component
{
  constructor()
  {
    super()
  }

   clicked = () =>
   {
      alert("Hello")
   }

  render()
  {
    return (
      <div className="MyDiv">
        Hello from child comp <br/>
        Name : { this.props.name} <br/>
        Adress : { this.props.Adress} <br/>

        <input type="button" value="Click Me" onClick={this.clicked} />
      </div>
    )
  }
}
export default Ex11;
