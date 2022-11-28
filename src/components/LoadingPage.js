import dipperRunning from '../assets/img/dipper_running.gif';
import '../styles/LoadingPage.scss'

function LoadingPage() {
    return (
        <div className='loadingPage'>
            <img src={dipperRunning} alt="Running Dipper" />
            <p>Loading...</p>
        </div>
    );
}

export default LoadingPage;