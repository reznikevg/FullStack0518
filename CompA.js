import React,{Component} from 'react';
import './CompA.css'
import CompB from './CompB';


class CompA extends Component
{
  constructor()
  {
    super()
    this.state= { thet : ''}
  }
  gettext = (e) =>
  {
    this.setState({thet : e.target.value})
    console.log(this.state.thet)
  
  }

  render()
  {
    return (
      <div  className="MyDiv" >
        CompA <br/>
        <input type="textbox" id="age" onChange={this.gettext} /><br/>
        <br/>
        <CompB  thet={this.state.thet} />
        

        {/* <input type="button" id="t1" value="Click Me" onClick={this.clicked} /> */}
      </div>
    )
  }
}

export default CompA;
