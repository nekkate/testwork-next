import Link from "next/link";
import { FC } from "react";
import { NavUl, NavLi } from "./styles";
import { useRouter } from "next/router";
import React from "react";
import { Container } from "@/components/ui/elements/container";

export const NavBar: FC = () => {
  const { pathname } = useRouter();
  const currentRoute = pathname;

  const navLink = [
    {
      name: "Main",
      link: "/",
    },
    {
      name: "Setting",
      link: "/setting",
    },
    {
      name: "Wallet",
      link: "/wallet",
    },
  ];

  return (
    <Container as="nav">
      <NavUl>
        {navLink.map((item) => {
          return (
            <NavLi
              key={item.name}
              className={currentRoute === item.link ? "active" : ""}
            >
              <Link href={item.link}>{item.name}</Link>
            </NavLi>
          );
        })}
      </NavUl>
    </Container>
  );
};
