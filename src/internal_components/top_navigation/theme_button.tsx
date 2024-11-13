import Button from '@components/button'
import React, { useState } from 'react'

export default function ThemeButton() {
  const [dark, setDark] = useState(false)

  const button_handler = () => {
    setDark(!dark)
    document.body.classList.toggle('dark')
  }

  return (
    <Button onClick={button_handler}>
      <span className={`icon-${dark ? 'dark' : 'light'}`} />
    </Button>
  )
}
