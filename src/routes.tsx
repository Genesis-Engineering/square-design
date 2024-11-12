import AppPage from '@pages/app'
import ButtonPage from '@pages/button'
import DashboardPage from '@pages/dashboard'
import ErrorPage from '@pages/error'
import React from 'react'

export default [
  {
    path: '/',
    element: <AppPage />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        label: 'Dashboard',
        element: <DashboardPage />,
        index: true,
      },
      {
        path: 'button',
        label: 'Buttons',
        element: <ButtonPage />,
      },
    ],
  },
]
