import styled, { keyframes }from "styled-components"
import ResponsiveEmbed from "react-responsive-embed"



const HomePage = () => {
  return (
    <Wrapper>
      <InfiniteScroll>
        Can placebos help? Does sound have the power to process complex
        emotions? Can music give you what you need? Is this even music?
      </InfiniteScroll>
      {/* <InfiniteScroll>
        Can placebos help? Does sound have the power to process complex
        emotions? Can music give you what you need? Is this even music?
      </InfiniteScroll> */}
      <InfiniteScroll2>
        Can placebos help? Does sound have the power to process complex
        emotions? Can music give you what you need? Is this even music?
      </InfiniteScroll2>
      {/* <Div><ResponsiveEmbed style="border: 0; width: 200px; height: 42px;"/></Div> */}
    </Wrapper>
  );
};

const Wrapper = styled.div`

margin-top: 100px;
display: flex;
flex-direction: row;
justify-content: flex-end;


`
const scroll = keyframes`

    from {transform: translateX(0);}
    to {transform: translateX(-4135px);}
    
`;

const InfiniteScroll = styled.div`
display:flex;
width: 100%;
justify-content: flex-end;

  animation: ${scroll} 20s infinite linear;
`

const InfiniteScroll2 = styled.div`
display:flex;
width: 100%;
justify-content: flex-end;
flex-wrap: nowrap;

  animation: ${scroll} 20s infinite linear;
  animation-delay: 10s;
`
// const Scroll = styled.div`
//     display: inline-block;
//     animation: news 20s infinite linear; 
//   `
  
//   @keyframes news {
//     0% {transform: translateX(0);}
//     100% {transform: translateX(-4135px);}
//   }


const Div = styled.div``
export default HomePage