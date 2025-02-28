import "./Contact_form.css";
import img1 from "../../assets/contact.jpg";

import { IoLocationOutline } from "react-icons/io5";
import { HiOutlineMail } from "react-icons/hi";
import { MdOutlineLocalPhone } from "react-icons/md";

const Contact_form = () => {
  return (
    <>
      <div className="Contact_contanar">
        <div className="Contact_maxwidth">
          <div className="Contact_flex">
            <div>
              <h1>Let's Connect</h1>
              <p>
                FlexiBlog theme comes with a pre-made contact form component.
                You can integrate this form with serverless services such as
                Formspree, Getform, FormKeep and others to receive form
                submissions via email.
              </p>
            </div>
            <div>
              <img
                src={img1}
                style={{
                  width: "300px",
                  height: "300px",
                  borderRadius: "50%",
                  borderBottom: "10px solid #5CAF90 ",
                }}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="service_contaner">
        <div className="service_maxwidth">
          <div className="service_flex">
            <div className="sevice_card">
              <IoLocationOutline
                style={{ color: "#5CAF90", fontSize: "30px" }}
              />
              <h3>Address</h3>
              <p>Barasat Taki Road</p>
            </div>
            <div className="sevice_card">
              <HiOutlineMail style={{ color: "#5CAF90", fontSize: "30px" }} />
              <h3>Email Id</h3>
              <p>debanjan@gmail.com</p>
            </div>
            <div className="sevice_card">
              <MdOutlineLocalPhone
                style={{ color: "#5CAF90", fontSize: "30px" }}
              />
              <h3>Phone No.</h3>
              <p>+91 123456789</p>
            </div>
            {/* <div className="sevice_card">
                   <LiaCcAmazonPay style={{color:"#5CAF90", fontSize:"50px"}}/>
                   <h3>Free Shipping</h3> 
                   <p>Free shipping on all US order or order above $200</p>
                </div> */}
          </div>
        </div>
      </div>
      <div className="con_form">
        <div className="con_form_maxwidth">
          <div className="con_form_flex">
            <div className="input_flex">
              <div>
                <p>Full Name</p>
                <input type="text" placeholder="Full Name" />
              </div>
              <div>
                <p>Email Id</p>
                <input type="email" placeholder="test@gmail.com" />
              </div>
              <div>
                <p>Phone No.</p>
                <input type="text" placeholder="Ph. No." />
              </div>
            </div>
            <div className="contact_area">
              <textarea rows="7" placeholder="Message here....."></textarea>
              <button className="button2"> Submit</button>
            </div>
          </div>
        </div>
        <div>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d58882.484659604!2d88.44121238319944!3d22.722468722375552!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f8a209b5283ced%3A0x4989765a0652bd78!2sBarasat%2C%20Kolkata%2C%20West%20Bengal!5e0!3m2!1sen!2sin!4v1740730343147!5m2!1sen!2sin"
                width="100%"
                height="300"
                style={{border:0}}
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
      </div>
    </>
  );
};
export default Contact_form;
