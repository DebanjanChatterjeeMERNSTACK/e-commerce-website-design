import Contact_form from "../componant/contact_form/Contact_form";
import Footer from "../componant/footer/Footer";
import Main_header from "../componant/main-header/Main_header";
import Menu from "../componant/menu/Menu";
import Top_header from "../componant/top-header/Top_header";

const Contact =()=>{

    return(
        <>
          <Top_header/>
          <Main_header/>
          <Menu/>
          <Contact_form/>
          <Footer/>
        </>
    )
}
export default Contact;