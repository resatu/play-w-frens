'use client'

import { useAccount } from 'wagmi'
import { useExploreProfiles, useProfile } from '@lens-protocol/react-web'
import { profile } from 'console'
import { Publications } from '@lens-protocol/widgets-react'

// TODO - need to make sure the profile is working

// export default function ProfileComponent({
//   params: { handle }
// }) {
//   let { data: profile, loading } = useProfile({ handle });
//   if (loading) return <div className='p-14'>Loading...</div>;
//   return (
//     <div className='p-14'>
//       {profile?.picture?.__typename === "MediaSet" && (
//         <img
//           width="200"
//           height="200"
//           alt={profile?.handle}
//           src={profile?.picture?.original?.url}
//         />
//       )}
//       <h1 className='text-3xl my-3'>{profile?.handle}</h1>
//       <p className='text-xl mb-4'>{profile.bio}</p>
//       {profile && <Publications profile={profile} />}
//     </div>
//   )
// }