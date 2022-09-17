import React, { Component } from "react";
import { graphql } from "gatsby";
import PropTypes from "prop-types";

class Post extends Component {
  render() {
    const post = this.props.data.wpPost;

    return (
      <>
        <h1>{post.title}</h1>
        <article dangerouslySetInnerHTML={{ __html: post.content }}></article>
      </>
    );
  }
}

Post.propTypes = {
  data: PropTypes.object.isRequired,
  edges: PropTypes.array,
};

export default Post;

export const postQuery = graphql`
  query($id: String!) {
    wpPost(id: { eq: $id }) {
      title
      content
    }
    site {
      siteMetadata {
        title
        description
      }
    }
  }
`;
