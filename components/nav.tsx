import { LensProvider } from '@lens-protocol/react-web';
import Image from 'next/image'
import { useAccount } from 'wagmi';

export function Nav() {
  const { address, isConnected } = useAccount();

  return (
    <div className='logo'>
      <div className='logoImage'>
        <Image src="/pwf-logo-2x.png" alt="Logo" width={88} height={48} />
      </div>
      <div className='logoText'>
        {isConnected ? (
          <div>{address}</div>
        ) : (
          <div>Connect Wallet</div>
        )}
      </div>
    </div>
  );
}
