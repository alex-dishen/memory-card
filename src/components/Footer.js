import { ReactComponent as Volume } from '../assets/img/volume.svg';
import { ReactComponent as VolumeOff } from '../assets/img/volume_off.svg';
import { ReactComponent as Music } from '../assets/img/music_sign.svg';
import { ReactComponent as MusicOff } from '../assets/img/music_off.svg';
import { ReactComponent as QuestionMark } from '../assets/img/question_mark.svg';
import { ReactComponent as Cross } from '../assets/img/cross.svg';
import mabelInfo from '../assets/img/mabel-info.png';
import '../styles/Footer.css'

function Footer({
    isMusicPlaying,
    setIsMusicPlaying,
    isSoundPlaying,
    setIsSoundPlaying,
    isInfoNeeded,
    setIsInfoNeeded,
    playClick }) {
    return (
        <footer>
            <div className="footerContainer">
                <div className="soundSection">
                    <button onClick={() => {
                            playClick();
                            setIsSoundPlaying(!isSoundPlaying)}}>
                                {isSoundPlaying 
                                    ? <Volume className='svg'/>
                                    : <VolumeOff className='svg'/>}
                    </button>
                    <button onClick={() => {
                            setIsMusicPlaying(!isMusicPlaying);
                            playClick()}}>

                                {isMusicPlaying 
                                    ? <Music className='svg'/> 
                                    : <MusicOff className='svg'/>}

                    </button>
                </div>
                <button onClick={() => {
                    setIsInfoNeeded(!isInfoNeeded)
                    playClick();
                }}>
                    {isInfoNeeded 
                        ? <Cross className='svg' />
                        : <QuestionMark className='svg' />}
                </button>
                {isInfoNeeded &&
                          <>
                            <div className="instructions">
                              <div>Don't click on the same card twice!</div>
                              <div>Click on GRAVITY FALLS logo to go back.</div>
                            </div>
                            <img src={mabelInfo} alt="Mabel Info" className='mabelInfo'/>
                          </>
                }
            </div>
        </footer>
    );
}

export default Footer;