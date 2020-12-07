import React, {useRef, useState, useEffect} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay, faAngleLeft, faAngleRight, faPause } from '@fortawesome/free-solid-svg-icons'


export default function Player({songs, currentSong, setCurrentSong, isPlaying, setIsPlaying}) {
  const refAudio = useRef(null);

  const [songInfo, setSongInfo] = useState({
    currentTime: 0,
    duration: 0
  });


  const playSong = () => {
    if (isPlaying) { 
      refAudio.current.pause();
      setIsPlaying(!isPlaying);
    } 
    else {
      refAudio.current.play();
      setIsPlaying(!isPlaying);
    }
  }


  const timeUpdate = (e) => {
    const current = e.target.currentTime;
    const duration = e.target.duration;

    setSongInfo({
      ...songInfo, 
      currentTime: current,
      duration: duration
    })
  }


  const drag = (e) => {
    refAudio.current.currentTime = e.target.value;

    setSongInfo({
      ...songInfo,
      currentTime: e.target.value
    });
  }


  const timeFormat = (time) => {
    const seconds = Math.floor(time % 60);
    const minutes = Math.floor(time / 60); 
    const formatedTime = ('0' + minutes).substr(-2) + ':' + ('0' + seconds).substr(-2);

    return formatedTime;
  }


  // Whenever the current song changes and the status is playing, automatically play the new song
  useEffect(() => {
    if (isPlaying && refAudio.current.paused) {
      refAudio.current.play()
    }
  }, [isPlaying, currentSong]) // only re-run this effect when isPlaying state and current song are changed


  const previousSong = () => {
    const currentSongIndex = songs.findIndex((song) => song.id === currentSong.id)

    if (currentSongIndex !== 0) {
      setCurrentSong(songs[currentSongIndex - 1]);
    } 
    else {
      setCurrentSong(songs[songs.length - 1]);
    }
  }

  const nextSong = () => {
    const currentSongIndex = songs.findIndex((song) => song.id === currentSong.id)

    if (currentSongIndex < songs.length - 1) {
      setCurrentSong(songs[currentSongIndex + 1]);
    } 
    else {
      setCurrentSong(songs[0]);
    }
  }


  return (
    <div className="player">
      <div className="time-control">
        <span>{timeFormat(songInfo.currentTime)}</span>
        <input 
          min={0} 
          max={songInfo.duration || 0}
          value={songInfo.currentTime}
          onChange={drag}
          type="range"
        /> 
        <span>{songInfo.duration ? timeFormat(songInfo.duration) : '0:00'}</span>
      </div>

      <div className="player__controls">
        <FontAwesomeIcon 
          className="icon icon-previous" 
          size="2x" 
          icon={faAngleLeft} 
          onClick={() => previousSong()}
        />

        <FontAwesomeIcon 
          onClick={playSong} 
          className="icon icon-play" 
          size="2x" 
          icon={isPlaying ? faPause : faPlay} 
        />

        <FontAwesomeIcon 
          className="icon icon-next" 
          size="2x" 
          icon={faAngleRight} 
          onClick={() => nextSong()}
        />
      </div>

      <audio 
        ref={refAudio} 
        src={currentSong.audio}
        onTimeUpdate={timeUpdate}
      ></audio>
    </div>
  )
}
