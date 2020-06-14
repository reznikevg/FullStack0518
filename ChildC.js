import React, {Component} from 'react';
import './ChildC.css';


class ChildComp extends Component
{
  constructor()
  {
    super()
    this.state={person : {name:'',age:'',city:'',isadult:false},
    name:'',age:'',city:'',isadult:false}
  }
  
  getDataname = (e) =>
  {
    this.setState({name : e.target.value})
  }
  getDataage = (e) =>
  {
    this.setState({age : e.target.value})
  }
  getDatacity = (e) =>
  {
    this.setState({city : e.target.value})
  }
  getDataadult = (e) =>
  {
    this.setState({isadult : e.target.value})
  }


  sendtoparent = (e) =>
  {
    let p={name : this.state.name,age : this.state.age,city : this.state.city,isadult : this.state.isadult}
    this.setState({person : p})
    this.props.callBackage(this.state.person)
  }

  render()
  {
    return(
      <div className="Back">
        <h2>Child</h2>
         Name: <input type="text" onChange={this.getDataname}  /><br/>
         Age: <input type="text" onChange={this.getDataage}  /><br/>
         City: <input type="text" onChange={this.getDatacity}  /><br/>
         Is adult: <input type="checkbox" onChange={this.getDataadult}  /><br/>
         <input type="button" value="add" onClick={this.sendtoparent}  /><br/>
          

      </div>
    )
  }
}

export default ChildComp;
