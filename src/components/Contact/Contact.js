import React from "react";
import ContactForm from "./ContactForm";
import ReservationForm from "./ReservationForm";
import "./Contact.css";
import Image from "./img1.jpg";

export default function Contact() {
  return (
    <div>
      <div className="contact-container">
        <h1>CONTACT US</h1>
      </div>
      <div className="section-el">
        <h5>BOOK A TABLE</h5>
        <h2>Make A Reservation</h2>
        <p>
          You can book a table online easily in just a minute. Reservations are
          for lunch and dinner, check the availability of your table and book it
          now!
        </p>
        <ReservationForm />
      </div>
      <div className="row" id="row-el2">
        <div className="col" id="Image1">
          {" "}
          <ContactForm />
        </div>
        <div className="col" id="Image">
          <img src={Image} />
        </div>
      </div>
      <div className="row" id="row-el">
        <div className="col">
          <h4>Private Dining</h4>
          <p>Email: info@baume.com </p>
          <p>Phone: +234 8474657912</p>
        </div>
      </div>
    </div>
  );
}
