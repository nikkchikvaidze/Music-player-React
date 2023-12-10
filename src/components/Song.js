import React from 'react';
import styles from '../styles/Song.module.css';

const Song = ({ currentSong }) => {
  return (
    <div className={styles['song-container']}>
      <img src={currentSong.cover} />
      <h2>{currentSong.name}</h2>
      <h3>{currentSong.artist}</h3>
    </div>
  );
};

export default Song;
