import LoadingPage from './components/LoadingPage';
import StartPage from './components/StartPage';
import './styles/normalize.css';
import './styles/App.css'
// import video from './assets/video.mov'

function App() {
  return (
    <>
      {/* <LoadingPage /> */}
      <StartPage />
      {/* <video autoPlay muted loop id='myVideo'>
        <source src={video} type='video/mov'/>
      </video> */}
    </>
  );
}

export default App;
