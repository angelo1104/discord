import { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "GET") {
    const { data } = await axios.get("https://api.github.com/users/angelo1104");
    res.json(data);
  }
}
