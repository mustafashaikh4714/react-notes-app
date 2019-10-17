import React from 'react'
import { Button, Form } from 'react-bootstrap'
const LoginForm = props => (
  <div>
    <Form className="l-form-container">
      <Form.Group controlId="formGroupEmail">
        <Form.Label className="l-form-container__label">
          Email address
        </Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
      </Form.Group>
      <Form.Group controlId="formGroupPassword">
        <Form.Label className="l-form-container__label">Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Form.Group>
        <Button className="l-form-container__login-btn">Login</Button>
      </Form.Group>
    </Form>
  </div>
)

export default LoginForm
