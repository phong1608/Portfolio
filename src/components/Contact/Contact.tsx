import { Container } from "./styles";
import emailIcon from "../../assets/email-icon.svg";
import phoneIcon from "../../assets/phone-icon.svg"


export function Contact(){

  return(
    <Container id="contact">
      <header>
        <h2>Contact</h2>
      </header>
      <div className="contacts">
        <div>
        <a href="mailto:vinayak@vinayaksingh.com"><img src={emailIcon} alt="Email" /></a> 
          <a href="mailto:vinayak@vinayaksingh.com">hoangvanphong579@gmail.com</a>
        </div>
        <div>
        <a href="tel:+919630576848"><img src={phoneIcon} alt="Phone No" /></a>
          <a href="tel:+919630576848">0911145094</a>
        </div>  
      </div>
    </Container>
  )
}