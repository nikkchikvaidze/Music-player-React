import React from 'react';

const LibrarySong = ({
  song: currentSong,
  setCurrentSong,
  songs,
  setSongs,
  audioRef,
  isPlaying,
  setIsPlaying,
}) => {
  const songSelectHandler = () => {
    setCurrentSong(currentSong);
    const newSongs = songs.map((song) => {
      return {
        ...song,
        active: song.id === currentSong.id ? true : false,
      };
    });
    setSongs(newSongs);
    audioRef.current.play();
    const playPromise = audioRef.current.play();
    if (playPromise !== undefined) {
      playPromise.then((audio) => audioRef.current.play());
    }
    setIsPlaying(true);
  };

  return (
    <div className={currentSong.active ? 'selected' : ''}>
      <div className="library-song" onClick={songSelectHandler}>
        <img src={currentSong.cover} alt={currentSong.name} />
        <div className="song-description">
          <h3>{currentSong.name}</h3>
          <h4>{currentSong.artist}</h4>
        </div>
      </div>
    </div>
  );
};

export default LibrarySong;
