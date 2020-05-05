import React from "react"
import { graphql, Link } from "gatsby"
import Container from "../components/Container"
import SEO from "../components/seo"

export default function BlogPost({ data }) {
  const post = data.markdownRemark
  const date = Intl.DateTimeFormat("fa-ir").format(
    new Date(post.frontmatter.date)
  )
  return (
    <Container maxWidth="800px">
      <SEO
        title={post.frontmatter.title}
        description={post.frontmatter.description}
        keywords={post.frontmatter.keywords}
      />
      <div>
        <div className="post__header">
          <h1>{post.frontmatter.title}</h1>
          <div className="post__header_actions">
            <div>{date}</div>
            <Link to="/til" className="link" style={{ marginRight: "1rem" }}>
              <span role="img" aria-label="back">
                🔙
              </span>
            </Link>
          </div>
        </div>
        <div
          className="markdown-HTML"
          dangerouslySetInnerHTML={{ __html: post.html }}
        />
      </div>
    </Container>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        date
        description
      }
    }
  }
`
