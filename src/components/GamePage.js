import logo from '../assets/img/logo.png';
import stan from '../assets/img/stan.webp';
import dipper from '../assets/img/dipper.webp';
import ford from '../assets/img/ford.png';
import gideon from '../assets/img/gideon.webp';
import mabel from '../assets/img/bill.webp';
import Tilt from 'react-parallax-tilt'

import '../styles/GamePage.css'

function GamePage({ goBackToStartPage, playClick, playFlip }) {
    return (
        <>
            <header>
                <div className="headerContainer">
                    <img 
                        src={logo}
                        alt="Logo"
                        onClick={() => {goBackToStartPage(); playClick()}}/>
                    <div className="score">
                        <div>Score: 0</div>
                        <div>Best score: 0</div>
                    </div>
                </div>
            </header>
            <div className='playGround'>
                <Tilt glareEnable={true} glareMaxOpacity={0.6} glareColor="#ffffff" glarePosition="bottom" glareBorderRadius="20px">
                    <div className='card' onClick={playFlip}>
                        <div
                            className="characterHolder"
                            style={{backgroundImage: `url(${stan})`}} />
                        <div className='name'>Mabel</div>
                    </div>
                </Tilt>
                <Tilt glareEnable={true} glareMaxOpacity={0.6} glareColor="#ffffff" glarePosition="bottom" glareBorderRadius="20px">
                    <div className='card' onClick={playFlip}>
                        <div
                            className="characterHolder"
                            style={{backgroundImage: `url(${dipper})`}} />
                        <div className='name'>Mabel</div>
                    </div>
                </Tilt>
                <Tilt glareEnable={true} glareMaxOpacity={0.6} glareColor="#ffffff" glarePosition="bottom" glareBorderRadius="20px">
                    <div className='card' onClick={playFlip}>
                        <div
                            className="characterHolder"
                            style={{backgroundImage: `url(${ford})`}} />
                        <div className='name'>Mabel</div>
                    </div>
                </Tilt>
                <Tilt glareEnable={true} glareMaxOpacity={0.6} glareColor="#ffffff" glarePosition="bottom" glareBorderRadius="20px">
                    <div className='card' onClick={playFlip}>
                        <div
                            className="characterHolder"
                            style={{backgroundImage: `url(${gideon})`}} />
                        <div className='name'>Mabel</div>
                    </div>
                </Tilt>
                <Tilt glareEnable={true} glareMaxOpacity={0.6} glareColor="#ffffff" glarePosition="bottom" glareBorderRadius="20px">
                    <div className='card' onClick={playFlip}>
                        <div
                            className="characterHolder"
                            style={{backgroundImage: `url(${mabel})`}} />
                        <div className='name'>Mabel</div>
                    </div>
                </Tilt>
            </div>
        </>
    );
}

export default GamePage;