import { LensClient, development, ProfileRequest } from "@lens-protocol/client";

const lensClient = new LensClient({
  environment: development
});

export async function POST(request: Request) {
  const req = await request.json()

  const baseReq: ProfileRequest =
  {
      forProfileId: req["address"] //"0x996cf6f143BcD9f2A9264d62A17eedfaFf460217"
  };
  
  const profile = await lensClient.profile.fetch(baseReq);

  console.log("......")
  return new Response(JSON.stringify(profile));
}
