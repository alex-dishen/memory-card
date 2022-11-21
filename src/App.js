import { useState, useEffect } from 'react';
import LoadingPage from './components/LoadingPage';
import StartPage from './components/StartPage';
import GamePage from './components/GamePage';
import Footer from './components/Footer';
import video from './assets/img/camp.mp4';
import Sound from 'react-sound';
import backgroundMusic from './assets/sounds/background_music.mp3';
import './styles/normalize.css';
import './styles/App.css';

function App({
  handleSongLoading,
  handleSongPlaying,
  handleSongFinishedPlaying
}) {
  const [isLoadingOver, setIsLoadingOver] = useState(false);
  const [isMusicPlaying, setIsMusicPlaying] = useState(false);
  const [isDifficultyChosen, setIsDifficultyChosen] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsLoadingOver(true);
      // setIsMusicPlaying(true);
    }, 3800)
  }, []);

  const goBackToStartPage = () => {
    setIsDifficultyChosen(false)
  }

  return (
    <>
      {!isLoadingOver
        ? <LoadingPage />
        : (
          <>
              {!isDifficultyChosen
                ? <StartPage 
                      setIsDifficultyChosen={setIsDifficultyChosen}/>
                : <GamePage 
                      goBackToStartPage={goBackToStartPage}/>}

              <Footer 
                  setIsMusicPlaying={setIsMusicPlaying}
                  isMusicPlaying={isMusicPlaying}/>
          </>
        )
      }

      <video autoPlay muted loop id='myVideo'>
        <source src={video} type='video/mp4'/>
      </video>
      {/* <Sound 
          url={backgroundMusic}
          playStatus={isMusicPlaying ? Sound.status.PLAYING : Sound.status.STOPPED}
          onLoading={handleSongLoading}
          onPlaying={handleSongPlaying}
          onFinishedPlaying={handleSongFinishedPlaying}
          loop/> */}
    </>
  );
}

export default App;
