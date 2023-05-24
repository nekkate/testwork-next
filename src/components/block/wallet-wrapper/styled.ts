import { section } from "@/components/ui/elements/section";
import styled from "styled-components";
import { ul } from "@/components/ui/elements/ul";
import { title } from "@/components/ui/elements/h1";


export const StyledSection = styled(section)`
margin-bottom: 14%;

@media (max-width: 550px) {
    margin-bottom: 10%;
  };
`


export const StyledUl = styled(ul)`
  display: grid;
  grid-template-rows: repeat(auto, 1fr);
  row-gap: 30px;
  margin-bottom: 30px;
`;


export const TitleMain = styled(title)`
margin-bottom: 40px;
`