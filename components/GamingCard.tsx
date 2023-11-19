import Image from 'next/image'
import React from 'react'
import { getLensProfile } from './Nav';

const JoinCard = () => {
    getServerSideProps: async (context) => {
        const { address } = context.query;
        const profile = await getLensProfile(address);
        return {
            props: {
                profile,

            }
        }
    }
    return (
        <div className='gamingCard'>
            <div className='leaderboard'>
            </div>
            <div className='game'>
            </div>
        </div>
    )
}

export default JoinCard