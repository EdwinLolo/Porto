import React from "react";
import "./contact.css";

function Contact() {
  return (
    <div className="bungkus py-5">
      <div className="container contact" id="contacts">
        <h1 className="d-flex justify-content-center">Contact</h1>
        <div className="row ">
          <div className="col-sm-12 col-md-6">
            <h2>Contact Me</h2>
            <h4>Edwin Fedora Lolo</h4>
            <p>
              If you have question, suggestion or if you need my help, don't
              hesitate to contact me. I will be glad to help you solve your
              problem
            </p>
            <i className="fa-solid fa-phone">+62-823-8888-8535</i>
            <br />
            <i className="fa-solid fa-envelope">@edwinfedora@gmail.com</i>
          </div>
          <div className="col-sm-12 col-md-6">
            <form action="">
              <div className="group">
                <label for="user" className="label">
                  Full Name
                </label>
                <input
                  id="user"
                  type="text"
                  className="input"
                  name="name"
                  placeholder="Full Name"
                />
              </div>
              <div className="group">
                <label for="pass" className="label">
                  Email
                </label>
                <input
                  id="pass"
                  type="text"
                  className="input"
                  name="email"
                  placeholder="Your Email"
                />
              </div>
              <div className="group">
                <label for="pass" className="label">
                  Message
                </label>
                <input
                  id="pass"
                  type="text"
                  className="input"
                  name="message"
                  placeholder="Your Message"
                />
              </div>
              <div className="group">
                <input type="submit" class="button" />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
