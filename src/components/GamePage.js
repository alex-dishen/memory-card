import logo from '../assets/img/logo.png';
import Tilt from 'react-parallax-tilt';
import { motion } from 'framer-motion';
import { useEffect } from 'react';
import '../styles/GamePage.css';

function GamePage({
    goBackToStartPage,
    playClick,
    playFlip,
    getCharactersToDisplay,
    charactersToDisplay
}) {

    useEffect(() => {
        getCharactersToDisplay();

        return () => {
            charactersToDisplay = [];
        }
    }, []);

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
                    {charactersToDisplay.map(character => {
                        return(
                            <Tilt 
                                glareEnable={true}
                                glareMaxOpacity={0.6}
                                glareColor="#ffffff"
                                glarePosition="bottom"
                                glareBorderRadius="20px"
                                >
                                    <div className='card' onClick={playFlip} key={character.id}>
                                        <div
                                            className="characterHolder"
                                            style={{backgroundImage: `url(${character.src})`}} />
                                        <div className='name'>{character.name}</div>
                                    </div>
                            </Tilt>
                        );
                    })}
                    {/* <div>{`0 / ${charactersToDisplay.length}`}</div> */}
            </motion.div>
        </>
    );
}

export default GamePage;