import React, { Component } from 'react'
import Home from './views/home'
import {Provider} from 'react-redux'
import store from './store/index'
import './css/index.css'
export default class App extends Component {
  render() {
    return (
      <div>
        <Provider store={store}>
          <Home/>
        </Provider>
      </div>
    )
  }
}
