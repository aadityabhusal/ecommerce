import { IProduct } from ".";

export interface IUser {
  id?: string;
  username: string;
  firstname: string;
  lastname: string;
  email: string;
}

export interface IUserDetails {
  id?: string;
  firstname: string;
  lastname: string;
  email: string;
  addresses: Array<IUserAddress>;
  cart: Array<IUserItem>;
  orders: Array<IUserOrder>;
}

export interface IUserAddress {
  country: string;
  state: string;
  city: string;
  address: string;
  phone: string;
  zip: string;
}

export interface IUserItem {
  product: IProduct;
  quantity?: string;
  added_date: string;
}

export interface IUserOrder {
  items: IUserItem;
  amount: string;
  shippingAddress: IUserAddress;
  shippingNote: string;
  status: string;
  date: string;
}
