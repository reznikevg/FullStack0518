import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class Ex21 extends Component
{
  constructor()
  {
    super()
    this.state= { num : '', total:0}
  }
  getnum = (e) =>
  {
    this.setState({num : parseInt(e.target.value)})
  }

  sumer = () =>
   {
      let totals= this.state.total
      totals += this.state.num

      this.setState({total: totals})
   }

  render()
  {
    return (
      <div className="MyDiv">

        <input type="textbox" onChange={this.getnum}/>

        <input type="button" value="+" onClick={this.sumer} />

        total: {this.state.total}
      </div>
    )
  }
}
export default Ex21;
