import React, { useState } from "react";
import { useHistory } from "react-router";

const ContactForm = () => {
  const history = useHistory();

  const [contactDetails, setContactDetails] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [formComplete, setFormComplete] = useState(false);

  const formSubmit = (e) => {
    e.preventDefault();

    const { name, email, subject, message } = contactDetails;
    // validation for our form
    if (!email || !name || !subject || !message) {
      setFormComplete(true);
      console.log("One of the forms is empty.");
    } else {
      setFormComplete(false);
      console.log(contactDetails);
      setContactDetails({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
      // push back to homepage after form submission
      history.push("/");
    }
  };

  const changeInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setFormComplete(false);

    setContactDetails({
      ...contactDetails,
      [name]: value,
    });
  };

  return (
    <form className="form" onSubmit={formSubmit}>
      <div className="form-group">
        <h3 className="page__contact__heading animate">Contact Form</h3>
      </div>

      {formComplete && (
        <p style={{ color: "red", margin: "1rem 0" }}>
          Kindly fill all inputs.
        </p>
      )}

      <div className="form-group">
        <input
          type="text"
          name="subject"
          placeholder="subject"
          className="form-group__control animate"
          value={contactDetails.subject}
          onChange={changeInput}
        />
      </div>
      <div className="form-group">
        <input
          type="text"
          name="name"
          placeholder="name"
          className="form-group__control animate"
          value={contactDetails.name}
          onChange={changeInput}
        />
      </div>
      <div className="form-group">
        <input
          type="email"
          name="email"
          placeholder="email"
          className="form-group__control animate"
          value={contactDetails.email}
          onChange={changeInput}
        />
      </div>
      <div className="form-group">
        <textarea
          name="message"
          id=""
          cols="12"
          rows="8"
          className="form-group__textarea animate"
          placeholder="your message here..."
          defaultValue={contactDetails.message}
          onChange={changeInput}
        ></textarea>
      </div>
      <div className="form-group">
        <button type="submit" className="btn-dark animate">
          Message Us
        </button>
      </div>
    </form>
  );
};

export default ContactForm;
