import React, { Component } from 'react'
import {BrowserRouter as Router,Route,Redirect,Switch} from 'react-router-dom'
import Index from './index'
import LookingCar from './lookindCar'
import Forum from './forum'
export default class home extends Component {
  render() {
    return (
      <Router>
          <Switch>
              <Route path={'/index'} component={Index}></Route>
              <Route path={'/lookingCar'} component={LookingCar}></Route>
              <Route path={'/forum'} component={Forum}></Route>
              <Redirect from="/" to="/index"></Redirect>
          </Switch>
      </Router>
    )
  }
}
