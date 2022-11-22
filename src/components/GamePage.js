import logo from '../assets/img/logo.png';
import stan from '../assets/img/stan.webp';
import dipper from '../assets/img/dipper.webp';
import ford from '../assets/img/ford.png';
import gideon from '../assets/img/gideon.webp';
import waddles from '../assets/img/waddles.webp';
import mabel from '../assets/img/bill.webp';
import Tilt from 'react-parallax-tilt';
import { motion } from 'framer-motion';

import '../styles/GamePage.css'

function GamePage({ goBackToStartPage, playClick, playFlip }) {
    return (
        <>
            <header>
                <div className="headerContainer">
                    <motion.img 
                        src={logo}
                        alt="Logo"
                        onClick={() => {goBackToStartPage(); playClick()}}
                        initial={{opacity: 0}}
                        animate={{opacity: 1}}
                        transition={{duration: 0.6}}/>
                    <motion.div
                        className="score"
                        initial={{opacity: 0}}
                        animate={{opacity: 1}}
                        transition={{duration: 0.6}}>
                        <div>Score: 0</div>
                        <div>Best score: 0</div>
                    </motion.div>
                </div>
            </header>
            <motion.div 
                className='playGround'
                initial={{scale: 0}}
                animate={{scale: 1}}
                transition={{duration: 0.5}}>
                <Tilt glareEnable={true} glareMaxOpacity={0.6} glareColor="#ffffff" glarePosition="bottom" glareBorderRadius="20px">
                    <div className='card' onClick={playFlip}>
                        <div
                            className="characterHolder"
                            style={{backgroundImage: `url(${stan})`}} />
                        <div className='name'>Stan</div>
                    </div>
                </Tilt>
                <Tilt glareEnable={true} glareMaxOpacity={0.6} glareColor="#ffffff" glarePosition="bottom" glareBorderRadius="20px">
                    <div className='card' onClick={playFlip}>
                        <div
                            className="characterHolder"
                            style={{backgroundImage: `url(${dipper})`}} />
                        <div className='name'>Dipper</div>
                    </div>
                </Tilt>
                <Tilt glareEnable={true} glareMaxOpacity={0.6} glareColor="#ffffff" glarePosition="bottom" glareBorderRadius="20px">
                    <div className='card' onClick={playFlip}>
                        <div
                            className="characterHolder"
                            style={{backgroundImage: `url(${ford})`}} />
                        <div className='name'>Ford</div>
                    </div>
                </Tilt>
                <Tilt glareEnable={true} glareMaxOpacity={0.6} glareColor="#ffffff" glarePosition="bottom" glareBorderRadius="20px">
                    <div className='card' onClick={playFlip}>
                        <div
                            className="characterHolder"
                            style={{backgroundImage: `url(${waddles})`}}/>
                        <div className='name'>Waddles</div>
                    </div>
                </Tilt>
                <Tilt glareEnable={true} glareMaxOpacity={0.6} glareColor="#ffffff" glarePosition="bottom" glareBorderRadius="20px">
                    <div className='card' onClick={playFlip}>
                        <div
                            className="characterHolder"
                            style={{backgroundImage: `url(${mabel})`}} />
                        <div className='name'>Bill</div>
                    </div>
                </Tilt>
            </motion.div>
        </>
    );
}

export default GamePage;