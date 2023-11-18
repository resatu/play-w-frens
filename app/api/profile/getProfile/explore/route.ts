import { LensClient, development, ProfileRequest, ExploreProfilesOrderByType } from "@lens-protocol/client";
import { NextApiResponse } from "next";

const lensClient = new LensClient({
  environment: development
});

export async function POST(request: Request, response: NextApiResponse)  {
  const req = await request.json()

  var result = await lensClient.explore.profiles({
    orderBy: ExploreProfilesOrderByType.MostFollowers,
  });
  return response.status(200).send(result);
}
