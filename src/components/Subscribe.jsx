import React, { useState } from "react";
import { toast } from "react-toastify";

const Subscribe = () => {
  const [email, setEmail] = useState("");
  async function handleSubmit(e) {
    e.preventDefault();
    setEmail("");
    toast("Thank you for subscribing!", {
      position: toast.POSITION.TOP_LEFT,
    });
  }

  return (
    <div id="contactForm">
      <h2 id="header">
        Stay on top of the latest fantasy book trends. Subscribe to our weekly
        newsletters!
      </h2>
      <div id="form">
        <form>
          <input
            type="text"
            name="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            label="Email"
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

export default Subscribe;
