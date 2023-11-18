import { LensClient, development } from "@lens-protocol/client";

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

  const feeds = await lensClient.feed.fetch({
    where: {
      for: managedProfiles.items[0].id,
    },
  });
  return new Response(JSON.stringify(feeds));
}
