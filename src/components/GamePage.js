import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Tilt from 'react-parallax-tilt';
import logo from '../assets/img/logo.png';
import '../styles/GamePage.css';

function GamePage({
    goBackToStartPage,
    playClick,
    playFlip,
    getCharactersToPlayWith,
    charactersToPlayWith,
    charactersToDisplay,
    setCharactersToDisplay,
    setCharactersToPlayWith,
    shuffle
}) {

    const [isFlipped, setIsFlipped] = useState(false);
    const [isClicked, setIsClicked] = useState(false);

    useEffect(() => {
        getCharactersToPlayWith();

        return () => {
            setCharactersToPlayWith([]);
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
            <div className='cardSection'>
                {charactersToDisplay.map(character => {
                    return(
                        <div
                        key={character.id}
                        className={isFlipped ? 'card flipped' : 'card'}
                        onClick={() => {
                            if(!isClicked)
                            playFlip();
                            setIsFlipped(true)
                            setTimeout(() => {
                                setIsFlipped(false);
                                playFlip();
                            }, 1300);
                            setTimeout(() => {
                                shuffle(charactersToPlayWith)
                            }, 800)}}>
                            <Tilt
                            glareEnable={true}
                            glareMaxOpacity={0.6}
                            glareColor="#ffffff"
                            glarePosition="bottom"
                            glareBorderRadius="20px"
                            className='tilt'>
                                <div className='cardFace'>
                                    <div
                                        className="characterHolder"
                                        style={{backgroundImage: `url(${character.src})`}} />
                                    <div className='name'>{character.name}</div>
                                </div>
                                <div className='cardBack'></div>
                            </Tilt>
                        </div>
                    );
                })}
            </div>
            <div className='remainIndicator'>{`0 / ${charactersToPlayWith.length}`}</div>
        </motion.div>
        </>
    );
}

export default GamePage;