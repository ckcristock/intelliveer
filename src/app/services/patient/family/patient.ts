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
    } | undefined;
    information: {
        preferredName: string,
        pronounciation: string,
        school: string,
        interests: string,
        tags: string
    } | undefined;
    preferences: {
        location: string,
        billingProvider: string,
        treatingProvider: string,
        newPatientCoordinator: string,
        chairSideAssistant: string,
        treatmentCoordinator: string
    } | undefined;
    emergencyContact: {
        name: string,
        contactPerson: string,
        emergencyContact: string
    } | undefined;
    notes: string | undefined;
}