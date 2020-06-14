import React, {Component} from 'react';
import './Ages.css';
import MyContext from './MyContext'

class Ages extends Component
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
      <div  className="Back1">
        Ages:
          <ul>
            {
              context.users.map((item,index) =>
                {
                  return <li key={index}>{item.age}</li>
                }
              )
            }
          </ul>
          <br/>
      </div>)
      }
      </MyContext.Consumer>
    )
  }
}

export default Ages;
