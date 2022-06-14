import styled, { keyframes } from "styled-components";
import ResponsiveEmbed from "react-responsive-embed";

const HomePage = () => {
  return (
    <Wrapper>
      <Img />
      <Div>
        <InfiniteScroll>
          CAN PLACEBOS HELP? DOES SOUND HAVE THE POWER TO PROCESS COMPLEX
          EMOTIONS? CAN MUSIC GIVE YOU WHAT YOU NEED? IS THIS EVEN MUSIC?
        </InfiniteScroll>
        <InfiniteScroll2>
          CAN PLACEBOS HELP? DOES SOUND HAVE THE POWER TO PROCESS COMPLEX
          EMOTIONS? CAN MUSIC GIVE YOU WHAT YOU NEED? IS THIS EVEN MUSIC?
        </InfiniteScroll2>
      </Div>
    </Wrapper>
  );
};

const Div = styled.div`
  width: 100%;
  background-color: #f7c2ce;
  height: 50px;
  margin-top: 35px;
  z-index: 2;
  position: fixed;
  padding-top: 10px;
`;
const Wrapper = styled.div`
  width: 100%;
  margin-top: 35px;

  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  font-family: var(--font-body);
  color: var(--color-blue);
  font-size: 20px;
`;
const Img = styled.div`
  background-image: url(/images/gold.jpg);
  z-index: -1;
  height: 100%;
  width: 100%;
  background-size: contain;
  background-position: center;
  position: absolute;
  top: 9%;
`;
const scroll = keyframes`

    0% {transform: translateX(3500px);}
    25%{transform: translateX(2000px)}
    50%{transform: translateX(0px)}
    75%{transform: translateX(-2000px)}
    100% {transform: translateX(-4000px);}


`;

const scroll2 = keyframes`

    0% {transform: translateX(1000px);}
    25%{transform: translateX(-1000px)}
    50%{transform: translateX(-3000px)}
    75%{transform: translateX(-5000px)}
    100% {transform: translateX(-5000px);}


`;

const InfiniteScroll = styled.div`
  position: absolute;
  background-color: #f7c2ce;
  margin-top: 10px;

  width: 150%;

  animation: ${scroll} 40s linear infinite;
`;

const InfiniteScroll2 = styled.div`
  background-color: #f7c2ce;

  position: absolute;
  width: 150%;
  margin-top: 10px;

  animation: ${scroll2} 40s linear infinite;
`;


export default HomePage;
