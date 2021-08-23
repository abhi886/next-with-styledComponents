import Image from "next/image";
import Styled from "styled-components";

const Images = ({ source, width, height }) => {
  return (
    <Image
      src={source}
      height={height}
      width={width}
      alt='Picture of the author'
    />
  );
};

export default Images;
