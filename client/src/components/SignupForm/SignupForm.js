import React from 'react'
import { Button, Form } from 'react-bootstrap'
// import '../../styles/components/_signupForm.scss'
const SignupForm = props => (
  <div>
    <Form className="s-form-container">
      <Form.Group>
        <Form.Label className="s-form-container__label">Username</Form.Label>
        <Form.Control type="username" placeholder="Choose username" />
      </Form.Group>
      <Form.Group>
        <Form.Label className="s-form-container__label">
          Email address
        </Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
      </Form.Group>
      <Form.Group>
        <Form.Label className="s-form-container__label">Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Form.Group>
        <Button className="s-form-container__login-btn">Signup</Button>
      </Form.Group>
    </Form>
  </div>
)

export default SignupForm
