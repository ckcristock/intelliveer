export class Patient
{
    id: string | undefined;
    practiceId: string | undefined;
    profile: {
        title: string,
        firstName: string,
        middleName: string,
        lastName: string,
        DOB: string,
        gender: string,
        preferredPronoun: string,
        language: string,
        maritalStatus: string
    }  = {
        title: '',
        firstName: '',
        middleName: '',
        lastName: '',
        DOB: '',
        gender: '',
        preferredPronoun: '',
        language: '',
        maritalStatus: ''
    };
    information: {
        preferredName: string,
        pronounciation: string,
        school: string,
        interests: string,
        tags: string
    } = {
        preferredName: '',
        pronounciation: '',
        school: '',
        interests: '',
        tags: ''
    };
    preferences: {
        location: string,
        billingProvider: string,
        treatingProvider: string,
        newPatientCoordinator: string,
        chairSideAssistant: string,
        treatmentCoordinator: string
    } = {
        location: '',
        billingProvider: '',
        treatingProvider: '',
        newPatientCoordinator: '',
        chairSideAssistant: '',
        treatmentCoordinator: ''
    };
    emergencyContact: {
        name: string,
        contactPerson: string,
        emergencyContact: string
    } = {
        name: '',
        contactPerson: '',
        emergencyContact: ''
    };
    notes: string | undefined;
}