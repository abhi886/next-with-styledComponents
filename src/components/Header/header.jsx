import Typed from "react-typed";
import Link from "next/link";
import styled from "styled-components";
import wallpaper from "../../../public/wall-and-laptop-background.jpg";

import { FaFacebookF, FaGithub, FaLinkedinIn } from "react-icons/fa";

const style = {
  fontSize: "4 rem",
  color: "var(--primary-white)",
  fontSize: "1.5rem",
};

const Home = styled.div`
  position: relative;
  background: url(wall-and-laptop-background.jpg) no-repeat;
  background-size: cover;
  background-position: center;
  height: 90vh;
`;
const MainInfo = styled.div`
  display: flex;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-family: "Roboto Condensed", "sans-serif";
  z-index: 1;
`;

const MainInfoH1 = styled.h1`
  color: var(--primary-orange);
  text-transform: uppercase;
`;

const BtnContactMe = styled.button`
  border: 1px solid var(--primary-red);
  text-transform: uppercase;
  border-radius: 0;
  padding: 0.625rem 0.75rem 0.75rem 0.625rem;
  margin: 2rem;
  background-color: transparent;
  &:hover {
    text-decoration: none;
    background-color: var(--primary-hover-red);
    transition: 0.2s ease-in-out;
    cursor: pointer;
  }

  a {
    color: white;
    text-decoration: none;
  }
`;

const Social = styled.div`
    li {
        display: inline-block;
        margin-left: 10px;
      }
    ul {
        padding: 0px;
      }
     
        color: white;
    
}`;

const Header = () => {
  return (
    <Home>
      <MainInfo>
        <MainInfoH1>HI. I AM ABHISHEKH MAHARJAN</MainInfoH1>
        <Typed
          style={style}
          className='typed-text'
          strings={[
            "Software Engineer",
            "Full Stack Software Developer",
            "Web Developer",
          ]}
          typeSpeed={20}
          backSpeed={40}
          loop
        />
        <BtnContactMe>
          <Link href={"/contact"}>Contact Me</Link>
        </BtnContactMe>
        {/* <Social>
          {" "}
          <ul className=''>
            <li>
              <Link href='/'>
                <FaGithub size={30} />
              </Link>
            </li>
            <li>
              <Link href='/'>
                <FaLinkedinIn size={30} />
              </Link>
            </li>
            <li>
              <Link href='/'>
                <FaFacebookF size={30} />
              </Link>
            </li>
          </ul>
        </Social>{" "} */}
      </MainInfo>
    </Home>
  );
};

export default Header;
