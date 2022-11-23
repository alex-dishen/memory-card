import { useState, useEffect } from 'react';
import LoadingPage from './components/LoadingPage';
import StartPage from './components/StartPage';
import GamePage from './components/GamePage';
import Footer from './components/Footer';
import Sound from 'react-sound';
import video from './assets/img/camp.mp4';
import backgroundMusic from './assets/sounds/background_music.mp3';
import flipSound from './assets/sounds/flip.mp3';
import clickSound from './assets/sounds/click.wav';
import characters from './components/characters';
import './styles/normalize.css';
import './styles/App.css';

function App({
  handleSongLoading,
  handleSongPlaying,
  handleSongFinishedPlaying
}) {
  const [isLoadingOver, setIsLoadingOver] = useState(false);
  const [isMusicPlaying, setIsMusicPlaying] = useState(false);
  const [isSoundPlaying, setIsSoundPlaying] = useState(true);
  const [isInfoNeeded, setIsInfoNeeded] = useState(false);
  const [difficultyLevel, setDifficultyLevel] = useState([]);
  const [charactersToPlayWith, setCharactersToPlayWith] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      setIsLoadingOver(true);
    }, 3700);
  }, []);

  const goBackToStartPage = () => {
    setDifficultyLevel([]);
  };

  const playFlip = () => {
    if(isSoundPlaying) {
      const audio = new Audio(flipSound);
      audio.volume = 0.13;
      audio.play();
    }
  };

  const playClick = () => {
    if(isSoundPlaying) {
      const audio = new Audio(clickSound);
      audio.volume = 0.04;
      audio.play();
    }
  };

  const getCharactersToPlayWith = () => {
    let randomCharacters = [];

    while(randomCharacters.length < difficultyLevel[0]) {
      const randNum = Math.floor(Math.random() * 10);
      if(!randomCharacters.includes(characters[randNum])) {
        randomCharacters.push(characters[randNum]);
      }
    }

    setCharactersToPlayWith(randomCharacters);
  }

  return (
    <>
      {!isLoadingOver
        ? <LoadingPage />
        : (
          <>
              {!difficultyLevel[0]
                ? <StartPage 
                      setDifficultyLevel={setDifficultyLevel}
                      playClick={playClick}/>
                : <GamePage 
                      goBackToStartPage={goBackToStartPage}
                      playClick={playClick}
                      playFlip={playFlip}
                      getCharactersToPlayWith={getCharactersToPlayWith}
                      charactersToPlayWith={charactersToPlayWith}/>}

              <Footer 
                  isMusicPlaying={isMusicPlaying}
                  setIsMusicPlaying={setIsMusicPlaying}
                  isSoundPlaying={isSoundPlaying}
                  setIsSoundPlaying={setIsSoundPlaying}
                  isInfoNeeded={isInfoNeeded}
                  setIsInfoNeeded={setIsInfoNeeded}
                  playClick={playClick}/>
          </>
        )
      }

      <video autoPlay muted loop id='myVideo'>
        <source src={video} type='video/mp4'/>
      </video>
      <Sound 
          url={backgroundMusic}
          playStatus={isMusicPlaying ? Sound.status.PLAYING : Sound.status.PAUSED}
          onLoading={handleSongLoading}
          onPlaying={handleSongPlaying}
          onFinishedPlaying={handleSongFinishedPlaying}
          volume={1.4}
          loop={true}/>
    </>
  );
}

export default App;
