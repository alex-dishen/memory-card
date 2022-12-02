import mabelInfo from '../assets/img/mabel-info.png';
import { motion } from 'framer-motion';

function MabelInfo() {
    const variants = {
        hidden: {
            opacity: 0,
            y: 100,
            transition: {duration: 0.6}
        },
        visible: {
            opacity: 1,
            y: 0,
            transition: {duration: 0.6}
        }
    }
    return (
        <>
            <motion.div className="instructions"
                key='modal'
                variants={variants}
                initial='hidden'
                animate='visible'
                exit='hidden'>
                    <div>Don't click on the same card twice!</div>
                    <div>Click on GRAVITY FALLS logo to go back.</div>
            </motion.div>
            <motion.img
                src={mabelInfo}
                alt="Mabel Info"
                className='mabelInfo'
                variants={variants}
                initial='hidden'
                animate='visible'
                exit='hidden'/>
        </> 
    )
}

export default MabelInfo;