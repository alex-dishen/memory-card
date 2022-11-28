import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
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
    const [result, setResult] = useState('');

    useEffect(() => {
        getCharactersToPlayWith();

        return () => {
            setCharactersToPlayWith([]);
            setScore(0);
            setBestScore(0);
            charactersToPlayWith.forEach(character => {
                character.clicked = false;
            });
        }
    }, []);

    const handleCardClick = (character) => {
        // Prevents user from multiple clicks while card is flipping
        setIsClicked(true)
        if(isClicked) return

        countScore();
        setResult(stateRoundResult(character));
        character.clicked = true;
        setIsFlipped(true)
        playFlip();
        setTimeout(() => {
            shuffle(charactersToPlayWith)
        }, 800);
        setTimeout(() => {
            setIsFlipped(false);
            setIsClicked(false);
            playFlip();
        }, 1300);
    }

    const restartTheGame = () => {
        setScore(0);
        getCharactersToPlayWith();
        setResult('');
        charactersToPlayWith.forEach(character => {
            character.clicked = false;
        });
      };

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
            <div className='remainIndicator'>{`${score} / ${charactersToPlayWith.length}`}</div>
        </motion.div>
        <AnimatePresence>
            {result !== '' &&
                <>
                    <motion.div 
                    className={result === 'win' ? 'win' : 'lose'}
                    initial={{opacity: 0}}
                    animate={{opacity: 1}}
                    transition={{duration: 0.7}}
                    exit={{opacity: 0}}
                    >
                        <div>{result === 'win' ? 'You win!' : 'You lose!'}</div>
                        <button onClick={restartTheGame}>Restart</button>
                    </motion.div>
                    <motion.div 
                    initial={{opacity: 0}}
                    animate={{opacity: 0.6}}
                    transition={{duration: 0.7}}
                    exit={{opacity: 0}}
                    className='overlay'>
                    </motion.div>
                </>
            }
        </AnimatePresence>
        </>
    );
}

export default GamePage;