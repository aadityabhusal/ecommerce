import { IUser } from ".";
import { ICategory } from "./ICategory";

export interface IProduct {
  id?: string;
  slug: string;
  title: string;
  short_description: string;
  price: string;
  sale_price?: string;
  stock_status: string;
  image: string;
  published_date: string;
  brand?: string;
  variations?: Array<IVariationOption>;
}

export interface IProductDetail {
  id?: string;
  slug: string;
  meta_title: string;
  short_description: string;
  description: string;
  categories: Array<ICategory>;
  sku: string;
  quantity: number;
  image: string;
  brand: string;
  currency: string;
  regular_price: number;
  sale_price?: number;
  total_sale: number;
  rating_count: number;
  average_rating: number;
  stock_status: string;
  taxable: boolean;
  special: number;
  published_date: Date;
  variations: Array<IProductVariation>;

  images?: Array<string>;
}

export interface IProductVariation {
  sku: string;
  title: string;
  description: string;
  regular_price: string;
  sale_price: string;
  quantity: string;
  status: string;
  variationOptions: Array<IVariationOption>;
  images?: Array<string>;
}

export interface IVariationOption {
  name: string;
  type: string;
}

export interface IProductReviews {
  user: IUser;
  product: IProduct;
  rating: string;
  message: string;
}
