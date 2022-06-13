import styled, { keyframes }from "styled-components"
import ResponsiveEmbed from "react-responsive-embed"
// import gold from "../images/gold.jpg"





const HomePage = () => {
  return (
    <Wrapper>
    
      {/* <Img src={gold} alt="gold"/> */}
<Img/>
      <InfiniteScroll>
        Can placebos help?                  Does sound have the power to process complex
        emotions?                     Can music give you what you need? Is this even music?
        
      </InfiniteScroll>
      <InfiniteScroll2>
        Can placebos help?                    Does sound have the power to process complex
        emotions?                                    Can music give you what you need? Is this even music?
      </InfiniteScroll2>
      {/* <InfiniteScroll3>
        Can placebos help? Does sound have the power to process complex
        emotions? Can music give you what you need? Is this even music?
      </InfiniteScroll3> */}
      {/* <Div><ResponsiveEmbed style="border: 0; width: 200px; height: 42px;"/></Div> */}
    </Wrapper>
  );
};

const Wrapper = styled.div`
width: 100%;
margin-top: 100px;
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
top: 10%;

`
const scroll = keyframes`

    0% {transform: translateX(4000px);}
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
  width: 150%;

  animation: ${scroll} 30s linear infinite;
`

const InfiniteScroll2 = styled.div`
position: absolute;
  width: 150%;

animation: ${scroll2} 30s linear infinite;

`
/* const InfiniteScroll3 = styled.div`
position: absolute;
  width: 200%;

animation: ${scroll3} 20s linear infinite; */

// `


const Div = styled.div``
export default HomePage