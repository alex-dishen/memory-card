import { motion } from 'framer-motion';

function GameOver({ restartTheGame, playClick, result}) {
    return (
        <>
            <motion.div 
                className={result === 'win' ? 'win' : 'lose'}
                initial={{opacity: 0}}
                animate={{opacity: 1}}
                transition={{duration: 0.7}}
                exit={{opacity: 0}}
            >
                <div>
                    {result === 'win' ? 'You win!' : 'You lose!'}
                </div>
                <button onClick={ () => {
                    restartTheGame();
                    playClick();
                }}>
                        Restart
                </button>
            </motion.div>
            <motion.div 
                initial={{opacity: 0}}
                animate={{opacity: 0.6}}
                transition={{duration: 0.7}}
                exit={{opacity: 0}}
                className='overlay'>
            </motion.div>
        </>
    )
}

export default GameOver;