import React from 'react'
export default class MainApp extends React.Component {
  state = {}
  render() {
    const title = 'MyApp'
    return (
      <div>
        <h1>{title}</h1>
        <h2>Welcome to {title}</h2>
      </div>
    )
  }
}
