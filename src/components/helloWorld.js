import styled from "styled-components";
const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: ${(props) => (props.palevioletred ? "palevioletred" : "red")};
`;

const Wrapper = styled.section`
  padding: 4em;
  background: papayawhip;
`;

const HelloWorld = () => {
  return (
    <Wrapper>
      <Title palevioletred>Hello World!</Title>
    </Wrapper>
  );
};

export default HelloWorld;
