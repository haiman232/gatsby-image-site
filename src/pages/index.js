import React from "react"
import HeroSection from "../components/HeroSection"
import Image from "../components/image"
import Layout from "../components/layout"
import SEO from "../components/seo"

const SecondPage = () => (
  <Layout>
    <SEO title="Home" />
    <HeroSection />
    <Image />
  </Layout>
)

export default SecondPage
