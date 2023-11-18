import Image from 'next/image'
import React from 'react'

const JoinCard = () => {
    return (
        <div className='card'>
            <div className='leaderboard'>
                <div className='profilePic'>
                    <Image src="/pp-dummy-2x.png" alt="profile-picture" width={200} height={200} />
                </div>
                <div className='profileHandle'>@aysipixie.lens</div>
            </div>
            <div className='connectCTA'>

                <div className='cardTextGroup'>
                    <div className='cardIcon'>
                        <Image src="/joincard-icon.png" alt="join-the-group-icon" width={48} height={48} />
                    </div>
                    <div className='cardTitle'>Sign up with your Lens profile to join the group</div>
                    <div className='cardSubtitle'>aysipixie.lens sent your invitation for joining at <span>@2048gameclub</span></div>
                </div>
            </div>
        </div>
    )
}

export default JoinCard