import { Container } from "./styles";
import docker from "../../assets/docker.svg";
import aws from "../../assets/aws.svg";
import nodeIcon from "../../assets/node-icon.svg";
import reactIcon from "../../assets/react-icon.svg";
import typescriptIcon from "../../assets/typescript-icon.svg";
import terraform from "../../assets/terraform.svg";

export function About() {
  return (
    <Container id="about">
      <div className="about-text">
        <h2>About me</h2>

        <p>
          I am a Fullstack developer with expertise in Node.js. I have experience in building and deploying scalable, secure and reliable web applications using various frameworks and technologies. I enjoy solving complex problems and learning new skills. I am passionate about creating high-quality code that follows best practices and industry standards. I am always looking for new challenges and opportunities to grow as a developer.
        </p>

       

        <div className="education">
          <h3>Education:</h3>
          <h4>Information Technology</h4>
          <p>National Economics University | October 2021 - June 2025</p>
          <p>GPA 2.9/4.0</p>
        </div>

        <div className="experience">
          <h3>Experience:</h3>
          <h4>Backend Developer</h4>
          <p>
            MCI CONSULTING AND ANALYTICS JOINT STOCK | October 2024 - February
            2025
          </p>
        </div>

        <h3>Here are my main skills:</h3>

        <div className="hard-skills">
          <div className="hability">
            <img src={"https://upload.wikimedia.org/wikipedia/commons/e/ee/.NET_Core_Logo.svg"} alt="asp.net" />
          </div>
          <div className="hability">
            <img src={nodeIcon} alt="Node.js" />
          </div>
          <div className="hability">
            <img src={docker} alt="docker" />
          </div>
          <div className="hability">
            <img src={reactIcon} alt="React" />
          </div>
          <div className="hability">
            <img src={typescriptIcon} alt="TypeScript" />
          </div>
          <div className="hability">
            <img src={terraform} alt="terraform" />
          </div>

          <div className="hability">
            <img src={aws} alt="aws" />
          </div>
          
        </div>
      </div>
    </Container>
  );
}
