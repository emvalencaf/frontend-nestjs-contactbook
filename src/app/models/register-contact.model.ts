export interface RegisterContact {
  firstName: string;
  lastName: string;
  birthday: string;
  email: string;
  phone: {
    number: string;
    codeArea: string;
    isTelegram: boolean;
    isWhatsapp: boolean;
  }[];
}
