import styled from "styled-components";

export const Button = styled.button`
  background-color: ${(props) => props.bgColor};
  width: 150px;
  height: 50px;
  border: none;
  border-radius: 10px;
  color: ${(props) => (props.color ? props.color : "red")};
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin-top: 100px;
`;

const TestButton = ({ children, color, bgColor }) => {
  console.log(bgColor);
  return (
    <Button color={color} bgColor={bgColor}>
      {children}
    </Button>
  );
};

export default TestButton;
