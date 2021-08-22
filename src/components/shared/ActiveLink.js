import { useRouter } from "next/router";
import Link from "next/link";
import { useState } from "react";
import styled from "styled-components";

function ActiveLink({ children, href, linkClick }) {
  const router = useRouter();
  const style = {
    textColor: router.asPath === href ? "var(--primary-orange)" : "",
    borderBottom:
      router.asPath === href ? "0.1875rem solid var(--primary-orange)" : "",
  };
  return (
    <MenuLink onClick={linkClick} style={style}>
      <Link href={href}>{children}</Link>
    </MenuLink>
  );
}

const MenuLink = styled.div`
  cursor: pointer;
  padding: 1rem 2rem;
  text-align: center;
  &:hover {
    border: 1px solid var(--primary-orange);
  }
  &:focus {
    color: var(--primary-orange);
  }
  a {
    text-decoration: none;

    text-transform: uppercase;

    color: black;
    transition: all 0.2s ease-in-out;
    font-size: 0.9 rem;
    font-weight: 900;
    &:hover {
      color: 1px solid var(--primary-orange);
    }

    @media (max-width: 768px) {
      display: flex;
    }
  }
`;
export default ActiveLink;
