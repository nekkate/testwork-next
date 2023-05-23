import { li } from "@/components/ui/elements/li";
import { ul } from "@/components/ui/elements/ul";
import styled from "styled-components";

export const StyledContainer = styled.div`
display: flex;
flex-direction: column;
margin-right: 5%;
`

export const StyledList = styled(ul)`
  display: flex;
  align-items: center;
`;

export const StyledListItem = styled(li)`
  margin-right: 18px;
  position: relative;
  display: flex;
  align-items: center;

  &:hover {
    opacity: 0.5;
    transform: scale(1.4);
  }
`;

export const StyledSubtitle = styled.p`
  margin-bottom: 17px;
`;