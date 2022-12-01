import { motion } from 'framer-motion';
import logo from '../assets/img/logo.png';

function Header({
    goBackToStartPage,
    playClick,
    score,
    bestScore
}) {
    return (
        <header>
            <div className="headerContainer">
                <motion.img 
                    src={logo}
                    alt="Logo"
                    onClick={() => {
                        goBackToStartPage(); 
                        playClick();
                    }}
                    initial={{opacity: 0}}
                    animate={{opacity: 1}}
                    transition={{duration: 0.6}}/>
                <motion.div
                    className="score"
                    initial={{opacity: 0}}
                    animate={{opacity: 1}}
                    transition={{duration: 0.6}}>
                    <div>Score: {score}</div>
                    <div>Best score: {bestScore}</div>
                </motion.div>
            </div>
        </header>
    );
}

export default Header;