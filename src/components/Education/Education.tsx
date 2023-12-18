import './Education.css'
import Itvet from '../../assets/images/itvet-logo.jpg';
import TSU from '../../assets/images/tsu-logo.png';
import HTML from '../../assets/images/html.png';
import CSS from '../../assets/images/css.svg';
import JS from '../../assets/images/js.webp';
import TS from '../../assets/images/ts.png';
import BOOTSTRAP from '../../assets/images/bootstrap.png';
import GITHUB from '../../assets/images/github.png';
import WORDPRESS from '../../assets/images/wordpress.png';
import REACT from '../../assets/images/react.png';
import ANGULAR from '../../assets/images/angular.svg';

function Education() {
    const images = [
        { img: HTML },
        { img: CSS },
        { img: JS },
        { img: TS },
        { img: BOOTSTRAP },
        { img: GITHUB },
        { img: WORDPRESS },
        { img: REACT },
        { img: ANGULAR },
    ];
    return (
        <div className='education'>
            <div className="skills">
                {images.map((image, i) => (
                    <div key={i} className="cube">
                        <img src={image.img} />
                    </div>
                ))}
            </div>

            <div className="education-texts">
                <h2 className="headline">My education</h2>
                <h3>
                    <img src={TSU} alt="tsu logo" />
                    TSU
                </h3>
                <p className='education-paragraph'>I have studied and graduated from Tbilisi state university, I have always had tendency to like languages and learn them very easily. I have got bachelor's degree in English philology and my level of English is C1.</p>
                <h3>
                    <img src={Itvet} alt="itvet logo" />
                    ITVET
                </h3>
                <p className='education-paragraph'>After graduating, I started studying Web development, because I always liked messing around with computer, technologies was part of my interest from the very childhood.</p>
            </div>
        </div>
    )
}

export default Education;