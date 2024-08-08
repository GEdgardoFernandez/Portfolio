import About from "../Components/About/About";
import Menu from "../Components/Menu/Menu";
import Footer from "../Components/Footer/Footer";
const AboutView = () => {

    return (
        <div>
            <div>
                <Menu />
            </div>
            <About />
            <div>
                <Footer />
            </div>
        </div>
    )
}

export default AboutView;