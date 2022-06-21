import React from "react";
import { AboutInfo, AboutSection, Desc, Dir, Title } from "./style";

export default function About() {
  return (
    <AboutSection>
      <div className="container">
        <AboutInfo>
          <Title>
            This is <span>Me</span>
          </Title>
          <Dir>Creative Director</Dir>
          <Desc>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Atque ipsa
            dicta vitae aliquam reiciendis maiores exercitationem explicabo
            optio repudiandae, quia animi
          </Desc>
          <Desc>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Atque ipsa
            dicta vitae aliquam reiciendis maiores exercitationem explicabo
            optio repudiandae, quia animi
          </Desc>
        </AboutInfo>
      </div>
    </AboutSection>
  );
}
