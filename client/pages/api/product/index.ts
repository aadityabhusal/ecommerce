import { NextApiRequest, NextApiResponse } from "next";
import { IProduct } from "@interfaces/index";
import products from "./products.json";

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Array<IProduct>>
) {
  res.status(200).json(products);
}
