import './Projects.css'
import WeatherIMG from '../../assets/images/weather.png'
import ToDoIMG from '../../assets/images/todo.png'
import Quiz from '../../assets/images/quiz.png'
import Personal from '../../assets/images/personal.png'
import Rating from '../../assets/images/rating.png'
import Unilab from '../../assets/images/unilab.png'
import Calc from '../../assets/images/calc.png'
import AngPage from '../../assets/images/angpage.png'
import posh from '../../assets/images/poshtravel.png'
import sweeft from '../../assets/images/sweeft.png'

function Projects() {
    const projects = [
        { name: 'Weather', Codelink: 'https://github.com/DavidO28/weather-app/tree/main/src', Livelink: 'https://davido28.github.io/weather-app/', img: WeatherIMG },
        { name: 'To do list', Codelink: 'https://github.com/DavidO28/to-do-list/tree/main/src', Livelink: 'https://davido28.github.io/to-do-list', img: ToDoIMG },
        { name: 'Quiz', Codelink: 'https://github.com/DavidO28/millionaire-quiz/tree/main/src', Livelink: 'https://davido28.github.io/millionaire-quiz', img: Quiz },
        { name: 'Personal site', Codelink: 'https://github.com/DavidO28/Personal-website/tree/main/src', Livelink: 'https://davido28.github.io/Personal-website', img: Personal },
        { name: 'Rating', Codelink: 'https://github.com/DavidO28/interactive-rating/tree/main/src', Livelink: 'https://davido28.github.io/interactive-rating/', img: Rating },
        { name: 'Unilab', Codelink: 'https://github.com/DavidO28/unilab-project/tree/master/src', Livelink: 'https://davido28.github.io/unilab-project/', img: Unilab },
        { name: 'ANG calc', Codelink: 'https://github.com/DavidO28/angular-calculator/tree/main/src', Livelink: 'https://davido28.github.io/angular-calculator/', img: Calc },
        { name: 'ANG Page', Codelink: 'https://github.com/DavidO28/angular-profile-page/tree/main/src', Livelink: 'https://davido28.github.io/angular-profile-page/', img: AngPage },
        { name: 'Poshtravel.ge', Codelink: 'https://github.com/DavidO28/poshtravel.ge', Livelink: 'https://poshtravel.ge', img: posh },
        { name: 'Sweeft', Codelink: 'https://github.com/DavidO28/sweeftDigital-project/tree/main/src', Livelink: 'https://davido28.github.io/sweeftDigital-project/', img: sweeft },
    ];


    return (
        <div className='projects'>
            <div className="project-texts">
                <h2>
                    I have work experience on real projects, as well as on projects for exercising
                </h2>
            </div>
            <div className="projects-box">
                <ul className='projects-ul'>
                    {projects.map((project, i) => (
                        <li key={i} className='project-li'>
                            <h5 className='project-name'>{project.name}</h5>
                            <img className='project-img' src={project.img} />
                            <a className='project-code' target='_blank' href={project.Codelink}>CODE &#8594;</a>
                            <a className='project-live' target='_blank' href={project.Livelink}>LIVE &#8594;</a>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default Projects;