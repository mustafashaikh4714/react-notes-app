import React from 'react'
import Header from './header/Header'
export default class App extends React.Component {
  state = {
    acountDetails: {
      username: '',
      email: '',
      password: ''
    }
  }
  render() {
    return (
      <div>
        <Header />
      </div>
    )
  }
}
