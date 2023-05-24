import { FC } from "react";
import { Container } from "@/components/ui/elements/container";
import { Img, CustomStyledContainer, TitleMain, SectionIntro } from "./styled";

export const IntroWrapper: FC = () => {
  return (
    <SectionIntro>
      <Container>
        <TitleMain>Main page</TitleMain>
      </Container>
      <CustomStyledContainer>
        <Img src="/testwork-next/bg-image-main.jpg" alt="Girl with phone seeing." />
      </CustomStyledContainer>
    </SectionIntro>
  );
};