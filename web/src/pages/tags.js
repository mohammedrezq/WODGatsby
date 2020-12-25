import React from "react";
import { Link, graphql } from "gatsby";
import kebabCase from "lodash/kebabCase";
import Layout from "../components/Layout";
import tagsStyles from "./tags.module.scss";
import SEO from "../components/SEO";

export const pageQuery = graphql`
  query {
    allMdx(limit: 2000) {
      group(field: frontmatter___tags) {
        fieldValue
        totalCount
      }
    }
  }
`;

const TagsPage = ({ data }) => {
  // console.log(data);

  const {
    allMdx: { group },
  } = data;
  // console.log(group);
  return (
    <>
    <SEO title="All Tags" />
    <Layout>
      <div className={tagsStyles.tagsContainer}>
        <h1>Tags</h1>
        <ul className={tagsStyles.allTagsList}>
          {group.map((tag) => (
            <Link
              key={tag.fieldValue}
              to={`/tags/${kebabCase(tag.fieldValue)}/`}
            >
              <li>
                <span>{tag.fieldValue} ({tag.totalCount})</span>
              </li>
            </Link>
          ))}
        </ul>
      </div>
    </Layout>
    </>
  );
};

export default TagsPage;
