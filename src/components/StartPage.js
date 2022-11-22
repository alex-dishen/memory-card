import logo from '../assets/img/logo.png';
import '../styles/StartPage.css';
import { motion } from 'framer-motion';

function StartPage({ setIsDifficultyChosen, playClick }) {
    return (
        <>
            <div className='startPage'>
                <motion.img 
                    src={logo} alt="Logo"
                    className='logo'

                    initial={{scale: 0}}
                    animate={{scale: 1}}
                    transition={{duration: 0.5}}/>
                <motion.h1
                    initial={{scale: 0}}
                    animate={{scale: 1}}
                    transition={{duration: 0.5}}>
                        Memory Game
                </motion.h1>
                <motion.div 
                    className="difficultyLevels"
                    initial={{scale: 0}}
                    animate={{scale: 1}}
                    transition={{duration: 0.5}}>
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
                </motion.div>
            </div>
        </>
    ); 
}

export default StartPage;