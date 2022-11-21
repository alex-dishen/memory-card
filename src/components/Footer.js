import { ReactComponent as Volume } from '../assets/img/volume.svg';
import { ReactComponent as VolumeOff } from '../assets/img/volume_off.svg';
import { ReactComponent as Music } from '../assets/img/music_sign.svg';
import { ReactComponent as MusicOff } from '../assets/img/music_off.svg';
import { ReactComponent as QuestionMark } from '../assets/img/question_mark.svg';
import '../styles/Footer.css'

function Footer({
    isMusicPlaying,
    setIsMusicPlaying,
    isSoundPlaying,
    setIsSoundPlaying,
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
                <button onClick={playClick}>
                    <QuestionMark className='svg'/>
                </button>
            </div>
        </footer>
    );
}

export default Footer;