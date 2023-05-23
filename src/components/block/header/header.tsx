import { FC } from "react";
import { NavBar } from "@/components/block/nav/nav";
import { StyledSection } from './styles';

export const Header: FC = () => {
    return (
        <StyledSection as="header">
          <NavBar/>
        </StyledSection>
    )
}