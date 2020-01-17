import React, { Fragment } from "react"
import { Link } from "gatsby"
import Layout from "../components/Layout.component"
import SEO from "../components/Seo.component"
import { GlobalStyles } from "../components/GlobalStyles.component"
import { SaveTheDate } from "../components/SaveTheDate.component"
import { HomepageContainer } from "../components/SaveTheDate.ui"


const IndexPage = () => (
  <HomepageContainer>
    <SEO title="Home" />
    <GlobalStyles />
    <SaveTheDate />
  </HomepageContainer>
)

export default IndexPage
