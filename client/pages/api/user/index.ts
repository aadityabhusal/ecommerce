import { NextApiRequest, NextApiResponse } from "next";
import { IUser } from "@interfaces/index";
import user from "./user.json";
const password = "aaditya@123";

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<IUser>
) {
  res.status(200).json(user);
}
