import { motion } from 'framer-motion';
import logo from '../assets/img/logo.png';

function Header({
    goBackToStartPage,
    playClick,
    score,
    bestScore
}) {
    const variants = {
        hidden: {opacity: 0},
        visible: {
            opacity: 1,
            transition: {duration: 0.6}}
    }
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
                    variants={variants}
                    initial='hidden'
                    animate='visible'
                    />
                <motion.div
                    className="score"
                    variants={variants}
                    initial='hidden'
                    animate='visible'
                    >
                    <div>Score: {score}</div>
                    <div>Best score: {bestScore}</div>
                </motion.div>
            </div>
        </header>
    );
}

export default Header;