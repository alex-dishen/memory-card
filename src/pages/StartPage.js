import { motion } from 'framer-motion';
import logo from '../assets/img/logo.png';
import '../styles/StartPage.scss';

function StartPage({ setDifficultyLevel, playClick }) {
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
                        // The first number indicates the amount of characters
                        //the user is going to interact with during the whole game.
                        // The second number indicates the amount of
                        //characters the user will see on the playground.
                        // The same happens in other buttons.
                        setDifficultyLevel([5, 3]);
                        playClick();
                    }}> Easy </button>

                    <button onClick={() => {
                        setDifficultyLevel([7, 4]);
                        playClick();
                    }}> Medium </button>

                    <button onClick={() => {
                        setDifficultyLevel([10, 5]);
                        playClick();
                    }}> Hard </button>
                </motion.div>
            </div>
        </>
    ); 
}

export default StartPage;