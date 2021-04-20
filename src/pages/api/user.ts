import { withSSRContext } from "aws-amplify";
import { NextApiRequest, NextApiResponse } from "next";
import '../../../amplifyConfig'

export default async (request: NextApiRequest, response: NextApiResponse) => {
  const { Auth } = withSSRContext({req: request})
  const user = await Auth.currentAuthenticatedUser()
  response.statusCode = 200
  response.json(user)
}
