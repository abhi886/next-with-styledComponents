import styled from "styled-components";
import { Container } from "react-bootstrap";

const AboutDiv = styled(Container)`
  flex-direction: row;
`;
const AboutWrapper = styled.div`
  height: 100vh;
  margin-top: 100px;
`;
const AboutTitle = styled.h3``;

const About = () => {
  return (
    <AboutDiv>
      <AboutWrapper>
        <AboutTitle> About:- Content Coming Soon !!!! </AboutTitle>
      </AboutWrapper>
    </AboutDiv>
  );
};

export default About;
