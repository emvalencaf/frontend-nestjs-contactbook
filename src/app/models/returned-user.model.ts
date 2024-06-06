export interface ReturnedUser {
  email: string;
  password: string;
  username: string;
  profile: {
    firstName: string;
    lastName: string;
    birthday: string;
  }
}
