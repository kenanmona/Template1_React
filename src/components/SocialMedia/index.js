import axios from "axios";
import React, { useEffect, useState } from "react";
import { Content, Icon, Info, Social, SocialMediaSection } from "./style";

export default function SocialMedia() {
  const [social, setSocial] = useState([]);
  useEffect(() => {
    axios.get("js/data.json").then((res) => setSocial(res.data.social));
  });

  const SocialM = social.map((s) => {
    return (
      <Content color={s.color} key={s.id}>
        <div>
          <Icon className={s.icon}></Icon>
          <Info>
            <span>{s.title}</span>
            <span>{s.body}</span>
          </Info>
        </div>
      </Content>
    );
  });
  return (
    <SocialMediaSection>
      <Social>{SocialM}</Social>
    </SocialMediaSection>
  );
}
