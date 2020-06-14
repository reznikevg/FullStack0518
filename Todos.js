import React,{Component} from 'react';
import ToComplete from './ToComplete'
import {UserConsumer} from './UserContext'

class Todos extends Component
{
  render()
  {
    return (
      <UserConsumer>
          {props =>
           {
             return(
              <div style={{ border: '5px solid red', width:'250px' }}>

            <h2>Todos</h2>      
              <table border="1">
                
              {props.arr.map((item,index) =>
                {
                  return <tr key={index}>
                    <td>{item.name}</td>
                    <td>{item.duedate}</td>
                    <td>{item.completed.toString()}</td>
                    </tr>
                })}
          </table>
          <br/>
            <ToComplete/><br/>
           </div>)
                        
           }
         }

     
      </UserConsumer>
    );
  }
}
export default Todos;
