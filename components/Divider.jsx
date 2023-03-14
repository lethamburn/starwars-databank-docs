import styled from "styled-components";
import Image from "next/image";

const list = ["/images/lightsaberblue.webp", "/images/lightsaberred.webp"];

const StyledDiv = styled.div`
  width: 100%;
`;

const Divider = () => {
  return (
    <StyledDiv>
      <Image
        src={list[Math.floor(list.length * Math.random())]}
        alt="Star Wars Divider"
        height={30}
        width={400}
        priority
      />
    </StyledDiv>
  );
};

export default Divider;
