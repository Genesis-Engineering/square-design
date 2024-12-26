/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/prop-types */
/* eslint-disable react/button-has-type */
import Base from '@components/base'
import React from 'react'

export default function Button(
  props: React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  >
) {
  const { children, type, className, ...restprops } = props
  return (
    <button
      type={type}
      className={`${className} outline-none group`}
      {...restprops}
    >
      <Base>{children}</Base>
    </button>
  )
}
