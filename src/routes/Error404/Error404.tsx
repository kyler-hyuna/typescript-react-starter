import React from 'react'
import BodyClassName from 'react-body-classname'
import './Error404.scss'

const Error404 = () => (
  <BodyClassName className="body--404">
    <div className="cover">
      <h1>
        Resource not found <small>Error 404</small>
      </h1>
      <p className="lead">
        The requested resource could not be found but may be available again in
        the future.
      </p>
    </div>
  </BodyClassName>
)

export default Error404
