import { NextApiRequest, NextApiResponse } from "next";
import { ICategory } from "@interfaces/index";
import categories from "./categories.json";

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Array<ICategory>>
) {
  res.status(200).json(categories);
}
