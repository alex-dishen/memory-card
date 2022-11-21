import logo from '../assets/img/logo.png';
import '../styles/StartPage.css'

function StartPage({ setIsDifficultyChosen, playClick }) {
    return (
        <>
            <div className='startPage'>
                <img src={logo} alt="Logo" className='logo'/>
                <h1>Memory Game</h1>
                <div className="difficultyLevels">
                    <button onClick={() => {
                        setIsDifficultyChosen(true);
                        playClick();
                    }}> Easy </button>

                    <button onClick={() => {
                        setIsDifficultyChosen(true);
                        playClick();
                    }}> Medium </button>

                    <button onClick={() => {
                        setIsDifficultyChosen(true);
                        playClick();
                    }}> Hard </button>
                </div>
            </div>
        </>
    ); 
}

export default StartPage;