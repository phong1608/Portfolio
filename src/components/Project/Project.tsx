import { Container } from "./styles";
import githubIcon from "../../assets/github.svg"
import externalLink from "../../assets/external-link.svg"
import ScrollAnimation from "react-animate-on-scroll";


export function Project() {
  return (
    <Container id="project">
      <h2>My Projects</h2>
      <div className="projects">

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                <title>Folder</title>
                <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
              </svg>
              <div className="project-links">
                <a href="https://github.com/phong1608/LearnHub" target="_blank" rel="noreferrer">
                  <img src={githubIcon} alt="GitHub" />
                </a>
              </div>
            </header>
            <div className="body">
              <h3>LearnHub: E-Learning platform </h3>
              <p>
                A modern fullstack e-learning platform that allows users to create, manage, and participate in online courses. It supports features such as course management, user authentication and content delivery. The platform is built with a scalable architecture using modern technologies.
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>ExpressJS</li>
                <li>NextJS</li>
                <li>PostgresSQL</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"> <title>Folder</title> <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path> </svg>
              <div className="project-links">
                <a href="https://github.com/phong1608/EShopMicroservices" target="_blank" rel="noreferrer">
                  <img src={githubIcon} alt="Visit site" /></a>

                </div>
            </header>
            <div className="body">
              <h3>EShop: E-Commerce with Microservices</h3>
              <p> An eShop system built with microservices for Catalog, Basket, Discount, and Ordering modules. It uses both NoSQL (DocumentDb, Redis) and relational databases (PostgreSQL, SQL Server). Services communicate via RabbitMQ (event-driven) and are routed through YARP API Gateway. </p>
            </div>
            <footer> <ul className="tech-list"> <li>ASP.NET</li> <li>API Gateway</li> <li>RabbitMQ</li> <li>Redis</li> </ul> </footer>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b " strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><title>Folder</title> <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path> </svg>
              <div className="project-links">
                <a href="https://github.com/phong1608/JobBoardBE" target="_blank" rel="noreferrer">
                  <img src={githubIcon} alt="Visit site" /> </a>
                <a href="" target="_blank" rel="noreferrer">
                  <img src={externalLink} alt="Visit site" /></a>
              </div>
            </header>
            <div className="body">
              <h3>JobBoard: Web applicaton for job listings and applications</h3>
              <p>
                Job Portal is a web application built with ASP.NET for managing job listings, applications, and user profiles.It provides features for both employers and job seekers, including search, filtering, and real-time notifications.The application is deployed on Microsoft Azure for scalable and secure cloud hosting
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>ReactJS</li>
                <li>ASP.NET</li>
                <li>SQL Server</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>


        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b " stroke-width="1" stroke-linecap="round" stroke-linejoin="round" ><title>Folder</title><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
              <div className="project-links">
                <a href="https://github.com/phong1608/Video-Summarization" target="_blank" rel="noreferrer">
                  <img src={githubIcon} alt="Visit site" />
                </a>
                
              </div>
            </header>
            <div className="body">
              <h3>Video Summarizer</h3>
              <p> aAPython-based project that generates concise summaries from video transcripts. It leverages Hugging Face Transformers for natural language processing and FastAPI for building a lightweight web API.</p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>Python</li>
                <li>Whisper</li>
                <li>FastAPI</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>

        

        
      </div>
    </Container>
  );
}