import React,{Component} from 'react';
import axios from 'axios'
import utils from './utils'

class Ex6_3_UserData extends Component
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
        let users1 =utils.getAll2()
        this.setState({users : users1})
        let users = this.state.users.map(item =>
            {
              return <li key={item.id}>{item.name}</li>
            })


            // let user =utils.getUsersData1(1)
            // // this.setState({users : users})
            // let usersD = 
            //     {
            //       return {user.name} {user.email}
            //     }
    
        

            

    //     users.map(user =>
    //         {
    //             Name : {user.name} <br/>
    //             Email : {user.email}  <br/>
    //         })
    //     let users = this.state.users.map(item =>
    //   {
    //     return <li key={item.id}>{item.name}</li>
    //   })

    //         let users = this.state.users.map(item =>
    //   {
    //     return <li key={item.id}>{item.name}</li>
    //   })

        
        return(
        <div>
            
            <h3>User Data</h3>
            Name : {this.state.user.name} <br/>
            Email : {this.state.user.email}  <br/>
            
        <input type="textbox"  onChange={this.getid} />
        {/* <input type="button" value="Get 1 Item" onClick={this.getById} /> */}

        <ul>
        {users}
      </ul>

        </div>)

    }
}

export default Ex6_3_UserData;