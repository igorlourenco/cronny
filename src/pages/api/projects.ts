import { NextApiRequest, NextApiResponse } from 'next'
import { getUserProjects } from '../../database/server'
import { auth } from '../../config/firebase-admin'

export default async (request: NextApiRequest, response: NextApiResponse) => {
  try {
    const { token } = request.headers
    const { uid } = await auth.verifyIdToken(token.toString())

    const { projects, error } = await getUserProjects(uid)

    if (error) {
      return response.status(500).json({ error })
    }

    return response.status(200).json({ projects })
  } catch (error) {
    return response.status(500).json({ error })
  }
}
