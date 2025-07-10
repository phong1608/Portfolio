import { Container } from './styles'
import reactIcon from '../../assets/react-icon.svg'
import linkedin from '../../assets/linkedin.svg'
import githubIcon from '../../assets/github.svg'
import telegram from '../../assets/telegram.svg'

export function Footer() {
  return (
    <Container className="footer">
      
      <div>
        <p>
          This Website was made with <img src={reactIcon} alt="React" />
          {/* <span>❤️</span> */}
        </p>
      </div>
      <div className="social-media">
        <a
          href="www.linkedin.com/in/phong-hoàng-văn-651b62295"
          target="_blank"
          rel="noreferrer"
        >
          <img src={linkedin} alt="Linkedin" />
        </a>
        <a
          href="https://github.com/phong1608/"
          target="_blank"
          rel="noreferrer"
        >
          <img src={githubIcon} alt="GitHub" />
        </a>
        
        <a
          href="https://t.me/phong"
          target="_blank"
          rel="noreferrer"
        > 
          <img src={telegram} alt="telegram" />
        </a>
        
      </div>
    </Container>
  )
}
