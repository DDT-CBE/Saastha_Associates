import React, { Fragment } from "react";
import "./contact.css"; // Import the CSS file for styling
import phone from "../Assets/icons8-phone-100.png";
import location from "../Assets/icons8-location-100.png";
import mail from "../Assets/icons8-mail-100.png";

const Contact = () => {
  return (
    <Fragment>
      <center>
        <h1 className="heading">We're here to help. Ask away!</h1>
      </center>
      <div className="contact-container">
        <div className="contact-item">
          <div className="icon">
            <a href="https://maps.app.goo.gl/2XbUJm9o5GbuBoyN9?g_st=aw">
              <img src={location} alt="Visit Us" />
            </a>
          </div>
          <a href="https://maps.app.goo.gl/2XbUJm9o5GbuBoyN9?g_st=aw" style={{textDecoration:"none"}}>
            <h3>Click to See Location</h3>
          </a>

          <p className="contact-detail">Thindal, Erode </p>
        </div>

        <div className="contact-item">
          <div className="icon">
            <img src={phone} alt="Call Us" />
          </div>
          <h3>CALL US</h3>
          <p>Sastha Associates Office</p>
          <a href="tel:+919363412625 " className="contact-detail">
            {" "}
            +91 93634 12625{" "}
          </a>{" "}
          <br />
          <a href="tel:+919363412628" className="contact-detail">
            {" "}
            +91 9363412628
          </a>{" "}
          <br />
          <a href="tel:+919444804900" className="contact-detail">
            {" "}
            +91 9444804900
          </a>
        </div>

        <div className="contact-item">
          <div className="icon">
            <img src={mail} alt="Message Us" />
          </div>
          <h3>MAIL US</h3>
          <p className="contact-detail"></p>

          <a
            href="mailto:srisastaassociates@gmail.com"
            className="contact-detail"
          >
            srisastaassociates@gmail.com
          </a> <br />
          <a href="mailto:srisastha.india@gmail.com" className="contact-detail">
            srisastha.india@gmail.com
          </a>
        </div>
      </div>
    </Fragment>
  );
};

export default Contact;
