export interface UserBaseType {
  firstName: string;
  name: string;
  email: string;
  phone: string;
  address: string;
}

export interface APIUserType extends UserBaseType {
  id: number;
  passphrase: string;
}

export interface UserRegisterType extends UserBaseType {
  passphrase: string;
}
