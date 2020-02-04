import React, { Fragment } from "react"
import {
  SaveTheDateContainer,
  Subtitle,
  SubtitleContainer,
  WeddingDay,
  WeddingDetails,
  WeddingMonth,
  WeddingName,
  WeddingNames,
  WeddingYear,
  MoreInfo,
} from "./SaveTheDate.ui"

export const SaveTheDate = () => {
  return (
    <Fragment>
      <SaveTheDateContainer>
        <SubtitleContainer>
          <Subtitle>marquez</Subtitle>
          <Subtitle>votre</Subtitle>
          <Subtitle>calendrier</Subtitle>
        </SubtitleContainer>

        <WeddingDay>19</WeddingDay>
        <WeddingDetails>
          <WeddingMonth>sept</WeddingMonth>
          {/* <WeddingYear>2020</WeddingYear> */}
        </WeddingDetails>

        <WeddingNames>
          <WeddingName>elizabeth</WeddingName>
          <WeddingName>&</WeddingName>
          <WeddingName>Donevan</WeddingName>
        </WeddingNames>
      </SaveTheDateContainer>

      <MoreInfo>
        les faire-parts suivront dans au début de l'été !
      </MoreInfo>
    </Fragment>
  )
}
