import { useState } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import Link from "next/link";
import logo from "../../../public/logo.png";
import styled from "styled-components";
import ActiveLink from "../shared/ActiveLink";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  const handleClick = (e) => {
    e.preventDefault();
    router.push(href);
  };

  return (
    <Nav>
      <Link href='/'>
        <a>
          <Image width={75} height={65} src={logo} alt='Picture of the logo' />{" "}
        </a>
        {/* <span>Codes</span> */}
      </Link>

      <Hamburger
        onClick={() => {
          setIsOpen(!isOpen);
          console.log(isOpen);
        }}
      >
        <span></span>
        <span></span>
        <span></span>
      </Hamburger>
      <Menu isOpen={isOpen}>
        <ActiveLink href={"/"}>Home</ActiveLink>
        <ActiveLink href={"/about"}>About Me</ActiveLink>
        <ActiveLink href={"/service"}>Services</ActiveLink>
        <ActiveLink href={"/portfolio"}>Portfolio</ActiveLink>
        <ActiveLink href={"/contact"}>Contact </ActiveLink>
        <ActiveLink href={"/blogs"}>Blogs</ActiveLink>
        {/* <Link href={"/service"} passHref>
          <MenuLink onClick={handleClick}> Services </MenuLink>
        </Link>

        <Link href={"/portfolio"} passHref>
          <MenuLink> Portfolio</MenuLink>
        </Link>
        <Link href={"/contact"} passHref>
          <MenuLink> Contact</MenuLink>
        </Link>
        <Link href={"/blogs"} passHref>
          <MenuLink> Blogs</MenuLink>
        </Link> */}
      </Menu>
    </Nav>
  );
};

const Nav = styled.div`
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

  @media (max-width: 768px) {
    display: flex;
  }
`;
const Logo = styled.a`
  color: 47b7da;
  text-decoration: none;
  span{
    font-weight: 600;
    font-sizeL 1.3rem;
  }
`;
const Menu = styled.div`
  display: flex;
  justify-content: space-between;
  align-item: center;
  position: relative;

  @media (max-width: 768px) {
    overflow: hidden;
    flex-direction: column;
    width: 100%;
    max-height: ${({ isOpen }) => (isOpen ? "300px" : "0px")};
    transition: max-height 0.5s ease-in;
  }
`;
const MenuLink = styled.a`
  padding: 1rem 2rem;
  cursor: pointer;
  text-align: center;
  text-transform: uppercase;
  text-decoration: none;
  color: black;
  transition: all 0.3s ease-in;
  font-size: 0.9 rem;
  font-weight: 900;
  &:hover {
    border-top: 0.1875rem solid var(--primary-orange);
    margin-top: 8px;
  }

  @media (max-width: 768px) {
    display: flex;
  }
`;

export default Navbar;
