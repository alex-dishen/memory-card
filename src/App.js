import LoadingPage from './components/LoadingPage';
import StartPage from './components/StartPage';
import GamePage from './components/GamePage';
import './styles/normalize.css';
import './styles/App.css'
import video from './assets/img/camp.mp4';

function App() {
  return (
    <>
      {/* <LoadingPage /> */}
      {/* <StartPage /> */}
      <GamePage />
      <video autoPlay muted loop id='myVideo'>
        <source src={video} type='video/mp4'/>
      </video>
    </>
  );
}

export default App;
