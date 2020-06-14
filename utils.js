import axios from 'axios'
const url_users='https://jsonplaceholder.typicode.com/users'
const url_todos='https://jsonplaceholder.typicode.com/todos'

const getAll2 = async () =>
{
  let resp = await axios.get('https://jsonplaceholder.typicode.com/users')
   this.setState({users : resp.data})
}
const getUsersData = async () =>
{
    let resp1 = await axios.get(url_users)
    let users = resp1.data

    // let resp2 = await axios.get(url_todos)
    // let todos = resp2.data

    // let usersdata = users.map(user =>
    //     {
    //         let obj ={};
    //         obj.name = user.name
    //         obj.email = user.email

    //         let usertodos = todos.filter(todo => todo.userid == user.id)
    //         let titles = usertodos.map(x => x.title)

    //         obj.todos = titles
    //         return obj

    //     })
        return users

    
}

const getUsersData1 = async (userId) =>
{
    let resp1 = await axios.get(url_users)
    let users = resp1.data

    let resp2 = await axios.get(url_todos)
    let todos = resp2.data

    let usersdata = users.filter(user => user.id=userId).map(user => 
        {
            let obj ={};
            obj.name = user.name
            obj.email = user.email

            let usertodos = todos.filter(todo => todo.userid == user.id)
            let titles = usertodos.map(x => x.title)

            obj.todos = titles
            return obj

        })
       

    
}


export default {getUsersData,getUsersData1,getAll2}