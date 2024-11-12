import i_menu from '@interface/menu'

export const dashboard_menu: i_menu = {
  label: 'Dashboard',
  icon: 'icon-dashboard',
  children: [{ label: 'personal finance' }, { label: 'cryptocurrency' }],
}

export const app_and_pages_menu: i_menu = {
  label: 'Apps & Pages',
  icon: 'icon-pages',
  children: [
    {
      label: 'authentication',
      children: [
        { label: 'login' },
        { label: 'register' },
        { label: 'password recovery' },
        { label: 'password creation' },
        { label: 'lock screen' },
        { label: 'email confirmation' },
        { label: '2FA' },
        { label: 'account deactivation' },
      ],
    },
  ],
}

export const ui_components_menu: i_menu = {
  label: 'UI Components',
  icon: 'icon-component',
  children: [
    {
      label: 'Base UI',
      children: [
        { label: 'accordion' },
        { label: 'alert' },
        { label: 'avatar' },
        { label: 'badges' },
      ],
    },
  ],
}

export const miscellaneous_menu: i_menu = {
  label: 'Miscellaneous',
  icon: 'icon-miscellaneous',
}

export const all_menu: Array<i_menu> = [
  dashboard_menu,
  app_and_pages_menu,
  ui_components_menu,
  miscellaneous_menu,
]
