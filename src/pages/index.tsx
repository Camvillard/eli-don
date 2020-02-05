import React, { Fragment } from "react"
import { GlobalStyles } from "../components/GlobalStyles.component"
import { SaveTheDate } from "../components/SaveTheDate.component"
import { HomepageContainer } from "../components/SaveTheDate.ui"
import SEO from "../components/Seo.component"
import { Shadow } from "../components/Shadow.component"


const IndexPage = () => (
  <HomepageContainer>
    <SEO title="19.09.20" />
    <GlobalStyles />
    <Shadow />
    <SaveTheDate />
  </HomepageContainer>
)

export default IndexPage
