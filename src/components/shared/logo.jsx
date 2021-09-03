import React, { useContext } from "react";
import { ThemeContext } from "../../../pages/_app";
import Image from "next/image";
import Link from "next/link";
import logo from "../../../public/logo.png";
import nightLogo from "../../../public/logo_nightMode.png";

const Logo = () => {
  const { state: darkTheme, ontoggleTheme } = useContext(ThemeContext);

  return (
    <Link href='/'>
      <a>
        {darkTheme && (
          <Image
            width={75}
            height={65}
            src={nightLogo}
            alt='Picture of the logo'
          />
        )}
        {!darkTheme && (
          <Image width={75} height={65} src={logo} alt='Picture of the logo' />
        )}
      </a>
    </Link>
  );
};

export default Logo;
