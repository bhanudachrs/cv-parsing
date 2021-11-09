import styled,{keyframes} from "styled-components";

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

export const Spinner = styled.div`
width: 15px;
height: 15px;
border: '3px solid #000';
border-right: '3px solid transparent';
border-left: '3px solid transparent';
border-radius: 50%;
animation: ${rotate} 700ms linear infinite,
`;