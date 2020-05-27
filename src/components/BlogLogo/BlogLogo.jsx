import React, { Component } from "react";
import { Link } from "gatsby";
import "./BlogLogo.css";
import blogLogo from "../../../static/images/blog-logo.png" 

class BlogLogo extends Component {
  render() {
    const { url, title } = this.props;
    if (blogLogo) {
      return (
        <Link className="blog-logo" to={url || "/"}>
          {/* style={{ boxShadow: "none" }}> */}
          <img src={blogLogo} alt={title} />
        </Link>
      );
    }
    return null;
  }
}

export default BlogLogo;
