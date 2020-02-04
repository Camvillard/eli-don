import React, { Fragment } from "react"
import SEO from "../components/Seo.component"
import { GlobalStyles } from "../components/GlobalStyles.component"
import { SaveTheDate } from "../components/SaveTheDate.component"
import { HomepageContainer } from "../components/SaveTheDate.ui"
import { Shadow } from "../components/Shadow.component"


const IndexPage = () => (
  <HomepageContainer>
    <SEO title="10.09.20" />
    <GlobalStyles />
    <Shadow />
    <SaveTheDate />
  </HomepageContainer>
)

export default IndexPage
