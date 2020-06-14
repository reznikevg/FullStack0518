import React,{Component} from 'react';
import axios from 'axios'

class Ex6_1 extends Component
{
    constructor()
    {
        super()
        this.state={id:'' ,user:{},users:[] }
        
    }   
    getid =  (e) =>
    {
      this.setState({id : e.target.value})
      console.log(this.state.id)
    }
    
    getById = async () =>
    {
      let resp = await axios.get('https://jsonplaceholder.typicode.com/users/'+this.state.id)
      this.setState({user : resp.data})
      console.log(this.state.id)

    }

    
    render()
    {
        return(
        <div>

        <input type="textbox"  onChange={this.getid} />
        <input type="button" value="Get 1 Item" onClick={this.getById} />
        </div>)


    }

    
}

export default Ex6_1;