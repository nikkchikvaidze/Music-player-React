import React from 'react';
import LibrarySong from './LibrarySong';
import styles from '../styles/Library.module.css';

const Library = ({ songs, setCurrentSong, audioRef, isPlaying }) => {
  return (
    <div className={styles['library']}>
      <h2>Library</h2>
      <div className={styles['library-songs']}>
        {songs.map((song) => (
          <LibrarySong
            key={song.id}
            song={song}
            setCurrentSong={setCurrentSong}
            audioRef={audioRef}
            isPlaying={isPlaying}
          />
        ))}
      </div>
    </div>
  );
};

export default Library;
