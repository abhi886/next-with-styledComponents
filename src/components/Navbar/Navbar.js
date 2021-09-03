import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import React from "react";

import styled from "styled-components";
import ActiveLink from "../shared/ActiveLink";
import Logo from "../shared/logo";

const NavContainer = styled.div`
  position: fixed;
  right: 0;
  left: 0;
  top: 0;
  z-index: 1030;
  padding: 0 2rem;
  display: flex;
  justify-content: space-between;
  align-item: center;
  flex-wrap: wrap;
  background: white;
`;
const Hamburger = styled.div`
  flex-direction: column;
  display: none;
  cursor: pointer;
  margin-top: 21px;

  span {
    height: 2px;
    width: 25px;
    background: #7b7fda;
    margin-bottom: 4px;
    border-radius: 5px;
  }

  @media (max-width: 992px) {
    display: flex;
  }
`;

const Menu = styled.div`
  display: flex;
  justify-content: space-between;
  align-item: center;
  position: relative;

  @media (max-width: 992px) {
    overflow: hidden;
    flex-direction: column;
    width: 100%;
    max-height: ${({ isOpen }) => (isOpen ? "326px" : "0px")};
    transition: max-height 0.2s ease-in;
  }
`;

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const linksCounter = [
    { id: 1, href: "/", value: "Home" },
    { id: 2, href: "/about", value: "About" },
    { id: 3, href: "/experience", value: "Experience" },
    { id: 4, href: "/service", value: "Service" },
    { id: 5, href: "/portfolio", value: "Portfolio" },
    { id: 6, href: "/contact", value: "Contact" },
    { id: 7, href: "/vlogs", value: "Blog" },
  ];

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  const handleResize = () => {
    if (window.innerWidth == 920) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <NavContainer>
      <Logo></Logo>
      <Hamburger
        onClick={() => {
          setIsOpen(!isOpen);
        }}
      >
        <span></span>
        <span></span>
        <span></span>
      </Hamburger>

      <Menu isOpen={isOpen}>
        {linksCounter.map((link) => (
          <ActiveLink key={link.id} linkClick={handleClick} href={link.href}>
            {link.value}
          </ActiveLink>
        ))}
      </Menu>
    </NavContainer>
  );
};

export default Navbar;
