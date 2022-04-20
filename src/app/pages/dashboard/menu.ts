export interface IMenuItem {
	title: string;
	url: string;
	icon: string;
	child?: IMenuItem[];
}

export const menuItems = {
	top: [
		{
			title: 'Home',
			url: '/dashboard/home',
			icon: 'bi bi-house-door',
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
	],
	bottom: [
		{
			title: 'Settings',
			url: '/dashboard/onboarding',
			icon: 'bi bi-gear',
		},
	],
};
