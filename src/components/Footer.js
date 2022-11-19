import sound from '../assets/img/volume.svg';
import music from '../assets/img/music_sign.svg';
import questionMark from '../assets/img/question_mark.svg';
import '../styles/Footer.css'

function Footer() {
    return (
        <footer>
            <div className="soundSection">
                <button><img src={sound} alt="Sound Sign" /></button>
                <button><img src={music} alt="Music Sign" /></button>
            </div>
            <button><img src={questionMark} alt="Question Mark" /></button>
        </footer>
    );
}

export default Footer;