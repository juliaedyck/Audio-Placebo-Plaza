import styled, { keyframes }from "styled-components"
import ResponsiveEmbed from "react-responsive-embed"
// import gold from "../images/gold.jpg"





const HomePage = () => {
  return (
    <Wrapper>
      {/* <Img src={gold} alt="gold"/> */}
      <Img />
      <Div>
        <InfiniteScroll>
          Can placebos help? Does sound have the power to process complex
          emotions? Can music give you what you need? Is this even music?
        </InfiniteScroll>
        <InfiniteScroll2>
          Can placebos help? Does sound have the power to process complex
          emotions? Can music give you what you need? Is this even music? Can
          placebos help?
        </InfiniteScroll2>
      </Div>
    </Wrapper>
  );
};

const Div = styled.div`
width: 100%;
background-color:  #f7c2ce;
height: 50px;
margin-top: 35px;
z-index: 2; 
position: fixed;

`
const Wrapper = styled.div`
width: 100%;
margin-top: 35px;
display: flex;
flex-direction: row;
justify-content: flex-end;
font-family: var(--font-body);
  color: var(--color-blue);
  font-size: 30px;

`
const Img = styled.div`
background-image: url(/images/gold.jpg);
z-index: -1;
height: 100%;
width: 100%;
background-size: contain;
background-position: center;
position: absolute;
top: 9%;

`
const scroll = keyframes`

    0% {transform: translateX(3500px);}
    25%{transform: translateX(2000px)}
    50%{transform: translateX(0px)}
    75%{transform: translateX(-2000px)}
    100% {transform: translateX(-4000px);}


`;

const scroll2 = keyframes`

    0% {transform: translateX(2000px);}
    25%{transform: translateX(0px)}
    50%{transform: translateX(-2000px)}
    75%{transform: translateX(-4000px)}
    100% {transform: translateX(-6000px);}


`;

// const scroll3 = keyframes`


// 0% {transform: translateX(2000px);}
//     25%{transform: translateX(0px)}
//     50%{transform: translateX(-2000px)}
//     75%{transform: translateX(-4000px)}
//     100% {transform: translateX(-6000px);}

// `;

const InfiniteScroll = styled.div`
position: absolute;
background-color:  #f7c2ce;

  width: 150%;

  animation: ${scroll} 30s linear infinite;
`

const InfiniteScroll2 = styled.div`
background-color:  #f7c2ce;

position: absolute;
  width: 150%;

animation: ${scroll2} 30s linear infinite;

`
/* const InfiniteScroll3 = styled.div`
position: absolute;
  width: 200%;

animation: ${scroll3} 20s linear infinite; */

// `


export default HomePage