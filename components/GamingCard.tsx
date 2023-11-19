import Image from 'next/image'
import React from 'react'
import { getLensProfile } from './Nav';
import X2048 from './X2048';

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
                {/* <div className='gameTitle'>2048</div> */}
                <div className='gameArena'><X2048 /></div>
            </div>
        </div>
    )
}

export default JoinCard