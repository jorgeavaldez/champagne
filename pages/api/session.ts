import { getSession } from "next-auth/client"
import type { NextApiRequest, NextApiResponse } from "next"

export default async function session(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const session = await getSession({ req })
  res.send(JSON.stringify(session, null, 2))
}