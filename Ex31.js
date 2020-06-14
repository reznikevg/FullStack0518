import React,{Component} from 'react';
// import './CompA.css'
// import CompB from './CompB';
import './Ex31.css'

class Ex31 extends Component
{
  constructor()
  {
    super()
    this.state= { thet : '' , bg : '' ,red : false , green : false , blue : false,colors : [{red : false},{red : false},{red : false}]}
  }
  gettext = (e) =>
  {
    this.setState({thet : e.target.value})
  
    console.log(this.state.thet,this.state.bg)
  
  }

  red = () =>
  {
    this.setState({colors[{red}] : !this.state.colors})
  }

  green = () =>
  {
    this.setState({green : !this.state.green})
  }
  blue = () =>
  {
    this.setState({blue : !this.state.blue})
  }

  render()
  {


    let names = this.state.colors.map((item,index) =>
      {
        // if item 
      return <li key={index}>{item}</li>
      })


    let bg=""
    if (this.state.thet.length>4)
      {
        bg="blue"
      }
      else
      {
        bg="red"
      }

    
      let dynamicHeader ;
      if(this.state.isExist)
      {
        dynamicHeader= <h3>Created Header</h3>
      }

    return (
      <div  >
        Ex31 <br/>
        <ul>
        {names}
        </ul>

        <input className= {bg} type="textbox" id="age" onChange={this.gettext} /><br/>
        <br/>
        Red: <input type="checkbox" id="Red"  onChange={this.red}/>
        Green: <input type="checkbox" id="Green"  onChange={this.green}/>
        Blue: <input type="checkbox" id="Blue"  onChange={this.blue}/>
         
       
        {/* <input type="button" id="t1" value="Click Me" onClick={this.clicked} /> */}
      </div>
    )
  }
}

export default Ex31;
