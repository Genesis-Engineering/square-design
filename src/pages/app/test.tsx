import { render, screen } from '@testing-library/react'
import React from 'react'
import AppPage from './index'

test('renders learn react link', () => {
  render(<AppPage />)
  const linkElement = screen.getByText(/learn react/i)
  expect(linkElement).toBeInTheDocument()
})
