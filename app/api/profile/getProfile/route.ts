import { LensClient, development, ProfileRequest } from "@lens-protocol/client";

const lensClient = new LensClient({
  environment: development
});

export async function POST(request: Request) {
  const req = await request.json()

  const managedProfiles = await lensClient.wallet.profilesManaged({ for: req.walletAddress });

  console.log("test1");
  console.log(JSON.stringify(managedProfiles))

  if (managedProfiles.items.length == 0)
    return new Response(null);

  const baseReq: ProfileRequest =
  {
      //forHandle: req["ensName"], // eth/r3sat.eth
      forProfileId: managedProfiles.items[0].id // ProfileId "0x996cf6f143BcD9f2A9264d62A17eedfaFf460217"
  };
  
  const profile = await lensClient.profile.fetch(baseReq);

  console.log("......")
  return new Response(JSON.stringify(profile));
}
