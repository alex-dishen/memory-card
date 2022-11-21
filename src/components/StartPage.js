import logo from '../assets/img/logo.png';
import '../styles/StartPage.css'

function StartPage({ setIsDifficultyChosen }) {
    return (
        <>
            <div className='startPage'>
                <img src={logo} alt="Logo" className='logo'/>
                <h1>Memory Game</h1>
                <div className="difficultyLevels">
                    <button onClick={() => setIsDifficultyChosen(true)}>Easy</button>
                    <button onClick={() => setIsDifficultyChosen(true)}>Medium</button>
                    <button onClick={() => setIsDifficultyChosen(true)}>Hard</button>
                </div>
            </div>
        </>
    ); 
}

export default StartPage;