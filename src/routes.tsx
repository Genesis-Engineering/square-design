import AuthenticatedLayout from '@internal_components/authenticated_layout'
import ButtonPage from '@pages/button'
import DashboardPage from '@pages/dashboard'
import ErrorPage from '@pages/error'
import React from 'react'

export default [
  {
    path: '/',
    element: <AuthenticatedLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        element: <DashboardPage />,
        handle: { page_title: 'Dashboard' },
        index: true,
      },
      {
        path: 'dashboard',
        element: <DashboardPage />,
        handle: { page_title: 'Dashboard' },
      },
      {
        path: 'button',
        element: <ButtonPage />,
        handle: { page_title: 'Button' },
      },
    ],
  },
]
