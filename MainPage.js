import React, {Component} from 'react';
import {Link, Route, Switch} from 'react-router-dom'
// import ContactPage from './ContactPage'
// import AboutPage from './AboutPage'
// import ProductsPage from './ProductsPage'
// import ProductPage from './ProductPage'
import axios from 'axios'
import utils from './utils'






class MainPage extends Component
{
  constructor()
  {
    super()
    this.state={users:[]}
  }

  static getDerivedStateFromProps(props)
  {
    // return {prodid : props.match.params.id}
    let data =  utils.getUsersData()
    this.setState({users : data})
  }


 componentDidMount()
 {
    
//    let id = this.props.match.params.id;
//    this.setState({users:getUsersData()})
   //Send to server....
   
 }


 


  render()
  {

    let users1 =utils.getUsersData()
        this.setState({users : users1})
        let users = this.state.users.map(item =>
            {
              return <li key={item.id}>{item.name}</li>
            })


    return(<div>
      <h1>Welcome to our SPA !</h1>
      {users}
      {/* <nav>
        <Link to="/contact">To Contact Page</Link>
        <Link to="/about">To About Page</Link>
        <Link to="/products">To Products Page</Link>


      </nav>

      <Switch>
       
        <Route exact path="/" component={ProductsPage} />
        <Route path="/contact" component={ContactPage} />
        <Route path="/about" component={AboutPage} />
        <Route  path="/products" component={ProductsPage} />

        <Route path="/product/:id" component={ProductPage} />
       
      </Switch> */}

      <h4>Our site footer</h4>
    </div>)
  }
}

export default MainPage;
