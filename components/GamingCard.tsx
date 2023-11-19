import Image from 'next/image'
import React from 'react'
import { getLensProfile } from './Nav';
import GameWidget from './GameWidget';

import { ethers } from 'ethers';
import { Comment } from '@lens-protocol/react-web';

// Function to call when alert is triggered
// const handleAlertTrigger = async () => {
//   // Use the private key from environment variables
//   const privateKey = process.env.NEXT_PUBLIC_LENS_PRIVATE_KEY;
//   const wallet = new ethers.Wallet(privateKey);

//   // Define the publication content and metadata
//   const publicationData = async () => {
//     const res = await fetch
//   };

//   try {
//     await createPublication(wallet, publicationData);
//   } catch (error) {
//     console.error("Error creating publication:", error);
//   }
// };



const JoinCard = () => {

    return (
        <div className='gamingCard'>
            <div className='leaderboard'>
            </div>
            <div className='game'>
                <GameWidget />
            </div>
        </div>
    )
}



export default JoinCard