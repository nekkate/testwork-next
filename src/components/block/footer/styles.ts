import styled from "styled-components";
import { Container } from "@/components/ui/elements/container";

export const StyledContainer = styled(Container)`
  display: flex;
`;

export const StyledSection = styled.footer`
  padding: 8px 0 21px 0;
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

export const StyledText = styled.p`
  margin-right: 22%;
  max-width: 600px;
  line-height: ${(props) => props.theme.lineHeightSmall};
  font-size: ${(props) => props.theme.fontSizeSmall};
`;
