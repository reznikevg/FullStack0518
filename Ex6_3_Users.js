import React,{Component} from 'react';
import axios from 'axios'
import Ex6_3_UserData from './Ex6_3_UserData';

class Ex6_3_Users extends Component
{
    constructor()
    {
        super()
    
        
    }   


    
    render()
    {
        return(
        <div>
          <h1>Users</h1>
          <Ex6_3_UserData/>
      
        </div>)

    }
}

export default Ex6_3_Users;