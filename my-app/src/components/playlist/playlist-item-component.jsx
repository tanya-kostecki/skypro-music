// import React from 'react'
// import * as S from './playlist.styles'
// import { useDispatch, useSelector } from 'react-redux'
// import { selectCurrentTrack } from '../../store/actions/creators/currentTrack'
// import { currentIsPlaying, currentTrackPlayer, currentTracklistPlayer } from '../../store/selectors/currentTrack'

// export function PlaylistItem() { 
//   const dispatch = useDispatch()

//   const tracklist = useSelector(currentTracklistPlayer)

//   const isPlaying = useSelector(currentIsPlaying)
//   const currentTrack = useSelector(currentTrackPlayer)

//   const track = useSelector(currentTrackPlayer) 
//   const showPlayer = (track) => {
//     dispatch(selectCurrentTrack(track))
//   }

//   const secondsToMinutes = (sec) => {
//     const min = Math.trunc(sec / 60) + ''
//     sec = (sec % 60) + ''
//     return min.padStart(2, 0) + ':' + sec.padStart(2, 0)
//   }

//   return (
//     <div>
//       {tracklist?.map((track) => ( 
//         <S.PlaylistItem key={track.id}>
//           <S.PlaylistTrack onClick={() => showPlayer(track)}>
//             <S.TrackTitle>
//               <S.TrackTitleImage>
//                 {currentTrack.id === track.id && (
//                   <S.TrackTitleAnimation $isPlaying={isPlaying}>
//                   </S.TrackTitleAnimation>
//                 )}
//                 <S.TrackTitleSvg alt="music">
//                   <use xlinkHref="img/icon/sprite.svg#icon-note"></use>
//                 </S.TrackTitleSvg>
//               </S.TrackTitleImage>
//               <div className="track__title-text">
//                 <S.TrackTitleLink href={track.track_file}>
//                   {track.name}
//                   <S.TrackTitleSpan>{track.titleSpan}</S.TrackTitleSpan>
//                 </S.TrackTitleLink>
//               </div>
//             </S.TrackTitle>
//             <S.TrackAuthor>
//               <S.TrackAuthorLink href={track.authorLink}>
//                 {track.author}
//               </S.TrackAuthorLink>
//             </S.TrackAuthor>
//             <S.TrackAlbum>
//               <S.TrackAlbumLink href={track.albumLink}>
//                 {track.album}
//               </S.TrackAlbumLink>
//             </S.TrackAlbum>
//             <div className="track__time">
//               <S.TrackTimeSvg alt="time">
//                 <use xlinkHref="img/icon/sprite.svg#icon-like"></use>
//               </S.TrackTimeSvg>
//               <S.TrackTimeText className="track__time-text">
//                 {secondsToMinutes(track.duration_in_seconds)}
//               </S.TrackTimeText>
//             </div>
//           </S.PlaylistTrack>
//         </S.PlaylistItem>
//       ))}
//     </div>
//   )
// }