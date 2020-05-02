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
      />
      <div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <h1>{post.frontmatter.title}</h1>
          <div>
            <div className="color-gray" style={{ display: "flex" }}>
              <div>{date}</div>
              <Link to="/til" className="link" style={{ marginRight: "1rem" }}>
                <span role="img" aria-label="back">
                  🔙
                </span>
              </Link>
            </div>
          </div>
        </div>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
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
