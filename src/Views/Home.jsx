import Menu from "../Components/Menu/Menu";
import Profile from "../Components/Profile/Profile";
import Footer from "../Components/Footer/Footer";
const Home = () => {
    return (
        <div>
            <Menu />
            <div>
                <Profile />
            </div>
            <div>
                <Footer />
            </div>
        </div>
    );
};
export default Home