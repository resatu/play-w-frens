'use client'

import React from 'react'

// import {
//     ProfileListItem, Publications, Theme
// } from '@lens-protocol/widgets-react'
import JoinCard from '@/components/JoinCard'

//   /* Optional parameters */
//   profileId: string
//   handle: string
//   theme: Theme (default, dark)

const Index = () => {
    return (
        <div className='landing'>
            <JoinCard />
        </div>
    )
}

export default Index

//   /* Optional parameters */
//   profileId: string
//   handle: string
//   profile: Profile
//   theme: Theme (default, dark)
//   onClick: () => void
//   onFollowPress: () => void
//   isFollowing: boolean
//   containerStyle: {}
//   followButtonContainerStyle: {}
//   followButtonStyle: {}