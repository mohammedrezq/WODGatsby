import React from "react";
import { Link } from "gatsby";
import Img from "gatsby-image";

import CardBlogStyle from "./CardBlog.module.scss";

const CardBlog = ({ title, excerpt, date, featureImage, href }) => {
  return (
    <div className={CardBlogStyle.cardContainer}>
      <Link to={href}>
        <div className={CardBlogStyle.headBlog}>
           {featureImage &&<div className={CardBlogStyle.cardImage}>
           <Img fluid={featureImage} />
          </div>}
          <h2>{title}</h2>
        </div>
      </Link>
      <div className={CardBlogStyle.excerptContent}>
        <p>{date}</p>
        <p>{excerpt}</p>
        <div className={CardBlogStyle.readMoreContent}>
          {/* <Link to={href}>Read more...</Link> */}
          <Link to={href}>اقرأ المزيد ...</Link>
        </div>
      </div>
    </div>
  );
};

export default CardBlog;
