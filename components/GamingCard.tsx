'use client';

import Image from 'next/image'
import GameWidget from './GameWidget';
import {
    useExploreProfiles, Profile
} from '@lens-protocol/react-web';

import { POST } from '../app/api/game/getGameRooms/route'
const response: any = await POST(new Request(''));
const address = response.winner
const score = response.score

export default function JoinCard() {
    const {
        data, error, loading
    } = useExploreProfiles()

    return (
        <div className='gamingCard'>
            <div className='leaderboard'>
                <h1>Leader of the week</h1>
                {address}
                {score}
            </div>
            <div className='game'>
                <GameWidget />
            </div>
        </div>
    )
}

