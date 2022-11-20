import Footer from './Footer';
import logo from '../assets/img/logo.png';
import '../styles/StartPage.css'

function StartPage() {
    return (
        <>
            <div className='startPage'>
                <img src={logo} alt="Logo" className='logo'/>
                <h1>Memory Game</h1>
                <div className="difficultyLevels">
                    <button>Easy</button>
                    <button>Medium</button>
                    <button>Hard</button>
                </div>
            </div>
            <Footer />
        </>
    ); 
}

export default StartPage;