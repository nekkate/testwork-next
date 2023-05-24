import { FC } from "react";
import Image from "next/image";
import {
  StyledContainer,
  StyledList,
  StyledListItem,
  StyledSubtitle,
} from "./styled";
import Link from "next/link";

export const ContactUs: FC = () => {
  const socialList = [
    {
      name: "VK",
      link: "https://vk.com/neeekkate",
      src: "vk.svg",
    },
    {
      name: "Telegram",
      link: "https://telegram.org",
      src: "telegram.svg",
    },
    {
      name: "YouTube",
      link: "https://www.instagram.com/",
      src: "youtube.svg",
    },
  ];

  return (
    <StyledContainer>
      <StyledSubtitle>Contact Us:</StyledSubtitle>
      <StyledList>
        {socialList.map((item) => {
          return (
            <StyledListItem key={item.name}>
              <Link href={item.link}>
              <Image src={item.src} alt={item.name} width={20} height={20} /></Link>
            </StyledListItem>
          );
        })}
      </StyledList>
    </StyledContainer>
  );
};
