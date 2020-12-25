import React, { useState } from "react";

import Layout from "../components/Layout";
import contactStyles from "./contact.module.scss";

const ContactPage = () => {
  const [Name, setName] = useState("");
  const [Email, setEmail] = useState("");
  const [Message, setMessage] = useState("");
  const [MessageNightWatch, setMessageNightWatch] = useState("");

  const nameState = (e) => {
    setName(e.currentTarget.value);
  };

  const emailState = (e) => {
    setEmail(e.currentTarget.value);
  };
  const messageState = (e) => {
    setMessage(e.currentTarget.value);
  };

  const messageNightWatchState = (e) => {
    setMessageNightWatch(e.currentTarget.value);
  };

  const clearFields = () => {
   if (window.confirm("Are you sure you want to reset all the fields?")) {
      setMessage("")
    setName("");
    setEmail("");
    }
    
  }

  return (
    <Layout>
      <div className="outer">
        <h1>Contact</h1>
        <div>
          <p>
            If you have any questions please don't hesitate to contact me via
            Email:{" "}
            <a href="mailto:mohammedrezq2000@gmail.com">
              mohammedrezq2000@gmail.com
            </a>
            , <br />
            or on Twitter{" "}
            <a href="https://www.twitter.com/mohammedrezq2">@mohammedrezq2</a> I
            would be happy to talk to you.
          </p>
        </div>

        <form name="contect-form" method="post" action="/success" data-netlify="true" onSubmit="submit">
          <fieldset>
            <legend>Contact Form</legend>
            <div>
              <label htmlFor="name">
                <span>Name</span>
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  className={contactStyles.contactName}
                  id="name"
                  value={Name}
                  onChange={nameState}
                />
              </label>
            </div>
            <div>
              <label htmlFor="email">
                <span>Email</span>
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  className={contactStyles.contactEmail}
                  id="email"
                  value={Email}
                  onChange={emailState}
                />
              </label>
            </div>
            <div>
              <label htmlFor="message">
                <textarea
                  rows="5"
                  type="text"
                  name="message"
                  id="message"
                  className={contactStyles.messageTextArea}
                  placeholder="Your Message..."
                  value={Message}
                  onChange={messageState}
                />
              </label>
            </div>
            <input
              type="hidden"
              name="orderNightWatch"
              id="orderNightWatch"
              className={contactStyles.orderNightWatch}
              value={MessageNightWatch}
              onChange={messageNightWatchState}
            />
            <button type="submit">Submit</button>
            <input type="reset" value="Reset" onClick={clearFields} />
          </fieldset>
        </form>
      </div>
    </Layout>
  );
};

export default ContactPage;
