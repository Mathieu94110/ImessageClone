import type { NextApiRequest, NextApiResponse } from "next";
import redis from "../../../redis";
import { Message } from "../../../typings";

type Data = {
  message: Message;
};

type ErrorData = {
  body: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data | ErrorData>
) {
  console.log("called add Messafe");
  if (req.method !== "POST") {
    res.status(405).json({ body: "Method Not Allowed" });
    return;
  }
  const { message } = req.body;

  const newMessage = {
    ...message,
    // Replace the timestamp of the user to the timestamp of the server
    created_at: Date.now(),
  };
  await redis.hset("messages", message.id, JSON.stringify(newMessage));

  res.status(200).json({ message: newMessage });
}
