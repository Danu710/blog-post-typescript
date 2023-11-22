// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  name: string;
};

import axios from "axios";

const baseURL = `https://gorest.co.in/public/v2`;

export const axiosInstance = axios.create({
  baseURL,
  // Other configurations like headers, timeouts, etc., can be added here
});

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.status(200).json({ name: "John Doe" });
}
