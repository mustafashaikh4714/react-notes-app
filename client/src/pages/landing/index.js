import React from 'react'
import { Button } from 'react-bootstrap'
import { withRouter } from 'react-router-dom'
// import BackgroundImage from '../../static/images/ben-white-ReEqHw2GyeI-unsplash.jpg'
const LandingPage = props => {
  // console.log(props)

  return (
    <div
      className="l-page"
      style={{
        background: `linear-gradient(
          rgba(0, 0, 0, 0.5),
          rgba(0, 0, 0, 0.5)
        ), url(${require('../../../public/static/images/ben-white-ReEqHw2GyeI-unsplash.jpg')})`
      }}
    >
      <div className="l-page__header">
        <h1 className="l-page__header--title">Notify</h1>
        <p className="l-page__header--subtitle">
          Stay faithful to the stories in your mind.
        </p>
        <Button
          className="l-page__header--btn"
          onClick={() => props.history.push('/home')}
        >
          Get Started
        </Button>
      </div>
    </div>
  )
}
export default withRouter(LandingPage)
