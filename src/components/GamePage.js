import Footer from './Footer';
import logo from '../assets/img/logo.png';
import stan from '../assets/img/stan.webp';
import dipper from '../assets/img/dipper.webp';
import ford from '../assets/img/ford.png';
import gideon from '../assets/img/gideon.webp';
import mabel from '../assets/img/bill.webp';

import '../styles/GamePage.css'

function GamePage() {
    return (
        <>
            <header>
                <img src={logo} alt="Logo" />
                <div className="score">
                    <div>Score: 0</div>
                    <div>Best score: 0</div>
                </div>
            </header>
            <div className='playGround'>
                <div className='card'>
                    <div
                        className="characterHolder"
                        style={{backgroundImage: `url(${stan})`}} />
                    <div className='name'>Stan</div>
                </div>
                <div className='card'>
                    <div
                        className="characterHolder"
                        style={{backgroundImage: `url(${dipper})`}} />
                    <div className='name'>Dipper</div>
                </div>
                <div className='card'>
                    <div
                        className="characterHolder"
                        style={{backgroundImage: `url(${ford})`}} />
                    <div className='name'>Ford</div>
                </div>
                <div className='card'>
                    <div
                        className="characterHolder"
                        style={{backgroundImage: `url(${gideon})`}} />
                    <div className='name'>Gideon</div>
                </div>
                <div className='card'>
                    <div
                        className="characterHolder"
                        style={{backgroundImage: `url(${mabel})`}} />
                    <div className='name'>Mabel</div>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default GamePage;