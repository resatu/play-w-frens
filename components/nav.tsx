// import { Button } from '@/components/ui/button'
// import { useWeb3Modal } from '@web3modal/wagmi/react'
// import { useAccount } from 'wagmi'
// import { disconnect } from '@wagmi/core'
// import { usePathname } from 'next/navigation'
import Image from 'next/image'
// import Link from 'next/link'
// import { ChevronRight, Droplets, LogOut } from "lucide-react"

// const { open } = useWeb3Modal()
//   const { address } = useAccount()
//   const pathname = usePathname()

export function Nav() {
  return (
    <div className='logo'>
      <div className='logoImage'><Image src="/pwf-logo-2x.png" alt="Logo" width={88} height={48} /></div>
      <div className='logoText'>play with frens</div>
    </div>
  )
}
