import React from "react"
import { graphql, Link } from "gatsby"
import Container from "../components/Container"
import SEO from "../components/seo"

const jalaliDate = date => {
  date = typeof date == "string" ? new Date(date) : date
  return Intl.DateTimeFormat("fa-ir").format(date)
}

const PostItem = ({ post }) => (
  <div style={{ display: "flex" }}>
    <div>{jalaliDate(post.frontmatter.date)}</div>
    <div style={{ margin: "0 1rem" }}>●</div>
    <div>{post.frontmatter.title}</div>
  </div>
)

const TIL = ({ data }) => {
  return (
    <Container maxWidth="800px">
      <SEO title="امروز چی یاد گرفتم؟" />
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <h1>امروز یاد گرفتم</h1>
        <Link to="/" className="link" style={{ marginRight: "1rem" }}>
          <span role="img" aria-label="back">
            🔙
          </span>
        </Link>
      </div>
      <p>
        امروز یاد گرفتم یه صفحست که هر روز یادداشت های شخصیم رو توش میذارم...
        چرا؟ چون یه جا تلنبار بشن و بعدا راحت قابل دسترس باشن. البته گفتم شاید
        به درد بقیه هم بخوره 😁
      </p>
      {data.allMarkdownRemark.edges.map(({ node }) => (
        <div style={{ marginTop: "2rem" }}>
          <Link className="link" to={`/til/${node.fields.slug}`}>
            <PostItem post={node} />
          </Link>
        </div>
      ))}
    </Container>
  )
}

export default TIL

export const query = graphql`
  query {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          frontmatter {
            title
            date
          }
          fields {
            slug
          }
          excerpt
        }
      }
    }
  }
`
