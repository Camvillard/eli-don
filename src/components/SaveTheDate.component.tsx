import React, { Fragment } from "react"
import { DixNeuf } from "./DixNeuf.component"
import {
  MoreInfo,
  SaveTheDateContainer,
  Subtitle,
  SubtitleContainer,
  WeddingDay,
  WeddingDetails,
  WeddingMonth,
  WeddingName,
  WeddingNames,
  WeddingYear,
} from "./SaveTheDate.ui"
import { Sept } from "./Sept.component"
import { DeuxMilleVingt } from "./DeuxMilleVingt.component"

export const SaveTheDate = () => {
  return (
    <Fragment>
      <SaveTheDateContainer>
        <SubtitleContainer>
          <Subtitle>marquez</Subtitle>
          <Subtitle>votre</Subtitle>
          <Subtitle>calendrier</Subtitle>
        </SubtitleContainer>

        <WeddingDay>
          <DixNeuf />
        </WeddingDay>

        <WeddingDetails>
          <WeddingMonth>
            <Sept />
            <WeddingYear>
              <DeuxMilleVingt />
            </WeddingYear>
          </WeddingMonth>
        </WeddingDetails>

        <WeddingNames>
          <WeddingName>elizabeth</WeddingName>
          <WeddingName>&</WeddingName>
          <WeddingName>Donevan</WeddingName>
        </WeddingNames>
      </SaveTheDateContainer>

      <MoreInfo>les faire-parts suivront dans au début de l'été !</MoreInfo>
    </Fragment>
  )
}
