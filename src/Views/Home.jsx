import Menu from "../Components/Menu/Menu";
import Profile from "../Components/Profile/Profile";
import Footer from "../Components/Footer/Footer";
import About from "../Components/About/About";
const Home = () => {

    return (

            <div>
                <Menu />
                <div>
                    <Profile />
                    <About />
                </div>
                <div>
                    <Footer />
                </div>
            </div>
    );
};
export default Home