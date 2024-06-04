import { ContactPhone } from "./contact-phone.model";

export interface Contact {
  firstName: string;
  lastName: string;
  email: string;
  birthday: string;
  isFavorite: boolean;
  phones: ContactPhone[];
}
