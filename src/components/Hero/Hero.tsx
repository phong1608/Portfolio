import { Container } from "./styles"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import Illustration from "../../assets/illustration.svg"
import Hello from '../../assets/Hello.gif'

const fadeInVariant = {
  hidden: { opacity: 0, y: 40 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay }
  })
}

export function Hero() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <Container id="home" ref={ref}>
      <div className="hero-text">
        <motion.p
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={fadeInVariant}
          custom={0}
        >
          Hello <img src={Hello} alt="Hello" width="20px" />, I'm
        </motion.p>
        <motion.h1
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={fadeInVariant}
          custom={0.2}
        >
          Hoang Van Phong
        </motion.h1>
        <motion.h3
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={fadeInVariant}
          custom={0.4}
        >
          Fullstack Developer
        </motion.h3>

        <motion.a
          href="#contact"
          className="button"
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={fadeInVariant}
          custom={0.8}
        >
          Contact
        </motion.a>
        <motion.div
          className="social-media"
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={fadeInVariant}
          custom={1}
        >
        </motion.div>
      </div>
      <div className="hero-image">
        <motion.img
          src={Illustration}
          alt="Illustration"
          initial={{ opacity: 0, x: 100 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
        />
      </div>
    </Container>
  )
}
