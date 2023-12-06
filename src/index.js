import React from 'react'
import styles from './styles.module.css'
import classNames from 'classnames'

export const Button = ({ type = 'default', text, ...props }) => {
  const buttonClass = classNames({
    [styles.button]: true,
    [styles.primary]: type === 'primary',
    [styles.default]: type === 'default',
    [styles.dashed]: type === 'dashed',
    [styles.text]: type === 'text',
    [styles.link]: type === 'link'
  })
  return (
    <button className={buttonClass} {...props}>
      {text}
    </button>
  )
}
