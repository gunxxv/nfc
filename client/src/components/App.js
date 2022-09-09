import React, { Component } from 'react';
import {  BrowserRouter, Route} from 'react-router-dom';
import { connect } from 'react-redux'
import * as actions from '../actions'

import Header from './Header'
import Landing from './Landing'; 
import Dashboard from './Dashboard';
import ProfileNew from './profiles/ProfileNew'

class App extends Component {
  componentDidMount() {
    this.props.fetchUser();
  }

  
  render() {
    return (
      <div className='container'>
        <BrowserRouter>
          <div>
            <Header />
            <Route exact path="/" component={Landing} />
            <Route exact path="/profiles" component={Dashboard}/>
            <Route path="/profiles/new" component={ProfileNew}/>
          </div>
        </BrowserRouter>
      </div>
    )
  }
}

export default connect(null, actions)(App);