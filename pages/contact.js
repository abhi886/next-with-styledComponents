import styled from "styled-components";
import { Container } from "react-bootstrap";

const ContactContainer = styled(Container)`
  flex-direction: row;
`;
const ContactWrapper = styled.div`
  height: 100vh;
  margin-top: 100px;
`;
const ContactTitle = styled.h3``;

const Contact = () => {
  return (
    <ContactContainer>
      <ContactWrapper>
        <ContactTitle> Contact:-) Content Coming Soon !!!! </ContactTitle>
      </ContactWrapper>
    </ContactContainer>
  );
};

export default Contact;
