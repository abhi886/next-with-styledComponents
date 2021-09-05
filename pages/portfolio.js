import styled from "styled-components";
import { Container } from "react-bootstrap";

const PortfolioContainer = styled(Container)`
  flex-direction: row;
`;
const PortfolioWrapper = styled.div`
  height: 100vh;
  margin-top: 100px;
`;
const PortfolioTitle = styled.h3``;

const Portfolio = () => {
  return (
    <PortfolioContainer>
      <PortfolioWrapper>
        <PortfolioTitle> Portfolio </PortfolioTitle>
      </PortfolioWrapper>
    </PortfolioContainer>
  );
};

export default Portfolio;
