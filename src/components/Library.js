import React from 'react';
import LibrarySong from './LibrarySong';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

const Library = ({
  songs,
  setSongs,
  setCurrentSong,
  audioRef,
  isPlaying,
  libraryStatus,
  setIsPlaying,
  setLibraryStatus,
}) => {
  return (
    <div className={`library ${libraryStatus ? 'active-library' : ''}`}>
      <FontAwesomeIcon
        className="close-icon"
        icon={faXmark}
        onClick={() => setLibraryStatus(!libraryStatus)}
      />
      <h2>Library</h2>
      <div className="library-songs">
        {songs.map((song) => (
          <LibrarySong
            key={song.id}
            song={song}
            setCurrentSong={setCurrentSong}
            songs={songs}
            setSongs={setSongs}
            audioRef={audioRef}
            isPlaying={isPlaying}
            setIsPlaying={setIsPlaying}
          />
        ))}
      </div>
    </div>
  );
};

export default Library;
