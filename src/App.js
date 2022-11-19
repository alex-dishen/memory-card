import LoadingPage from './components/LoadingPage';
import './styles/normalize.css';
import './styles/App.css'
// import video from './assets/video.mov'

function App() {
  return (
    <div className="App">
      <LoadingPage />
      {/* <video autoPlay muted loop id='myVideo'>
        <source src={video} type='video/mov'/>
      </video> */}
    </div>
  );
}

export default App;
