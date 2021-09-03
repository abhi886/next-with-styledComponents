import styled from "styled-components";

export const Button = styled.button`
  width: 150px;
  height: 50px;
  border: ${(props) => (props.border ? props.border : "none")};
  border-radius: 10px;
  color: ${(props) => (props.color ? props.color : "red")};
  text-align: center;
  text-decoration: none;
  font-size: 16px;
  margin-top: ${(props) => (props.marginTop ? props.marginTop : "100px")};
  font-weight: 800;
  text-transform: uppercase;

  a {
    color: var(--primary-orange);
  }
`;

const TestButton = ({ children, color, border, marginTop }) => {
  return (
    <Button color={color} border={border} marginTop={marginTop}>
      {children}
    </Button>
  );
};

export default TestButton;
