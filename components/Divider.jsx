import styled from "styled-components";

const list = ["/images/lightsaberblue.webp", "/images/lightsaberred.webp"];

const StyledDiv = styled.div`
  width: 100%;

  img {
    width: 50%;
    height: auto;
  }
`;

const Divider = () => {
  return (
    <StyledDiv>
      <img
        src={list[Math.floor(list.length * Math.random())]}
        alt="Star Wars Divider"
      />
    </StyledDiv>
  );
};

export default Divider;
