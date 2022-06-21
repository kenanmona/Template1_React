import React from "react";
import { HomeSection, Information, Title, Info, Desc, Button } from "./style";

export default function Home() {
  return (
    <HomeSection>
      <div className="container">
        <Information>
          <Title>Kenan Mona</Title>
          <Info>Creative Team</Info>
          <Desc>
            Iam a professional <span>Front End</span> and creating modern and
            responsive designs to web and mobile. Let us work together. Thank
            you.
          </Desc>
          <Button>Let's Begin</Button>
        </Information>
      </div>
    </HomeSection>
  );
}
