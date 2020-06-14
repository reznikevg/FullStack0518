import React, {Component} from 'react';
import {Link, Route, Switch} from 'react-router-dom'
import MainPage from './Ex8_1/MainPage'
import StageA from './Ex8_1/StageA'
import StageB from './Ex8_1/StageB'
import StageC from './Ex8_1/StageC'
import StageD from './Ex8_1/StageD'

class App extends Component
{
  constructor()
  {
    super()
  
  }



  render()
  {
    return(<div>
      <Switch>
          <Route exact path="/" component={StageA}/>
          <Route  path="/stageb" component={StageB}/>
          <Route  path="/stagec" component={StageC}/>
          <Route  path="/staged" component={StageD}/>
      </Switch>
    </div>)
  }
}

export default App;
