export const playAudio = (setIsPlaying, audioRef) => {
  audioRef.current.play();
  const playPromise = audioRef.current.play();
  if (playPromise !== undefined) {
    playPromise.then((audio) => audioRef.current.play());
  }
  setIsPlaying(true);
};
