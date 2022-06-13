import styled from "styled-components"

import photo from "../photos/064A4457.jpg"




const About =()=> {

    return (
        <Wrapper>
<ImgWrap>
      <Img src={photo} alt="team photo"/>
      </ImgWrap>
<Div>
Audio Placebo Plaza (APP) is Julia E. Dyck, Erin Gee and Vivian Li, a trio of woman-identified and non-gender conforming artists based in Montreal/Tiohtià:ke focused on the expansion of intersectional feminist methods of care, emotional labor, collaboration, and community in sound art. APP considers "placebo" as a complex, open-ended, and optimistic conceptual framework for work that embraces irony, play, and co-performativity in psychosomatic sound art. Through performance and interactivity, APP engages with community members to discuss these topics. 
<Div>Julia E. Dyck is an artist and radio producer originally from Treaty One Territory/Winnipeg who works between Brussels and Montreal/Tiohtià:ke. Dyck's relational and speculative practice explores the possible connections between the body, consciousness, technology and the environment through performance, composition, installation and transmission.
</Div>Erin Gee is an artist/composer based in Montreal/Tiohtià:ke who practices critical approaches to affect, vocality, and unconscious thought. She is a DIY expert in affective biofeedback, incorporating these technologies into vocal composition, networked performance, ASMR, VR, AI and robotics. 
<Div>Vivian Li is a China-born, Montreal/Tiohtià:ke-based multidisciplinary composer and sound artist whose work in hardware synths, voice and sampling emerges from a holistic exploration of our daily surroundings, combining elements of Li’s eastern roots with western influences.
</Div>APP considers "placebo" as a complex, open-ended, and optimistic conceptual framework for performances that embrace irony, play, and co-performativity in psychosomatic sound art. There is limited scientific evidence for sound alone as a healing force, however, there is ample evidence across cultures that points to the power of the human mind as a psychosomatic generator for positive or negative experience. Roleplay is a key element of APP’s work, using art as a means of interrogating criticality, sincerity, gendered acts of care, and also suspension of disbelief. Through performance and interactivity, the trio works with community members to host open discussions about these topics. Our sonic “prescriptions” are not intended to disrupt or replace medical treatment, but they are healthy supplements. Through dedication to psychosomatic resonance, APP arrives at new understandings of electronic sound, mental and physical health.

</Div>
        </Wrapper>
    )
}
const Wrapper = styled.div`
margin-top: 100px;
margin-left:10px;
margin-right: 20px;
padding: 20px;
display: flex;
flex-direction: column;
justify-content: flex-start;
font-family: var(--font-body);
  color: var(--color-blue);

`
const Div = styled.div`
margin-top: 20px;
margin-bottom: 20px;
display: flex;
flex-direction: column;
justify-content: flex-start;
`

const ImgWrap = styled.div`
display: flex;
justify-content: center;
margin-bottom: 20px;
`


const Img = styled.img`
width:600px;
border-radius: 20px;


`
export default About