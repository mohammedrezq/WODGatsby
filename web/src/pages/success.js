import React from "react";
import { Link } from "gatsby";
import Layout from "../components/Layout";
import SEO from "../components/SEO";

const SuccessPage = () => {
  return (
    <>
    <SEO title="Message Success" />
    <Layout>
      <div className="outer">
        <h1>
          Your Message was sent successfully. Go back to{" "}
          <Link to="/">Home Page</Link> or <Link to="/blog/"> Blogs Page</Link>
        </h1>
      </div>
    </Layout>
    </>
  );
};

export default SuccessPage;
