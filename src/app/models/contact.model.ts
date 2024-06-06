import { ContactPhone } from "./contact-phone.model";

export interface Contact {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  birthday: string;
  isFavorite: boolean;
  phones: ContactPhone[];
}
