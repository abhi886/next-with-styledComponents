import { useRouter } from "next/router";
import styled from "styled-components";

function ActiveLink({ children, href }) {
  const router = useRouter();
  const style = {
    // marginRight: 10,
    borderTop:
      router.asPath === href ? "0.1875rem solid var(--primary-orange)" : "",
    marginTop: 10,
  };

  const handleClick = (e) => {
    e.preventDefault();
    router.push(href);
  };

  return (
    <MenuLink href={href} onClick={handleClick} style={style}>
      {children}
    </MenuLink>
  );
}

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
export default ActiveLink;
