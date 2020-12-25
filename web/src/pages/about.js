import React from "react";
import Layout from "../components/Layout";
import SEO from '../components/SEO';

const AboutPage = () => {
  return (
    <>
    <SEO title="About" />
    <Layout>
      <div className={`outer`}>
        <h1>AboutPage</h1>
      </div>
    </Layout>
    </>
  );
};

export default AboutPage;
