export const patientMenuItem = [
    {
        title: 'Consultation Phase',
        subMenuItem: [
            {
                title: 'Patient',
                url: '/dashboard/patient/patient-detail',
              },
              {
                title: 'Responsible Party',
                // url: '/dashboard/patient/responsible',
                subSubMenuItem: [
                    {
                        title: 'Legal Guardian',
                        url: '/dashboard/patient/legal-guardian'
                    },
                    {
                        title: 'Payment Party',
                        url: '/dashboard/patient/payment-party'
                    },
                    {
                        title: 'Insurance Subscriber',
                        url: '/dashboard/patient/insurance-subscriber'
                    }
                ]
              },
              {
                title: 'Provider',
                url: '/dashboard/patient/provider'
              },
              {
                title: 'Referer',
                url: '/dashboard/patient/referer'
              },
              {
                  title: 'Family Members',
                  url: '/dashboard/patient/family_members'
              },
              {
                  title: 'Achieve Patient',
                  url: '/dashboard/patient/family_members'
              },
              {
                  title: 'Delete Patient',
                  url: '/dashboard/patient/family_members'
              }
        ]
    }
]