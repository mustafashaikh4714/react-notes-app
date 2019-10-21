import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Header from '../components/Header/Header'
import HomePage from '../pages/home'
import LandingPage from '../pages/landing'

export default class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Header />
          <Switch>
            <Route path="/" exact component={LandingPage} />
            <Route path="/home" component={HomePage} />
            <Route render={() => <div>404!</div>} />
          </Switch>
        </div>
      </BrowserRouter>
    )
  }
}
