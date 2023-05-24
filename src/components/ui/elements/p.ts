import styled from "styled-components";

export const p = styled.p`
  font-size: ${(props) => props.theme.fontSizeSmall};
  line-height: ${(props) => props.theme.fontSizeSmall};

  @media (max-width: 550px) {
    font-size: 10px;
    line-height: 12px;
  }
`;
