import FormContact from "../Components/FormContact/FormContact";
import Menu from "../Components/Menu/Menu";
import Footer from "../Components/Footer/Footer";

const Contact = () => {
    return (
        <div>
            <div>
                <Menu />
            </div>
            <FormContact />
            <div>
                <Footer />
            </div>
        </div>
    )
}   

export default Contact;