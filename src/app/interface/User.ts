export interface User {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  contactNo: string;
  dob: number;
  addressLine1: string;
  addressLine2: string;
  city: string;
  state: string;
  zip: number;
  country: string;
  workExperience: number;
}

export interface UserWithId extends User {
  id: string;
}

export type createUser = Omit<User, 'id'>;
