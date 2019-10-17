import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import HomePage from '../pages/home'
import LandingPage from '../pages/landing'

export default class App extends React.Component {
  state = {
    acountDetails: {
      username: '',
      email: '',
      password: ''
    }
  }
  // background-color: #90afc5;

  render() {
    return (
      <React.Fragment>
        <Router>
          {/* other custom components */}
          <div>
            <Switch>
              <Route
                path="/"
                exact
                render={() => {
                  return <LandingPage />
                }}
              />
              <Route path="/home">
                <HomePage />
              </Route>
              {/* <Route path="*" render={() => <div>404</div>} /> */}
            </Switch>
          </div>
        </Router>
      </React.Fragment>
    )
  }
}
