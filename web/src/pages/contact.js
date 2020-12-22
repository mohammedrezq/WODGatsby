import React from "react";
import Layout from "../components/Layout";

const ContactPage = () => {
  return (
    <Layout>
      <div className="outer">
        <h1>Contact</h1>
        <div>
          <p>
            If you have any questions please don't hesitate to contact me via
            Email:{" "}
            <a href="emailto:mohammedrezq2000@gmail.com">
              mohammedrezq2000@gmail.com
            </a>
            , <br />
            or on Twitter{" "}
            <a href="https://www.twitter.com/mohammedrezq2">@mohammedrezq2</a> I
            would be happy to talk to you.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default ContactPage;
