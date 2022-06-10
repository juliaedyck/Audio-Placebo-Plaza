import styled from "styled-components";
import { useState, useContext } from "react";
import { useHistory, Link } from "react-router-dom";
import { CurrentUserContext } from "./CurrentUserContext";
// import {isotones} from ".../client/public/isotones";

const Form = () => {
  //state variables here
  // const [firstName, setFirstName] = useState()
  // const [lastName, setLastName] = useState("");
  // const [email, setEmail] = useState("");
  const [favSound, setFavSound] = useState("");
  const [noise, setNoise] = useState("");
  const [formData, setFormData] = useState("");
  const [calming, setCalming] = useState();
  const [embodied, setEmbodied] = useState();
  const [voices, setVoices] = useState();
  const [playing, setPlaying] = useState(false);
  
  
  const {
    loggedIn,
    setLoggedIn,
    currentUser,
    setCurrentUser,
    password,
    setPassword,
  } = useContext(CurrentUserContext);
  
  const history = useHistory();
  let audio1 = new Audio("/isotones.mp3");
  let audio2 = new Audio("/VLF+short.mp3");
  const [audioElement1, setAudioElement1]= useState(audio1)
  const [audio, setAudio] = useState({isotones: audio1, vlf: audio2})
  const [currentlyPlaying, setCurrentlyPlaying] = useState(null)
  
 




  // let audio = isotones

  // const start1 = () => {
  //   audio1.play();
  // };
  
  const playPause = (soundname) => {
    if (currentlyPlaying === soundname) {
      audio[currentlyPlaying].pause();
      setCurrentlyPlaying(null);

    }
    // Get state of song
    // let isPlaying = this.state.isPlaying;
    else if (currentlyPlaying) {
      // Pause the song if it is playing
      audio[currentlyPlaying].pause();
      audio[soundname].play();
      setCurrentlyPlaying(soundname);

    } else {
      // Play the song if it is paused
      audio[soundname].play();
      setCurrentlyPlaying(soundname);
      console.log("play");
    }
  };

const newWindow = (url) => {
  window.open(url, "newwindow", "width=500,height=350");
  return false;
};



  const handleSubmit = (ev) => {
    ev.preventDefault();

    fetch("/fill-form", {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        _id: currentUser._id,
        noise: noise,
        favSound: favSound,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setCurrentUser(data.data);
      });

    if (embodied === true && voices === false) {
      history.push("/confirmed/62a0a11e5173fa8e3f126f03");
    } else if (embodied === true && voices === true) {
      history.push("/confirmed/62a0f53e21d84c85e88f4b73");
    } else if (voices === true && calming === true) {
      history.push("/confirmed/62a0f30921d84c85e88f4b70");
    } else if (voices === true && calming === true && embodied !== true) {
      history.push("/confirmed/62a253957c8d6e6823eeabb9");
    } else if (voices !== true && calming !== true && embodied !== true) {
      history.push("/confirmed/62a255437c8d6e6823eeabba");
    } else {
      history.push("/confirmed/62a257047c8d6e6823eeabbb");
    }
  };

  const handleChange = (value, name) => {
    setFormData({ ...formData, [name]: value });
  };
  return (
    <Container>
      <TheForm onSubmit={handleSubmit}>
        <Wrapper>
          <Div>
            have you tried any of the following practices? (check all that
            apply)
          </Div>
          <OptionsWrapper>
            <Choice>
              <Input2 type="checkbox" id="soundscapes"  />
              <label for="soundscapes">
                {" "}
                <StyledLink 
                // href="https://en.wikipedia.org/wiki/Soundscape"
                onClick={()=>newWindow("https://en.wikipedia.org/wiki/Soundscape")}
                  target="_blank"
                  // onClick="window.open('https://en.wikipedia.org/wiki/Soundscape','name','width=600,height=400')"
                >
                  soundscapes{" "}
                </StyledLink>{" "}
              </label>
            </Choice>

            <Choice>
              <Input2 type="checkbox" id="nature sounds" />
              <label for="nature sounds">
                <a
                  href="https://www.youtube.com/watch?v=Jll0yqdQclw"
                  target="popup"
                  onClick="window.open('https://www.youtube.com/watch?v=Jll0yqdQclw,'name','width=600,height=400')"
                >
                  nature sounds
                </a>
              </label>
            </Choice>

            <Choice>
              <Input2 type="checkbox" id="isotones" />
              <label for="isotones">
                <div onClick={() => playPause("isotones")}>isochronic tones</div>
              </label>
            </Choice>

            <Choice>
              <Input2 type="checkbox" id="vlf" />
              <label for="vlf">
                <div onClick={() => playPause("vlf")}>astral noise</div>
              </label>
            </Choice>

            <Choice>
              <Input2 type="checkbox" id="MUZAK" />
              <label for="MUZAK">
                <a
                  href="https://en.wikipedia.org/wiki/Muzak"
                  target="popup"
                  onClick="window.open('https://en.wikipedia.org/wiki/Muzak,'name','resizable,width=600,height=400'); return false;"
                >
                  MUZAK
                </a>
              </label>
            </Choice>

            <Choice>
              <Input2 type="checkbox" id="deep listening" />
              <label for="deep listening">
                <a
                  href="https://monoskop.org/images/2/2c/Oliveros_Pauline_Deep_Listening_A_Composers_Sound_Practice_2005.pdf"
                  target="popup"
                  onClick="window.open('https://monoskop.org/images/2/2c/Oliveros_Pauline_Deep_Listening_A_Composers_Sound_Practice_2005.pdf,'name','width=600,height=400')"
                >
                  {" "}
                  deep listening
                </a>
              </label>
            </Choice>

            <Choice>
              <Input2 type="checkbox" id="drones" />
              <label for=" drones"> drone </label>
            </Choice>

            <Choice>
              <Input2 type="checkbox" id="hypnosis" />
              <label for="hypnosis">
                <a
                  href="https://youngascensionhypnosis.bandcamp.com/track/you-cant-fuck-it-up"
                  target="popup"
                  onClick="window.open('https://youngascensionhypnosis.bandcamp.com/track/you-cant-fuck-it-up')"
                >
                  {" "}
                  hypnosis
                </a>
              </label>
            </Choice>

            <Choice>
              <Input2 type="checkbox" id=" sound baths" />
              <label for="sound baths">
                <a
                  href="https://www.healthline.com/health/sound-bath"
                  target="popup"
                  onClick="window.open('https://www.healthline.com/health/sound-bath')"
                >
                  {" "}
                  sound baths
                </a>
              </label>
            </Choice>

            <Choice>
              <Input2 type="checkbox" id="neo gregorian chant" />
              <label for="neo gregorian chant "> neo gregorian chant </label>
            </Choice>

            <Choice>
              <Input2 type="checkbox" id="roleplay " />

              <label for="roleplay">
                <a
                  href="https://en.wikipedia.org/wiki/Role-playing"
                  target="popup"
                  onClick="window.open('https://en.wikipedia.org/wiki/Role-playing')"
                >
                  {" "}
                  roleplay
                </a>
              </label>
            </Choice>

            <Choice>
              <Input2 type="checkbox" id="ASMR" />

              <label for="ASMR">
                <a
                  href="https://www.youtube.com/watch?v=bbPg3Dc68cA"
                  target="popup"
                  onClick="window.open('https://www.youtube.com/watch?v=bbPg3Dc68cA')"
                >
                  {" "}
                  ASMR
                </a>
              </label>
            </Choice>
            <Choice>
              <Input2 type="checkbox" id="laughter yoga" />
              <label for="laughter yoga">
                <a
                  href="https://laughteryoga.org/"
                  target="popup"
                  onClick="window.open('https://laughteryoga.org/')"
                >
                  {" "}
                  laughter yoga
                </a>
              </label>
            </Choice>

            <Choice>
              <Input2 type="checkbox" id="binaural beats" />
              <label for="binaural beats">binaural beats</label>
            </Choice>

            <Choice>
              <Input2 type="checkbox" id="guided meditation" />
              <label for="guided meditation">
                <a
                  href="https://www.youtube.com/watch?v=eg53RoTeOV4&t=6s"
                  target="popup"
                  onClick="window.open('https://www.youtube.com/watch?v=eg53RoTeOV4&t=6s')"
                >
                  {" "}
                  guided meditation{" "}
                </a>
              </label>
            </Choice>
          </OptionsWrapper>
          <ExperienceWrapper>
            <Experience>
            what kind of experience are you seeking?
            <Input2
              type="radio"
              name="experience"
              id="calming"
              onChange={() => setCalming(true)}
              style={{border: "10px solid #EFE5CE"}}
            />
            <label for="calming"> calming </label>
        
            <Input2
              type="radio"
              name="experience"
              id="energizing"
              onChange={() => setCalming(false)}
            />
            <label for="energizing"> energizing </label>
            </Experience>

            <div>

            <Experience>
              Are you seeking an embodied/visceral or cognitage/emotional
              response?
              <Input2
                type="radio"
                name="response"
                id="embodied/visceral"
                onChange={() => setEmbodied(true)}
              />
      

              <label for="embodied/visceral"> embodied/visceral </label>
              <Input2
                type="radio"
                name="response"
                id="cognitage/emotional"
                onChange={() => setEmbodied(false)}
              />
              <label for="cognitage/emotional"> cognitage/emotional </label>
            </Experience>

            </div>
            <div>
            <Experience>

              Would you like one or many voices to directly address you as a
              listener?
              <Input2
                type="radio"
                name="voice"
                id="voices"
                onChange={() => setVoices(true)}
              />
              <label for="voices"> Yes </label>
              <Input2
                type="radio"
                name="voice"
                id="no-voice"
                onChange={() => setVoices(false)}
              />
              <label for="no-voice"> No</label>
            </Experience>

            </div>
          </ExperienceWrapper>
          <NoiseWrapper>
            what is your favourite color of noise?
            <Input2
              type="radio"
              name="color"
              id="white"
              onChange={() => setNoise("white")}
            />
            <label for="white"> white </label>
            <Input2
              type="radio"
              name="color"
              id="pink"
              onChange={() => setNoise("pink")}
            />
            <label for="pink"> pink </label>
            <Input2
              type="radio"
              name="color"
              id="brown"
              onChange={() => setNoise("brown")}
            />
            <label for="brown"> brown </label>
          </NoiseWrapper>
          <Experience>

          Do you have any sonic allergies or have you ever experienced adverse
          reactions to specific sounds?
          <Input type="text" placeholder="" />
          </Experience>
          <Experience>

          Do you have a favorite sound?
          <Input
            type="text"
            placeholder=""
            onChange={(ev) => setFavSound(ev.target.value)}
          />
          </Experience>

        </Wrapper>

        <Button
        // type="submit"
        // disabled={!( firstName && lastName && email && password) ? true : false}
        >
          Confirm
        </Button>
      </TheForm>
    </Container>
  );
};
 const Div = styled.div`
 /* padding: 20px; */
 `

const Choice = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  text-decoration: none;
  color: var(--color-blue);
  &:hover {
    color: var(--color-green);
    transition: 300ms ease-in-out;
  }
`;

// const StyledLink = styled(Link)`
// text-decoration: none;
//   color: var(--color-blue);
//   &:hover {
//     color: var(--color-green);
//     transition: 300ms ease-in-out;
//   }
// `

const StyledLink = styled.a`
text-decoration: none;
  color: var(--color-blue);
  &:hover {
    color: var(--color-green);
    transition: 300ms ease-in-out;
  }
`

const Experience = styled.div`
padding-top: 20px;
padding-bottom: 20px;
display: flex;
align-items: center;

`

const OptionsWrapper = styled.div`
  box-shadow: 0px 0px 
  10px 5px rgba(0, 0, 0, 0.14);

  display: grid;
  justify-content: center;
  grid-template-columns: repeat(3, minmax(250px, 425px));
  grid-template-rows: ${(props) =>
    props.itemslength > 18 ? "repeat(7, minmax(250px, 425px))" : "none"};
  grid-auto-rows: ${(props) => (props.itemslength < 18 ? "auto" : "none")};
  column-gap: 5%;
  row-gap: 1.25%;
  padding: 20px 50px;
  width: auto;
  background-color: var(--color-pink);
  border-radius: 50px;
  margin-top: 20px;
`;

const NoiseWrapper = styled.div`
/* padding: 20px; */
display: flex;
align-items: center;
`;

const ExperienceWrapper = styled.div`

  /* padding: 20px; */
`;

const Input = styled.input`
  height: 20px;
  width: 150px;
  margin-left: 5px;
  border-radius: 20px;
  border: 2px solid #f7c2ce;
  color: #f7c2ce;
`;

const Input2 = styled(Input)`
  width: 175px;
  margin: 5px;
  padding: 10px;
  border-radius: 50px;
  color: 1px solid  var(--color-pink);
  color: #f7c2ce;
  border: 10px solid  #f7c2ce;


`;

const Input3 = styled(Input)`
  display: block;
  margin-top: 10px;
  margin-bottom: 10px;
  width: 425px;
`;

const Wrapper = styled.div`
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
`;

const Container = styled.div`
  margin-top: 10px;
  padding: 40px;
  display: flex;
  flex-direction: column;
  font-family: var(--font-body);
  color: var(--color-blue);
  
`;

const TheForm = styled.form`
  margin-top: 5px;
  display: flex;
  flex-direction: column;
`;

const Button = styled.button`
  font-family: var(--font-heading);
  background: #336699;
  height: 30px;
  width: 200px;
  border-radius: 16px;
  align-self: flex-start;
  border: none;
  cursor: pointer;
  color: #000;
  margin-left: 10px;

  &:hover {
    background: #669966;
    transition: 300ms ease-in-out;
  }

  &:disabled {
    background: #669966;
    cursor: not-allowed;
    transition: none;
  }
`;

const Select = styled.select``;

export default Form;
