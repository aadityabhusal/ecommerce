import { IProduct } from "@interfaces/index";
import { NextApiRequest, NextApiResponse } from "next";
import products from "./products.json";

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<IProduct>
) {
  let product = products.filter((item) => item.slug === req.query.slug)[0];

  res.status(200).json(product);
}
