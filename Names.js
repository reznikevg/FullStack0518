import React, {Component} from 'react';
import './Names.css';
import Ages from './Ages'
import MyContext from './MyContext'

class Names extends Component
{
  constructor()
  {
    super()
  }
  render()
  {
    return(
    <MyContext.Consumer>
      {
        context => (
      <div  className="Back">
        Names : 
          <ul>
            {
              context.users.map((item,index) =>
                {
                  return <li key={index}>{item.name}</li>
                }
              )
            }
          </ul>
          
          <br/>
        <Ages  />
      </div>)
      }
      </MyContext.Consumer>
    )
  }
}

export default Names;
