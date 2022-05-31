export const patientUserMenuItems = [
	{
		title: 'Patient',
		url: '/dashboard/patient/patient-user/patient-detail',
		icon: 'bi bi-house-door',
	},
	{
		title: 'Legal Guardian',
		url: '/dashboard/patient/patient-user/legal-guardian',
		icon: 'bi bi-house-door',
	},
	{
		title: 'Payment Party',
		url: '/dashboard/patient/patient-user/payment-party',
		icon: 'bi bi-house-door',
	},
	{
		title: 'Insurance Subscriber',
		url: '/dashboard/patient/patient-user/insurance-subscriber',
		icon: 'bi bi-house-door',
	},
	{
		title: 'External Providers',
		url: '/dashboard/patient/patient-user/provider',
		icon: 'bi bi-house-door',
	},
	{
		title: 'Referrer',
		url: '/dashboard/patient/patient-user/referer',
		icon: 'bi bi-house-door',
	},
	{
		title: 'Family Members',
		url: '/dashboard/patient/patient-user/family_members',
		icon: 'bi bi-house-door',
	}
];

export const patientConsultationMenuItems = [
	{
		title: 'Health History',
		url: '/dashboard/patient/consultation/health-history',
		icon: 'bi bi-house-door',
		child: []
	},
	{
		title: 'Consultations',
		url: '',
		icon: 'bi bi-house-door',
		child: [
			{
				title: 'Consultation 1',
				url: '',
				icon: 'bi bi-house-door',
				child: [
					{
						title: 'Questionnaire',
						url: '',
						icon: 'bi bi-house-door',
					},
					{
						title: 'Diagnosis',
						url: '',
						icon: 'bi bi-house-door',
					},
					{
						title: 'Treatment Options',
						url: '',
						icon: 'bi bi-house-door',
					},
					{
						title: 'Fee Estimate',
						url: '',
						icon: 'bi bi-house-door',
					},
					{
						title: 'Payment Options',
						url: '',
						icon: 'bi bi-house-door',
					}
				]
			},
			{
				title: 'Consultation 2',
				url: '',
				icon: 'bi bi-house-door',
				child: [
					{
						title: 'Questionnaire',
						url: '',
						icon: 'bi bi-house-door',
					},
					{
						title: 'Diagnosis',
						url: '',
						icon: 'bi bi-house-door',
					},
					{
						title: 'Treatment Options',
						url: '',
						icon: 'bi bi-house-door',
					},
					{
						title: 'Fee Estimate',
						url: '',
						icon: 'bi bi-house-door',
					},
					{
						title: 'Payment Options',
						url: '',
						icon: 'bi bi-house-door',
					}
				]
			},
			{
				title: 'Consultation 3',
				url: '',
				icon: 'bi bi-house-door',
				child: [
					{
						title: 'Questionnaire',
						url: '',
						icon: 'bi bi-house-door',
					},
					{
						title: 'Diagnosis',
						url: '',
						icon: 'bi bi-house-door',
					},
					{
						title: 'Treatment Options',
						url: '',
						icon: 'bi bi-house-door',
					},
					{
						title: 'Fee Estimate',
						url: '',
						icon: 'bi bi-house-door',
					},
					{
						title: 'Payment Options',
						url: '',
						icon: 'bi bi-house-door',
					}
				]
			}
		]
	},
	{
		title: 'Follow ups',
		url: '/*',
		icon: 'bi bi-house-door',
		child: []
	},
	{
		title: 'Showcase',
		url: '/*',
		icon: 'bi bi-house-door',
		child: []
	}
]