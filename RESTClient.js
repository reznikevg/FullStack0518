import React,{Component} from 'react';
import axios from 'axios'

class RESTClient extends Component
{
  constructor()
  {
    super()
    this.state = {users : [], user : {}}
    
  }

  getById = async () =>
  {
    let resp = await axios.get('https://jsonplaceholder.typicode.com/users/6')
    this.setState({user : resp.data})
  }

  /* Option 1 - "then" */
  getAll1 = () =>
  {
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then(resp => console.table(resp.data))
    console.log("End of function")
  }

    /* Option 2 - "async-await" */
    getAll2 = async () =>
    {
      let resp = await axios.get('https://jsonplaceholder.typicode.com/users')
       this.setState({users : resp.data})
    }

    add = async () =>
    {
      let obj = { name : 'Asi' , email : 'asi#gmail.com'}
      let resp = await axios.post('https://jsonplaceholder.typicode.com/users',obj)
      console.log(resp.data)
    }

    update = async () =>
    {
      let obj = { name : 'Asi' , email : 'asi#gmail.com'}
      let resp = await axios.put('https://jsonplaceholder.typicode.com/users/6',obj)
      console.log(resp.data)
    }

    delete = async () =>
    {
      
      let resp = await axios.delete('https://jsonplaceholder.typicode.com/users/6')
      console.log(resp.data)
    }
  

  render()
  {
    
    let users = this.state.users.map(item =>
      {
        return <li key={item.id}>{item.name}</li>
      })

    return(<div>
      <input type="button" value="Get All" onClick={this.getAll2} />
      <input type="button" value="Get 1 Item" onClick={this.getById} />
      <input type="button" value="Add" onClick={this.add} />
      <input type="button" value="Update" onClick={this.update} />
      <input type="button" value="delete" onClick={this.dlete} />

      <ul>
        {users}
      </ul>

      Email : {this.state.user.email}
    </div>)
  }
}

export default RESTClient;
