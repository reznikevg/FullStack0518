import React,{Component} from 'react';



class Exform extends Component
{
  constructor()
  {
    super()
    this.state= { fn : '' , ln : '' , gender : '' , adult : '', city : ''}
  }
  getfn = (e) =>
  {
    this.setState({fn : e.target.value})
  }
  getln = (e) =>
  {
    this.setState({ln : e.target.value})
  }
  getm = (e) =>
  {
    this.setState({gender : "male"})
  }
  getfm = (e) =>
  {
    this.setState({gender : "female"})
  }

  getad = (e) =>
  {
    if (e.target.checked)
    {
      this.setState({adult : "is adult"})
    }
    else
    {
      this.setState({adult : "not adult"})
    }
  }

  getcity = (e) =>
  {
    switch(e.target.value) {
      case "ta":
        this.setState({city : "Tel Aviv"})
        break;
      case "h":
        this.setState({city : "Haifa"})
        break;
        case "j":
          this.setState({city : "Jerusalem"})
        break;
    }
  }

  setFullData = () =>
  {
    let fullDataText = `Name : ${this.state.fn} ${this.state.ln},
                           ${this.state.gender} , ${this.state.adult} ,
                           lives in ${this.state.city}`

    this.setState({fullData : fullDataText})
  }

  render()
  {
    return (
      <div  className="MyDiv" >
        
        First Name: <input type="textbox" id="fn" onChange={this.getfn} /><br/>
        Last Name: <input type="textbox" id="ln" onChange={this.getln} /><br/>
        Gender: <br/>
        <input type="radio" id="male" name="gender" onClick={this.getm} /> Male <br/>
        <input type="radio" id="female" name="gender" onClick={this.getfm} /> Female <br/>
        Adult? <input type="checkbox" id="ad" onChange={this.getad}/> <br/>
        City: <select id="cs" name="cities" onChange={this.getcity}>
                <option value="ta">Tel Aviv</option>
                <option value="h">Haifa</option>
                <option value="j">Jerusalem</option>
              </select>
              <br/>
       <input type="button" value="send" onClick={this.setFullData} /><br/>
       <b>{this.state.fullData}</b>
        
        

        {/* <input type="button" id="t1" value="Click Me" onClick={this.clicked} /> */}
      </div>
    )
  }
}

export default Exform;
