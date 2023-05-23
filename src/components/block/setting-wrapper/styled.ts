import styled from "styled-components";
import { section } from "@/components/ui/elements/section";
import { ul } from "@/components/ui/elements/ul";

export const StyledSection = styled(section)``;

export const StyledContainer = styled.div`
  display: grid;
  background-color: ${(props) => props.theme.colorGainsboro};
  grid-template-columns: 21% 79%;
`;

export const StyledUl = styled(ul)`
  display: grid;
  grid-template-rows: repeat(auto, 1fr);
  row-gap: 30px;
  margin-bottom: 30px;
`;
