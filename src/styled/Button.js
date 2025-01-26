import styled from "styled-components";

export const Button = styled.button`
color: white;
padding: 10px 18px;
background: #000000;
border-radius: 5px;
min-width: 220px;
border: none;
font-size: 16px;
transition: 0.5s background ease-in;
cursor: pointer;

&:hover {
  background-color: #7c7171;
  transition: 0.5s background ease-in;
}
`;

export const OutlineButton = styled(Button)`
background-color: white;
border: 1px solid black;
color: black;

&:hover {
  background-color:rgb(0, 0, 0);
  border: 1px solid transparent;
  color: white;
}

`;