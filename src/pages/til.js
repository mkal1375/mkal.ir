import React from "react"
import { graphql, Link } from "gatsby"
import Container from "../components/Container"
import SEO from "../components/seo"

const jalaliDate = date => {
  date = typeof date == "string" ? new Date(date) : date
  return Intl.DateTimeFormat("fa-ir").format(date)
}

const PostItem = ({ post }) => (
  <div className="til__post">
    <div>{jalaliDate(post.frontmatter.date)}</div>
    <div className="til__post__divider">●</div>
    <div>{post.frontmatter.title}</div>
  </div>
)

const TIL = ({ data }) => {
  return (
    <Container maxWidth="800px">
      <SEO title="امروز چی یاد گرفتم؟" />
      <div className="til__header">
        <h1>امروز یاد گرفتم</h1>
        <Link to="/" className="link">
          <span role="img" aria-label="back">
            🔙
          </span>
        </Link>
      </div>
      <p className="til__description">
        امروز یاد گرفتم یه صفحست که هر روز یادداشت های شخصیم رو توش میذارم...
        چرا؟ چون یه جا تلنبار بشن و بعدا راحت قابل دسترس باشن. البته گفتم شاید
        به درد بقیه هم بخوره 😁
      </p>
      <div style={{ marginTop: "2rem" }}>
        {data.allMarkdownRemark.edges.map(({ node }) => (
          <div>
            <Link className="link" to={`/til/${node.fields.slug}`}>
              <PostItem post={node} />
            </Link>
          </div>
        ))}
      </div>
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
