import styled from "styled-components";
import { Container } from "@/components/ui/elements/container";
import { p } from "@/components/ui/elements/p";

export const StyledContainer = styled(Container)`
  display: flex;
`;

export const StyledSection = styled.footer`
  padding: 10px 0 20px 0;
  position: relative;

  &:before {
    position: absolute;
    content: "";
    background-color: ${(props) => props.theme.colorOrange};
    width: 100%;
    height: 2px;
    top: 0;
  }
`;

export const StyledText = styled(p)`
  margin-right: 14%;
  max-width: 590px;

`;
