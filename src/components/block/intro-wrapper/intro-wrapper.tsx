import { FC } from "react"
import { Container } from "@/components/ui/elements/container"
import { Img, CustomStyledContainer, TitleMain, SectionIntro } from "./styled"

export const IntroWrapper : FC = () => {
return (
    <SectionIntro>
      <Container>
      <TitleMain>Main</TitleMain> 
      </Container>
        <CustomStyledContainer>
        <Img src="/bg-image-main.jpg" alt="Девушка с телефоном смотри в даль." />
        </CustomStyledContainer>
    </SectionIntro>
)
}