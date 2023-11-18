'use client'

import { Button } from '@/components/ui/button'
import { useWeb3Modal } from '@web3modal/wagmi/react'
import { useAccount } from 'wagmi'
import { disconnect } from '@wagmi/core'
import { usePathname } from 'next/navigation'
import { ChevronRight, Droplets, LogOut } from "lucide-react"


export function ConnectWallet() {

    const { open } = useWeb3Modal()
    const { address } = useAccount()
    const pathname = usePathname()

    return (
        <div className='
    flex
    sm:items-center
    pl-8 pb-3 sm:p-0
  '>
            {
                !address && (
                    <Button onClick={() => open()} variant="secondary" className="mr-4">
                        Connect Wallet
                        <ChevronRight className="h-4 w-4" />
                    </Button>
                )
            }
            {
                address && (
                    <Button onClick={disconnect} variant="secondary" className="mr-4">
                        Disconnect
                        <LogOut className="h-4 w-4 ml-3" />
                    </Button>
                )
            }

        </div>
    )
}

export default ConnectWallet