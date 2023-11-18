import { Button } from '@/components/ui/button'
import { useWeb3Modal } from '@web3modal/wagmi/react'
import { useAccount } from 'wagmi'
import { disconnect } from '@wagmi/core'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { ChevronRight, Droplets, LogOut } from "lucide-react"

export function Nav() {
  const { open } = useWeb3Modal()
  const { address } = useAccount()
  const pathname = usePathname()

  return (
    <div className='logo'>
      <div className='logoImage'><img src="pwf-logo-2x.png" alt="Logo" /></div>
      <div className='logoText'>play with frens</div>
    </div>
  )
}