import { LensProvider } from '@lens-protocol/react-web';
import Image from 'next/image'
import { useAccount } from 'wagmi';
import { LensClient, development, ProfileRequest } from "@lens-protocol/client";

const lensClient = new LensClient({
  environment: development
});

export async function getLensProfile(address: string) {

  const managedProfiles = await lensClient.wallet.profilesManaged({ for: address });

  if (managedProfiles.items.length == 0)
    return null;

  const baseReq: ProfileRequest =
  {
    //forHandle: req["ensName"], // eth/r3sat.eth
    forProfileId: managedProfiles.items[0].id // ProfileId "0x996cf6f143BcD9f2A9264d62A17eedfaFf460217"
  };

  const profile = await lensClient.profile.fetch(baseReq);

  return profile;
}


export function Nav() {
  const { address, isConnected } = useAccount();

  return (
    <div className='logo'>
      <div className='logoImage'>
        <Image src="/pwf-logo-2x.png" alt="Logo" width={88} height={48} />
      </div>
      <div className='logoText'>
        {isConnected ? (
          <div>{address}</div>) : (
          <div>play with frens</div>
        )}
      </div>
    </div>
  );
}
