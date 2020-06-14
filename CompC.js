import React,{Component} from 'react';
import './CompC.css'


class CompB extends Component
{
  constructor()
  {
    super()
  
  }


  render()
  {
    return (
      <div  className="MyDivC" >
        CompC <br/><br/>
        { this.props.thet}
        
        {/* <input type="textbox" id="age" onChange={this.getage} /><br/> */}
        

        {/* <input type="button" id="t1" value="Click Me" onClick={this.clicked} /> */}
      </div>
    )
  }
}


export default CompB;
