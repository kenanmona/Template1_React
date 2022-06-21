import axios from "axios";
import React, { useEffect, useState } from "react";
import {
  BoxContent,
  Image,
  Overlay,
  OverlaySpan,
  PortfolioBox,
  PortfolioItem,
  PortfolioList,
  PortfolioSection,
  PortfolioTitle,
} from "./style";
export default function Portfolio() {
  const [images, setImages] = useState([]);
  useEffect(() => {
    axios.get("js/data.json").then((res) => setImages(res.data.portfolio));
  }, []);

  const PortfolioImages = images.map((image) => {
    return (
      <BoxContent key={image.id}>
        <Image src={image.image} alt="" />
        <Overlay>
          <OverlaySpan>Show Image</OverlaySpan>
        </Overlay>
      </BoxContent>
    );
  });

  return (
    <PortfolioSection>
      <PortfolioTitle>
        <span>my </span> Portfolio
      </PortfolioTitle>

      <PortfolioList>
        <PortfolioItem>All</PortfolioItem>
        <PortfolioItem>HTML</PortfolioItem>
        <PortfolioItem>Photoshop</PortfolioItem>
        <PortfolioItem>Wordpress</PortfolioItem>
        <PortfolioItem>Mobile</PortfolioItem>
      </PortfolioList>

      <PortfolioBox>{PortfolioImages}</PortfolioBox>
    </PortfolioSection>
  );
}
