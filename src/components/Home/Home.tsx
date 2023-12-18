import "./Home.css";
import Background from '../../assets/images/homepage-background.png';

function Home() {


    return (
        <div className="home">
            <img className="background-image" src={Background} alt="background" />
            <div className="home-texts">
                <h2 className="headline">Hello, my name is David,</h2>
                <h2 className="headline2">I'm web developer</h2>
                <p>This website is dedicated to show my education and projects</p>
            </div>
        </div>
    )
}

export default Home;
