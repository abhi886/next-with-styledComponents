import styled from "styled-components";
import { Container } from "react-bootstrap";

const ExperienceContainer = styled(Container)`
  flex-direction: row;
`;
const ExperienceWrapper = styled.div`
  height: 100vh;
  margin-top: 100px;
`;
const ExperienceTitle = styled.h3``;

const Experience = () => {
  return (
    <ExperienceContainer>
      <ExperienceWrapper>
        <ExperienceTitle>
          {" "}
          Experience - Content Coming Soon !!!!{" "}
        </ExperienceTitle>
      </ExperienceWrapper>
    </ExperienceContainer>
  );
};

export default Experience;
