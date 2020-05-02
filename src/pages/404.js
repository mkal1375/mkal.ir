import React from "react"
import Container from "../components/Container"
import { Link } from "gatsby"
import SEO from "../components/seo"

const NotFoundPage = () => (
  <Container>
    <SEO title="404: Not found" />
    <h1>گم شدی؟</h1>
    <h2>
      <Link to="/" className="link">
        آره...برگردون منو خونه{" "}
        <span role="img" aria-label="sad face">
          😕
        </span>
      </Link>
    </h2>
  </Container>
)

export default NotFoundPage
