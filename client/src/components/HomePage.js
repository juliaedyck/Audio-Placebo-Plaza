import styled, { keyframes }from "styled-components"
import ResponsiveEmbed from "react-responsive-embed"



const HomePage = () => {
  return (
    <Wrapper>
      <InfiniteScroll>
        Can placebos help? Does sound have the power to process complex
        emotions? Can music give you what you need? Is this even music?
      </InfiniteScroll>
      {/* <Div><ResponsiveEmbed style="border: 0; width: 200px; height: 42px;"/></Div> */}
    </Wrapper>
  );
};

const Wrapper = styled.div`
height: 100%;
width: 100%;


`
const scroll = keyframes`

    from {transform: translateX(0);}
    to {transform: translateX(-4135px);}
    
`;

const InfiniteScroll = styled.div`
display:flex;
justify-content: flex-end;
margin-top: 200px;
  animation: ${scroll} 20s infinite linear;
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