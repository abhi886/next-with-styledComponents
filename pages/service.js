import styled from "styled-components";
import { Container } from "react-bootstrap";

const ServicesContainer = styled(Container)`
  flex-direction: row;
`;
const ServicesWrapper = styled.div`
  height: 100vh;
  margin-top: 100px;
`;
const ServicesTitle = styled.h3``;

const Services = () => {
  return (
    <ServicesContainer>
      <ServicesWrapper>
        <ServicesTitle> Services:-) Content Coming Soon !!!! </ServicesTitle>
      </ServicesWrapper>
    </ServicesContainer>
  );
};

export default Services;
