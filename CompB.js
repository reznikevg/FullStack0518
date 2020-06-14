import React,{Component} from 'react';
import './CompB.css'
import CompC from './CompC';


class CompB extends Component
{
  constructor()
  {
    super()
   
  }
 

  render()
  {
    return (
      <div  className="MyDivB" >
        CompB 
        <br/>
        {/* { tt} */}
        <CompC  thet={this.props.thet} />
        {/* <input type="textbox" id="age" onChange={this.getage} /><br/> */}
        

        {/* <input type="button" id="t1" value="Click Me" onClick={this.clicked} /> */}
      </div>
    )
  }
}


export default CompB;
