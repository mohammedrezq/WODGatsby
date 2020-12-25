import React, { useState } from "react";

const ContactForm = () => {

  return (
    <div>
      <h2>Contact Form</h2>
      <form>
        <div>
          <div>
            <label
              htmlFor="firstname"
              aria-label="name-input"
              aria-labelledby="firstname"
            >
              First name
            </label>
          </div>
          <input
            id="firstname"
            type="text"
            name="firstname"
            placeholder="First name"
            aria-label="name-input"
          />
        </div>
        <div>
          <div>
            <label
              htmlFor="lastname"
              aria-label="name-input"
              aria-labelledby="lastname"
            >
              Last name
            </label>
          </div>
          <input
            id="lastname"
            type="text"
            name="lastname"
            placeholder="Last name"
            aria-label="name-input"
          />
        </div>
        <div>
          <div>
            <label
              htmlFor="email"
              aria-label="email-input"
              aria-labelledby="email"
            >
              Email
            </label>
          </div>
          <input
            id="email"
            type="email"
            name="email"
            placeholder="Your email"
            aria-label="email-input"
          />
        </div>
        <div>
          <textarea
            type="text"
            name="message"
            placeholder="Your message"
            aria-label="message-input"
            rows="6"
          />
        </div>
        <button type="submit" value="Submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
