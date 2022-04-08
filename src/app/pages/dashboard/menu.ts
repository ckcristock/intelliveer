export interface IMenuItem {
  title: string;
  url: string;
  icon: string;
  child?: IMenuItem[];
}

export const menuItems = [
  {
    title: 'Home',
    url: '/home',
    icon: 'bi bi-house-door',
  },
  {
    title: 'Onboarding',
    url: '/dashboard/onboarding',
    icon: 'bi bi-list-check',
    child: [
      {
        title: 'Business Group',
        url: 'NA',
        icon: 'bi bi-clipboard-data',
      },
    ],
  },
  {
    title: 'Appointments',
    url: 'NA',
    icon: 'bi bi-calendar-check',
  },
  {
    title: 'Communication',
    url: 'NA',
    icon: 'bi bi-chat-dots',
  },
  {
    title: 'Patient Flow',
    url: 'NA',
    icon: 'bi bi-people',
  },
  {
    title: 'Practice Tool',
    url: 'NA',
    icon: 'bi bi-tools',
  },
  {
    title: 'Practice Management',
    url: 'NA',
    icon: 'bi bi-kanban',
  },
  {
    title: 'Reports',
    url: 'NA',
    icon: 'bi bi-clipboard-data',
  },
  {
    title: 'Settings',
    url: '/dashboard/settings',
    icon: 'bi bi-gear',
  },
];
