import React from "react";
import Helmet from "react-helmet";
import { graphql } from "gatsby";

export default function Template({ data }) {
  const post = data.markdownRemark;
  return (
    <div className="blog-post-container">
      <Helmet title={`${post.frontmatter.title} - Riadul Hoque`} />
      <div className="blog-post">
        <h1>{post.frontmatter.title}</h1>
        <div
          className="blog-post-content"
          dangerouslySetInnerHTML={{ __html: post.html }}
        />
      </div>
    </div>
  );
}

export const pageQuery = graphql`
  query BlogPostByPath($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        slug
        title
      }
    }
  }
`;
