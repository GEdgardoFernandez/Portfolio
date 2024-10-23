import About from "../Components/About/About";
import Header from "../Components/Header/Header";
import Footer from "../Components/Footer/Footer";
import styles from "./Home.module.css"
import ParticleBackground from "../Components/Particules/ParticuleBackground";
const AboutView = () => {

    return (
        <div className={styles.home}>
            <ParticleBackground />
            <div>
                <Header />
            </div>
            <About />
            <div>
                <Footer />
            </div>
        </div>
    )
}

export default AboutView;