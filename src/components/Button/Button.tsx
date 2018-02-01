import React from 'react'
import './Button.scss'

export interface ButtonProps {
  /** Title of the button */
  title: string
}

/**
 * Button
 */
export const Button: React.SFC<ButtonProps> = ({ title }) => (
  <button className="button">{title}</button>
)

export default Button
