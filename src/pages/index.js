import React from "react"
import Layout from "../components/layout"
import Landing from "../components/landing"
import SEO from "../components/seo"
import Rectangle from "../components/rectangle";
import CardInfo from "../components/card";

const IndexPage = () => (
  <Layout>
      <SEO title="Terradia" />
      <Landing/>
      <Rectangle/>
      <CardInfo/>
  </Layout>
)

export default IndexPage
