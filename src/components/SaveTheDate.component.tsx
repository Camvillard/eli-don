import React, { Fragment } from "react"
import {
  SaveTheDateContainer,
  Subtitle,
  SubtitleContainer,
  WeddingDay,
  WeddingMonth,
  WeddingName,
  WeddingNames,
  WeddingYear,
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
        <WeddingMonth>sept</WeddingMonth>
        <WeddingYear>2020</WeddingYear>

        <WeddingNames>
          <WeddingName>elizabeth</WeddingName>
          <WeddingName>&</WeddingName>
          <WeddingName>Donevan</WeddingName>
        </WeddingNames>
      </SaveTheDateContainer>
    </Fragment>
  )
}
