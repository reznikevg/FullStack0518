import React, {Component} from 'react';
import './ParentC.css';
import ChildC from './ChildC'

class ParentComp extends Component
{
  constructor()
  {
    super()
    this.state = {  persons : [{name:'',age:'',city:'',isadult:false}],
    person : {name:'',age:'',city:'',isadult:false}}
  }
  getData = (pe) =>
  {
    // this.setState({person : pe})
    this.setState({persons : [...this.state.persons, pe]})
  }

  render()
  {
    return(
      <div  className="BackY">
        <h1>Parent</h1>
        {/* {this.state.person} <br/><br/> */}
        <ChildC callBack={ data => this.getData(data) } />
      </div>
    )
  }
}

export default ParentComp;
