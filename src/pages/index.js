import React from "react"
import { Link } from "gatsby"
import SEO from "../components/seo"
import Container from "../components/Container"

const IndexPage = ({ data }) => (
  <Container>
    <SEO lang="fa" title="خانه" />
    <div className="index-page">
      <div className="information">
        <div>
          <img
            className="information__image"
            src="/static/0ca6ed2cac99c31fec1c6bd255e2ba54/14b42/me.jpg"
            alt="مهدی کلهر"
          />
        </div>
        <div style={{ alignSelf: "end" }}>
          <h1 className="information__title">مهدی کلهر</h1>
          <h2 className="information__subtitle">علاقه‌مند نرم‌افزار</h2>
        </div>
        <div></div>
        <div>
          <ul className="navigation color-gray">
            <li>
              <Link className="link" to="/til">
                امروز یاد گرفتم
              </Link>
            </li>
            <li>
              <Link className="link" to="/about">
                درباره من
              </Link>
            </li>
            <li>
              <Link className="link" to="/projects">
                پروژه ها
              </Link>
            </li>
            <li>
              <a
                className="link"
                target="_blank"
                href="https://virgool.io/@mkal1375"
              >
                وبلاگ
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </Container>
)

export default IndexPage
