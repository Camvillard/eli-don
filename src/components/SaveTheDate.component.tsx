import React, { Fragment } from "react"
import { DeuxMilleVingt } from "./DeuxMilleVingt.component"
import { DixNeuf } from "./DixNeuf.component"
import { Heart } from "./Heart.component"
import {
  Credit,
  DetailsContainer,
  MoreInfo,
  SaveTheDateContainer,
  Subtitle,
  SubtitleContainer,
  WeddingDay,
  WeddingDetails,
  WeddingName,
  WeddingNames,
} from "./SaveTheDate.ui"
import { Sept } from "./Sept.component"

export const SaveTheDate = () => {
  return (
    <Fragment>
      <SaveTheDateContainer>
        <SubtitleContainer>
          <Subtitle>marquez</Subtitle>
          <Subtitle>votre</Subtitle>
          <Subtitle>calendrier</Subtitle>
        </SubtitleContainer>

        <DetailsContainer>
          <WeddingDay>
            <DixNeuf />
          </WeddingDay>

          <WeddingDetails>
            <Sept className="sept" />
            <DeuxMilleVingt className="deux-mille-vingt" />
          </WeddingDetails>
        </DetailsContainer>

        <WeddingNames>
          <WeddingName>elizabeth</WeddingName>
          <WeddingName>&</WeddingName>
          <WeddingName>Donevan</WeddingName>
        </WeddingNames>
      </SaveTheDateContainer>

      <MoreInfo>les faire-part suivront au début de l'été !</MoreInfo>
      <Credit>
        mini-site réalisé avec <Heart /> par{" "}
        <a href="https://www.cdltbisou.com">camille v.</a>{" "}
      </Credit>
    </Fragment>
  )
}
