import mabelInfo from '../assets/img/mabel-info.png';
import { motion } from 'framer-motion';

function MabelInfo() {
    return (
        <>
            <motion.div className="instructions"
                key='modal'
                initial={{opacity: 0, y: 100}}
                animate={{opacity: 1, y: 0}}
                transition={{duration: 0.6}}
                exit={{opacity: 0, y: 100}}>
                    <div>Don't click on the same card twice!</div>
                    <div>Click on GRAVITY FALLS logo to go back.</div>
            </motion.div>
            <motion.img
                src={mabelInfo}
                alt="Mabel Info"
                className='mabelInfo'
                initial={{opacity: 0, y: 100}}
                animate={{opacity: 1, y: 0}}
                transition={{duration: 0.6}}
                exit={{opacity: 0, y: 100}}/>
        </> 
    )
}

export default MabelInfo;