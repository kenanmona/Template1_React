import axios from "axios";
import React, { useEffect, useState } from "react";
import {
  InfoProfile,
  ProfileContent,
  ProfileSection,
  ProfileTitle,
  Section,
  SectionTitle,
  SkillInfo,
  SkilllPercent,
  SkillsSection,
  SkillTitle,
  Text,
} from "./style";

export default function Profile() {
  const [skills, setSkills] = useState([]);
  useEffect(() => {
    axios.get("js/data.json").then((res) => setSkills(res.data.Profile));
  }, []);

  const ProfileSkills = skills.map((skill) => {
    return (
      <SkillInfo key={skill.id}>
        <SkillTitle>
          <p>{skill.title}</p>
          <p>{skill.perc}</p>
        </SkillTitle>
        <SkilllPercent width={skill.perc}>
          <span></span>
        </SkilllPercent>
      </SkillInfo>
    );
  });
  return (
    <ProfileSection>
      <div className="container">
        <ProfileTitle>
          <span>my </span> Profile
        </ProfileTitle>
        <ProfileContent>
          <Section>
            <InfoProfile>
              <p>
                <span>Name: </span> Kenan Mona
              </p>
              <p>
                <span>Birthday: </span> 4/7/2001
              </p>
              <p>
                <span>Address: </span> Syria, Latakia
              </p>
              <p>
                <span>Phone: </span> +963988683271
              </p>
              <p>
                <span>Email: </span> kenanmona90@gmail.com
              </p>
              <p>
                <span>Website: </span> https://github.com/kenanmona
              </p>
            </InfoProfile>
          </Section>
          <Section>
            <SectionTitle>Some Skills</SectionTitle>
            <Text>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Molestias, magnam! Maiores eveniet nam.
            </Text>
            <SkillsSection>{ProfileSkills}</SkillsSection>
          </Section>
        </ProfileContent>
      </div>
    </ProfileSection>
  );
}
