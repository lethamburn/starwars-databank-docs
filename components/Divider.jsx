import styled from "styled-components";
import Image from "next/image";

const StyledDiv = styled.div`
  width: 100%;
`;

const Divider = () => {
  return (
    <StyledDiv>
      <Image
        src="/images/divider.png"
        alt="Star Wars Divider"
        height={30}
        width={800}
        priority
      />
    </StyledDiv>
  );
};

export default Divider;
