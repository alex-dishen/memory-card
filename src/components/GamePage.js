import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Tilt from 'react-parallax-tilt';
import logo from '../assets/img/logo.png';
import '../styles/GamePage.scss';

function GamePage({
    goBackToStartPage,
    playClick,
    playFlip,
    shuffle,
    getCharactersToPlayWith,
    countScore,
    charactersToPlayWith,
    charactersToDisplay,
    score,
    bestScore,
    setScore,
    setBestScore,
    setCharactersToDisplay,
    setCharactersToPlayWith,
    stateRoundResult
}) {

    const [isFlipped, setIsFlipped] = useState(false);
    const [isClicked, setIsClicked] = useState(false);

    useEffect(() => {
        getCharactersToPlayWith();

        return () => {
            setCharactersToPlayWith([]);
            setScore(0);
            setBestScore(0);
        }
    }, []);

    const handleCardClick = (character) => {
        // Prevents user from multiple clicks while card is flipping
        setIsClicked(true)
        if(isClicked) return

        stateRoundResult(character);
        character.clicked = true;
        setIsFlipped(true)
        playFlip();
        countScore();
        setTimeout(() => {
            shuffle(charactersToPlayWith)
        }, 800);
        setTimeout(() => {
            setIsFlipped(false);
            setIsClicked(false);
            playFlip();
        }, 1300);
    }

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
                    <div>Score: {score}</div>
                    <div>Best score: {bestScore}</div>
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
                        onClick={() => {handleCardClick(character)}}>
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
        <div className='win'>
            <div>You lose!</div>
            <button>Restart</button>
        </div>
        <div className='overlay'></div>
        </>
    );
}

export default GamePage;