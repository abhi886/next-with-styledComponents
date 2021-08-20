import styled from "styled-components";

const Navbar = () => {
  return (
    <Nav>
      <Logo href=''>
        AM <span>Codes</span>
      </Logo>
      <Hamburger>
        <span></span>
        <span></span>
        <span></span>
      </Hamburger>
      <Menu>
        <MenuLink href=''> Home </MenuLink>
        <MenuLink href=''> About Me</MenuLink>
        <MenuLink href=''> Services</MenuLink>
        <MenuLink href=''> Portfolio</MenuLink>
        <MenuLink href=''> Blogs</MenuLink>
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
  display: flex;
  cursor: pointer;
  margin-top: 21px;

  span {
    height: 2px;
    width: 25px;
    background: #7b7fda;
    margin-bottom: 4px;
    border-radius: 5px;
  }
`;
const Logo = styled.a`
  padding: 1rem 0;
  color: 47b7da;
  text-decoration: none;
  font-weight: 800;
  font-size: 1.7rem;
  span{
    font-weight: 300;
    font-sizeL 1.3rem;
  }
`;
const Menu = styled.a`
  display: flex;
  justify-content: space-between;
  align-item: center;
  position: relative;

  @media (max-width: 768px) {
    overflow: hidden;
    flex-direction: column;
    width: 100%;
  }
`;
const MenuLink = styled.a`
  padding: 1rem 2rem;
  cursor: pointer;
  text-align: center;
  text-decoration: none;
  color: 47b7da;
  transition: all 0.3s ease-in;
  font-size: 0.9 rem;
  &:hover {
    color: 47b7da;
  }
`;

export default Navbar;
