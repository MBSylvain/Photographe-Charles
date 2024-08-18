import React from "react";

function Contact() {
  return (
    <div className="container h-100">
      <div className="row justify-content-center align-items-center h-100">
       
          <form 
            className="card shadow-lg"
            id="fs-frm"
            name="simple-contact-form"
            accept-charset="utf-8"
            action="https://formspree.io/f/mqazljqn"
            method="post"
          >
            <div className="card-body p-5">
              <h2 className="text-center mb-4">Contactez-moi</h2> 
              <fieldset className="fs-frm-inputs">
                <div className="form-group">
                  <label htmlFor="full-name">Nom</label>
                  <input
                    type="text"
                    name="name"
                    id="full-name"
                    className="form-control"
                    placeholder="First and Last"
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email-address">Votre adresse Email</label>
                  <input
                    type="email"
                    name="_replyto"
                    id="email-address"
                    className="form-control"
                    placeholder="email@domain.tld"
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea
                    rows="5"
                    name="message"
                    id="message"
                    className="form-control"
                    placeholder="Your message here..."
                    required
                  ></textarea>
                </div>
                <input
                  type="hidden"
                  name="_subject"
                  id="email-subject"
                  value="Contact Form Submission"
                />
                <div className="text-center">
                  <button type="submit" className="btn btn-primary">Submit</button>
                </div>
              </fieldset>
            </div>
          </form>
        </div>
      
    </div>
  );
}

export default Contact;