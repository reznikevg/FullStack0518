import React,{Component} from 'react';
import {UserConsumer} from './UserContext'
// import UserContext from './UserContext'


class ToComplete extends Component
{
render()
{
    return(
        <UserConsumer>
            { props =>
            {
                return(
                    <div style={{ border: '5px solid blue', width:'250px'}}>

                        <h2>Completed ToDos</h2>
                        <table border="1">
                            {props.arr.filter(x => x.completed === true).map((item,index) =>
                            {
                                return <tr key={index}>
                                    <td>{item.name}</td>
                                    <td>{item.duedate}</td>
                                    <td>{item.completed.tostring()}</td>
                                </tr>
                            }
                            )}
                        </table>
                        <br/>
                        <br/>
                    </div>
                )

            }


            }


        </UserConsumer>

    )
}
}
export default ToComplete