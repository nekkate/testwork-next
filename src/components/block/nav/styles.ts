import { li } from "@/components/ui/elements/li";
import { ul } from "@/components/ui/elements/ul";
import styled from "styled-components";

export const NavUl = styled(ul)`
  display: flex;
  justify-content: flex-end;
  margin: 0 auto;
`;

export const NavLi = styled(li)`
  margin-left: 25px;
  color: ${(props) => props.theme.colorOrange};
  position: relative;
  border-bottom-color: ${(props) => props.theme.colorOrange};

  &:hover {
    opacity: 0.8;
  }

  &.active {
    &:after {
      position: absolute;
      content: "";
      bottom: -1px;
      left: 0;
      width: 100%;
      background-color: ${(props) => props.theme.colorOrange};
      height: 2px;
    }
  }
`;
