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
	},
	{
		title: 'Ownership',
		url: '/dashboard/patient/patient-user/ownership',
		icon: 'bi bi-house-door',
	}
];

export const patientUserHeaderIconMenuItems = [
	{
		title: 'Family',
		url: '/dashboard/patient/patient-user',
		class:'',
		icon: '/assets/icons/users.svg',
		shortTitle: 'Family'
	},
	{
		title: 'Communications',
		url: '/+',
		class:'',
		icon: '/assets/icons/chat.svg',
		shortTitle: 'Comm.'
	},
	{
		title: 'Financials',
		url: '/+',
		class:'',
		icon: '/assets/icons/paper.svg',
		shortTitle: 'Financials'
	},
	{
		title: 'Insurances',
		url: '/dashboard/patient/insurance',
		class:'',
		icon: '/assets/icons/teeth.svg',
		shortTitle: 'Ins.'
	},
	{
		title: 'Files',
		url: '/+',
		class:'',
		icon: '/assets/icons/folder.svg',
		shortTitle: 'Files'
	},
	{
		title: 'Snapshot',
		url: '/dashboard/patient/camera',
		class:'camera px-5',
		icon: '/assets/icons/camera.svg',
	},
	{
		title: 'Imaging',
		url: '/+',
		class:'',
		icon: '/assets/icons/image.svg',
		shortTitle: 'Images'
	},
	{
		title: 'Counsultations',
		class:'',
		url: '/dashboard/patient/consultation',
		icon: '/assets/icons/user_chat.svg',
		shortTitle: 'Consult'
	},
	{
		title: 'Treatment Plan',
		url: '/+',
		class:'',
		icon: '/assets/icons/user_card.svg',
		shortTitle: 'Tx Plan'
	},
	{
		title: 'Treatment Card',
		url: '/+',
		class:'',
		icon: '/assets/icons/calendar.svg',
		shortTitle: 'TX Card'
	},
	{
		title: 'Other',
		url: '/+',
		class:'',
		icon: '/assets/icons/jar.svg',
		shortTitle: 'Other'
	},
]

export const patientConsultationMenuItems = [
	{
		title: 'Health History',
		url: '/dashboard/patient/consultation/health-history',
		icon: 'bi bi-house-door',
		child: []
	},
	{
		title: 'Consultations',
		url: '/dashboard/patient/consultation/consultation',
		icon: 'bi bi-house-door',
		child: []
	},
	{
		title: 'Start Treatment',
		url: '/*',
		icon: 'bi bi-house-door',
		child: []
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

export const patientConsultationOptionsMenuItems = [
	{
		title: 'Questionnaire',
		url: '/dashboard/patient/consultation/consultation/add/questionnaire',
		icon: 'bi bi-house-door',
	},
	{
		title: 'Diagnosis',
		url: '/dashboard/patient/consultation/consultation/add/diagnosis',
		icon: 'bi bi-house-door',
	},
	{
		title: 'Treatment Options',
		url: '/dashboard/patient/consultation/consultation/add/treatment',
		icon: 'bi bi-house-door',
	},
	{
		title: 'Fee Estimate',
		url: '/dashboard/patient/consultation/consultation/add/fee-estimate',
		icon: 'bi bi-house-door',
	},
	{
		title: 'Payment Options',
		url: '/dashboard/patient/consultation/consultation/add/payment-options',
		icon: 'bi bi-house-door',
	},
	{
		title: 'Conclusion',
		url: '/dashboard/patient/consultation/consultation/add/conclusion',
		icon: 'bi bi-house-door',
	}
]


export const settingPatientConsultationMenuItems = [
	{
		title: 'Health History',
		url: '/dashboard/settings/patient/consultation/health-history',
		icon: 'bi bi-house-door',
		child: []
	},
	{
		title: 'Diagnosis',
		url: '/dashboard/settings/patient/consultation/diagnosis',
		icon: 'bi bi-house-door',
	},
	{
		title: 'Treatment Options',
		url: '/dashboard/settings/patient/consultation/treatment',
		icon: 'bi bi-house-door',
	},
	{
		title: 'Fee Estimate',
		url: '/dashboard/settings/patient/consultation/fee',
		icon: 'bi bi-house-door',
	},
	{
		title: 'Payment Options',
		url: '/dashboard/settings/patient/consultation/payment-options',
		icon: 'bi bi-house-door',
	}
]

export const patientDiagnosisMenuItems = [
	{
		title: 'Malocclusion',
		url: '/dashboard/patient/consultation/consultation/add/diagnosis/malocclusion',
		icon: '/assets/icons/jar.svg',
		child: []
	},
	{
		title: 'Overjet',
		url: '/dashboard/patient/consultation/consultation/add/diagnosis/overjet',
		icon: '/assets/icons/jar.svg',
		child: []
	},
	{
		title: 'Overbite',
		url: '/dashboard/patient/consultation/consultation/add/diagnosis/overbite',
		icon: '/assets/icons/jar.svg',
		child: []
	},
	{
		title: 'Category 1',
		url: '/dashboard/patient/consultation/consultation/add/diagnosis/category1',
		icon: '/assets/icons/jar.svg',
		child: []
	},
	{
		title: 'Category 2',
		url: '/dashboard/patient/consultation/consultation/add/diagnosis/category2',
		icon: '/assets/icons/jar.svg',
		child: []
	},
	{
		title: 'Category 3',
		url: '/dashboard/patient/consultation/consultation/add/diagnosis/category3',
		icon: '/assets/icons/jar.svg',
		child: []
	},
	{
		title: 'Category 4',
		url: '/dashboard/patient/consultation/consultation/add/diagnosis/category4',
		icon: '/assets/icons/jar.svg',
		child: []
	},
	{
		title: 'Category 5',
		url: '/dashboard/patient/consultation/consultation/add/diagnosis/category5',
		icon: '/assets/icons/jar.svg',
		child: []
	},
	{
		title: 'Category 6',
		url: '/dashboard/patient/consultation/consultation/add/diagnosis/category6',
		icon: '/assets/icons/jar.svg',
		child: []
	},
]

export const problemListOfDiagnosis = [
	{
		title: 'Malocclusion',
		child: []
	},
	{
		title: 'Overjet',
		child: []
	},
	{
		title: 'Overbite',
		child: []
	},
	{
		title: 'Category 1',
		child: []
	},
	{
		title: 'Category 2',
		child: []
	},
	{
		title: 'Category 3',
		child: []
	},
	{
		title: 'Category 4',
		child: []
	},
	{
		title: 'Category 5',
		child: []
	},
	{
		title: 'Category 6',
		child: []
	},
	{
		title: 'Tooth Chart',
		child: []
	}
]


export const patientTreatmentMenuItems = [
	{
		title: 'Tx Recommendations',
		url: '/dashboard/patient/consultation/consultation/add/treatment/recommendations',
		icon: '/assets/icons/jar.svg',
		child: []
	},
	{
		title: 'Prerequisites',
		url: '/dashboard/patient/consultation/consultation/add/treatment/prerequisites',
		icon: '/assets/icons/jar.svg',
		child: []
	},
	{
		title: 'Extractions',
		url: '/dashboard/patient/consultation/consultation/add/treatment/extractions',
		icon: '/assets/icons/jar.svg',
		child: []
	},
	{
		title: 'Treatment Mechanics',
		url: '/dashboard/patient/consultation/consultation/add/treatment/treatment-mechanics',
		icon: '/assets/icons/jar.svg',
		child: []
	},
	{
		title: 'Expected Tx Outcome',
		url: '/dashboard/patient/consultation/consultation/add/treatment/treatment-outcome',
		icon: '/assets/icons/jar.svg',
		child: []
	},
	{
		title: 'Risks',
		url: '/dashboard/patient/consultation/consultation/add/treatment/risk',
		icon: '/assets/icons/jar.svg',
		child: []
	},
	{
		title: 'Adjunctive Tx',
		url: '/dashboard/patient/consultation/consultation/add/treatment/adjunctive-tx',
		icon: '/assets/icons/jar.svg',
		child: []
	},
	{
		title: 'Appliance Sequence',
		url: '/dashboard/patient/consultation/consultation/add/treatment/appliance-sequence',
		icon: '/assets/icons/jar.svg',
		child: []
	},
	{
		title: 'Bracket Variations',
		url: '/dashboard/patient/consultation/consultation/add/treatment/bracket-variations',
		icon: '/assets/icons/jar.svg',
		child: []
	},
	{
		title: 'Retention',
		url: '/dashboard/patient/consultation/consultation/add/treatment/retention',
		icon: '/assets/icons/jar.svg',
		child: []
	},
	{
		title: 'Consents and Agreement',
		url: '/+',
		icon: '/assets/icons/jar.svg',
		child: []
	}
]