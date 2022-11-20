import { ReactComponent as Sound } from '../assets/img/volume.svg';
import { ReactComponent as Music } from '../assets/img/music_sign.svg';
import { ReactComponent as QuestionMark } from '../assets/img/question_mark.svg';
import '../styles/Footer.css'

function Footer() {
    return (
        <footer>
            <div className="footerContainer">
                <div className="soundSection">
                    <button><Sound className='sound'/></button>
                    <button><Music className='music'/></button>
                </div>
                <button><QuestionMark className='questionMark'/></button>
            </div>
        </footer>
    );
}

export default Footer;