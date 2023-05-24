import styled from "styled-components";
import { section } from "@/components/ui/elements/section";
import { ul } from "@/components/ui/elements/ul";
import { title } from "@/components/ui/elements/h1";


export const TitleMain = styled(title)`
  margin-bottom: 20px;
`;

export const StyledSection = styled(section)`
margin-bottom: 14%;

@media (max-width: 550px) {
    margin-bottom: 10%;
  };
`;

export const StyledContainer = styled.div`
  display: grid;
  background-color: ${(props) => props.theme.colorGainsboro};
  grid-template-columns: 21% 79%;

  @media (max-width: 550px) {
    display: flex;
    flex-direction: column;
  };
`;

export const StyledUl = styled(ul)`
  display: grid;
  grid-template-rows: repeat(auto, 1fr);
  row-gap: 30px;
  margin-bottom: 30px;
`;
