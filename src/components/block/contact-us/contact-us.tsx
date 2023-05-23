import { FC } from "react";
import Image from "next/image";
import {
  StyledContainer,
  StyledList,
  StyledListItem,
  StyledSubtitle,
} from "./styled";

export const ContactUs: FC = () => {
  const socialList = [
    {
      name: "VK",
      link: "/",
      src: "vk.svg",
    },
    {
      name: "YouTube",
      link: "/setting",
      src: "youtube.svg",
    },
    {
      name: "Telegram",
      link: "/wallet",
      src: "telegram.svg",
    },
  ];

  return (
    <StyledContainer>
      <StyledSubtitle>Contact Us:</StyledSubtitle>
      <StyledList>
        {socialList.map((item) => {
          return (
            <StyledListItem key={item.name}>
              <Image src={item.src} alt={item.name} width={20} height={20} />
            </StyledListItem>
          );
        })}
      </StyledList>
    </StyledContainer>
  );
};
