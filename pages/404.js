import Link from "next/link";
import { useEffect } from "react";
import { useRouter } from "next/router";
import styled from "styled-components";
import { Container } from "react-bootstrap";

const NotFoundDiv = styled(Container)`
  background: #fff;
  padding: 30px;
  box-shadow: 1px 3px 5px rgba(0, 0, 0, 0.1);
  transform: rotateZ(-1deg);
  margin-top 300px;
`;

const H1 = styled.h1`
  font-size: 3rem;
`;
const H2 = styled.h2`
  font-size: 3rem;
`;

const Redirect = styled.p`
  font-size: 3rem;
`;
export default function NotFound() {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.push("/");
    }, 4000);
  }, []);
  return (
    <NotFoundDiv>
      <H1>404</H1>
      <H2>Oooops! The page cannot be found :(</H2>
      <Redirect>
        Redirecting to <Link href='/'>Home</Link> for my recent blogs...
      </Redirect>
    </NotFoundDiv>
  );
}
