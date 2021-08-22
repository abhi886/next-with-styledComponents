import Image from "next/image";
import Link from "next/link";
import logo from "../../../public/logo.png";

const Logo = () => {
  return (
    <Link href='/'>
      <a>
        <Image width={75} height={65} src={logo} alt='Picture of the logo' />{" "}
      </a>
    </Link>
  );
};

export default Logo;
