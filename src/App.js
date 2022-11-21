import { useState, useEffect } from 'react';
import LoadingPage from './components/LoadingPage';
import StartPage from './components/StartPage';
import GamePage from './components/GamePage';
import Footer from './components/Footer';
import video from './assets/img/camp.mp4';
import Sound from 'react-sound';
import backgroundMusic from './assets/sounds/background_music.mp3';
import flipSound from './assets/sounds/flip.mp3';
import clickSound from './assets/sounds/click.wav';
import './styles/normalize.css';
import './styles/App.css';

function App({
  handleSongLoading,
  handleSongPlaying,
  handleSongFinishedPlaying
}) {
  const [isLoadingOver, setIsLoadingOver] = useState(false);
  const [isDifficultyChosen, setIsDifficultyChosen] = useState(false);
  const [isMusicPlaying, setIsMusicPlaying] = useState(false);
  const [isSoundPlaying, setIsSoundPlaying] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoadingOver(true);
      // setIsMusicPlaying(true);
    }, 3800)
  }, []);

  const goBackToStartPage = () => {
    setIsDifficultyChosen(false)
};

  const playFlip = () => {
    if(isSoundPlaying) {
      const audio = new Audio(flipSound);
      audio.volume = 0.16;
      audio.play();
    }
  };

  const playClick = () => {
    if(isSoundPlaying) {
      const audio = new Audio(clickSound);
      audio.volume = 0.06;
      audio.play();
    }
  };

  return (
    <>
      {!isLoadingOver
        ? <LoadingPage />
        : (
          <>
              {!isDifficultyChosen
                ? <StartPage 
                      setIsDifficultyChosen={setIsDifficultyChosen}
                      playClick={playClick}/>
                : <GamePage 
                      goBackToStartPage={goBackToStartPage}
                      playClick={playClick}
                      playFlip={playFlip}/>}

              <Footer 
                  isMusicPlaying={isMusicPlaying}
                  setIsMusicPlaying={setIsMusicPlaying}
                  isSoundPlaying={isSoundPlaying}
                  setIsSoundPlaying={setIsSoundPlaying}
                  playClick={playClick}/>
          </>
        )
      }

      <video autoPlay muted loop id='myVideo'>
        <source src={video} type='video/mp4'/>
      </video>
      <Sound 
          url={backgroundMusic}
          playStatus={isMusicPlaying ? Sound.status.PLAYING : Sound.status.STOPPED}
          onLoading={handleSongLoading}
          onPlaying={handleSongPlaying}
          onFinishedPlaying={handleSongFinishedPlaying}
          volume={1.4}
          loop/>
    </>
  );
}

export default App;
