import React from "react";
import Link from "gatsby-link";
import Helmet from "react-helmet";
import { graphql } from 'gatsby';
import NotFoundPage from './404';
export default function Blog({ data }) {
  console.log(data.allMarkdownRemark);
  const { edges: posts } = data.allMarkdownRemark !== null ? data.allMarkdownRemark : {};
  return (
    <div className="blog-posts">
      <Helmet title={`Blog - Riadul Hoque`} />
      {posts ? posts
        .filter(post => post.node.frontmatter.title.length > 0)
        .map(({ node: post }) => {
          return (
            <div className="blog-post-preview" key={post.id}>
              <h1>
                <Link to={post.frontmatter.path}>{post.frontmatter.title}</Link>
              </h1>
              <h2>{post.frontmatter.date}</h2>
              <p>{post.excerpt}</p>
            </div>
          );
        }) : <NotFoundPage />}
    </div>
  );
}
export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(
      sort: { 
        order: DESC, fields: [frontmatter___date] 
      } 
      filter: { 
        frontmatter: { published: { eq: true }}
    }) {
      edges {
        node {
          excerpt(pruneLength: 250)
          id
          frontmatter {
            title
            date(formatString: "MMMM DD, YYYY")
            path
          }
        }
      }
    }
  }
`;