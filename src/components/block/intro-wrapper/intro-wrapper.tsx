import { FC } from "react";
import { Container } from "@/components/ui/elements/container";
import { Img, CustomStyledContainer, TitleMain, SectionIntro } from "./styled";

export const IntroWrapper: FC = () => {
  return (
    <SectionIntro>
      <Container>
        <TitleMain>Main</TitleMain>
      </Container>
      <CustomStyledContainer>
        <Img src="bg-image-main.jpg" alt="Girl with phone seeing." />
      </CustomStyledContainer>
    </SectionIntro>
  );
};
