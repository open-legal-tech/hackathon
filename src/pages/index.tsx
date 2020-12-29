import React from "react"
import { Link } from "gatsby"

import { Layout } from "../components/Layout"
import { SEO } from "../components/Seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <Link to="/page-2/">Go to page 2</Link> <br />
  </Layout>
)

export default IndexPage