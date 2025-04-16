export let CONTACTS = [
    {
      id: 1,
      fName: 'John',
      lName: 'Adams',
      phoneNumber: '701-000-1000',
      email: 'john.adams@example.com'
    },
    {
      id: 2,
      fName: 'Mary',
      lName: 'Jane',
      phoneNumber: '701-000-1000',
      email: 'mary.jane@example.com'
    },
    {
        id: 3,
        fName: 'Zach',
        lName: 'Hill',
        phoneNumber: '916-555-4182',
        email: 'zachhill@example.com'
      },
      {
        id: 4,
        fName: 'Charli',
        lName: 'XCX',
        phoneNumber: '419-555-8912',
        email: 'charlIXCX@example.com'
      }
  ];

  export interface Contact {
    id: number;
    fName: string;
    lName: string;
    phoneNumber: string;
    email: string;
  }
  