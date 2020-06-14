import React,{Component} from 'react';
// import './ChildComp.css'

class ChildComp extends Component
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
        Age : { this.props.age} <br/>

        <input type="button" value="Click Me" onClick={this.clicked} />
      </div>
    )
  }
}


export default ChildComp;
