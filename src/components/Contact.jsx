import React, { useState } from "react";
import { toast } from "react-toastify";

const Contact = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    setFirstName("");
    setLastName("");
    setEmail("");
    setMessage("");
    toast(
      "Your request was successfully submitted. Our Support Team will respond within 24 hours."
    );
  }

  return (
    <div id="contactForm">
      <h2 id="header">How can we help?</h2>
      <div id="form">
        <form>
          <input
            type="text"
            name="First-name"
            placeholder="First name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            label="First Name"
          />
          <input
            type="text"
            name="lastName"
            placeholder="Last name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            label="Last Name"
          />
          <input
            type="text"
            name="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            label="Email"
          />
          <input
            type="text"
            name="message"
            placeholder="Message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            label="Message"
          />
        </form>
        <button
          className="contactForm-button"
          onClick={handleSubmit}
          type="submit"
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default Contact;
