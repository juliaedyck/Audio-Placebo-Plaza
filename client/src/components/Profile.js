import { useState, useContext, useEffect } from "react";
import styled from "styled-components";
import ResponsiveEmbed from "react-responsive-embed";
import { CurrentUserContext } from "./CurrentUserContext";
import { useParams } from "react-router-dom";
import LoadingSpinner from "./LoadingSpinner";
import ear from "../photos/app_ear.png"
import keyboard from "../photos/app_keyboard.png"
import lips from "../photos/app_lips.png"
import mic from "../photos/app_mic.png"



const Profile = () => {
  const { favourites, setFavourites, currentUser, setCurrentUser } =
    useContext(CurrentUserContext);

  let { profileId } = useParams();
  const [isLoading, setIsLoading] = useState(false);
  const [placebo, setPlacebo] = useState();
  const [placebos, setPlacebos] = useState([]);

  let audio4 = new Audio("/white.mp3");
  let audio5 = new Audio("/pink.mp3");
  let audio6 = new Audio("/brown.mp3");
  const [audio, setAudio] = useState({
    white: audio4,
    pink: audio5,
    brown: audio6,
  });
  const [currentlyPlaying, setCurrentlyPlaying] = useState(null);

  const playPause = (soundname) => {
    if (currentlyPlaying === soundname) {
      audio[currentlyPlaying].pause();
      setCurrentlyPlaying(null);
    } else if (currentlyPlaying) {
      // Pause the song if it is playing
      audio[currentlyPlaying].pause();
      audio[soundname].play();
      setCurrentlyPlaying(soundname);
    } else {
      // Play the song if it is paused
      audio[soundname].play();
      setCurrentlyPlaying(soundname);
    }
  };

  useEffect(() => {
    setIsLoading(true);
    fetch(`/get-profile/${profileId}`)
      .then((res) => res.json())
      .then((data) => {
        setCurrentUser(data.data);
        setIsLoading(false);
      });
  }, [profileId]);

  ////get all placebos and conditionally render on page

  const fetchPlacebos = () => {
    fetch("/get-placebos")
      .then((res) => res.json())
      .then((data) => {
        setPlacebos(data.data);
        setIsLoading(false);
      });
  };

  useEffect(() => {
    setIsLoading(true);
    fetchPlacebos();
  }, [profileId]);

  return (
    <div>
      {isLoading ? (
        <>
          <LoadingSpinner />
        </>
      ) : (
        <Wrapper>
          <ImgWrap>
          <Greeting>Hi {currentUser.firstName}!</Greeting>
        <Img src={ear} alt="ear" />
</ImgWrap>
          <NoiseSound>
            <NoiseWrapper>
              Your noise:
              <Span>
                <Noise onClick={() => playPause(`${currentUser.noise}`)}>
                  {currentUser.noise}
                </Noise>
              </Span>
            </NoiseWrapper>

            <FavSound>
              Your favourite sound: <p>{currentUser.favSound}</p>
              <Span></Span>
            </FavSound>
          </NoiseSound>
          <Div>
            <P> Your Placebos:</P>
            {placebos
              ?.filter((placebo) => {
                return currentUser.favourites.includes(placebo._id);
              })
              .map((placebo, index) => {
                return (
                  <div>
                    <Placebo>
                      <ResponsiveEmbed src={placebo?.url} />
                    </Placebo>
                    {placebo.note && (
                      <Notes>
                        Results:
                        <Results> {placebo?.note}</Results>
                      </Notes>
                    )}
                  </div>
                );
              })}
          </Div>

        </Wrapper>
      )}
    </div>
  );
};

const Img =styled.img`
height: 400px;
padding-left: 30px;
/* z-index: -1;
margin-left: 200px; */
`

const ImgWrap = styled.div`
display: flex;
flex-direction: column;
align-items: center;
`
const Noise = styled.div`
  color: #336699;
  font-family: var(--font-heading);
  text-decoration: none;
  outline: none;
  font-size: 30px;
  &:hover {
    color: #669966;
  }
`;
const Results = styled.div`
  margin-top: 20px;
  margin-bottom: 20px;
  background-color: white;
  border-radius: 16px;
  padding: 10px;
  font-size: 10px;
  height: fit-content;
`;
const Notes = styled.div`
  padding: 5px;
`;
const NoiseSound = styled.div`
  display: flex;
  flex-direction: column;
`;

const Span = styled.span`
  font-size: 20px;
`;

const Wrapper = styled.div`
  font-family: var(--font-body);
  color: var(--color-blue);
  margin-top: 50px;
  /* margin-left: 80px; */
  padding: 20px;
  /* width: 100%; */
  display: flex;
  flex-direction: row;
  align-items: space-between;
`;
const P = styled.p`
  margin-bottom: 10px;
`;
const Placebo = styled.div`
  min-width: 50px;
  height: 50px;
  width: 600px;
  padding: 0;
  margin: 0;
`;

const Div = styled.div`
  box-shadow: 0px 0px 20px 5px rgba(0, 0, 0, 0.14);
  background-color: var(--color-pink);
  height: fit-content;
  width: 600px;
  border-radius: 30px;
  padding: 80px;
  margin-left: 40px;
  margin-top: 50px;
`;

const Greeting = styled.div`
  background-color: var(--color-pink);
  box-shadow: 0px 0px 20px 5px rgba(0, 0, 0, 0.14);

  height: 100px;
  width: 100px;
  border-radius: 20%;
  padding: 20px;
  margin-left: 40px;
  margin-top: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const NoiseWrapper = styled.span`
  background-color: var(--color-pink);
  box-shadow: 0px 0px 20px 5px rgba(0, 0, 0, 0.14);

  height: 100px;
  width: 200px;
  border-radius: 25px;
  padding: 20px;
  margin-left: 40px;
  margin-top: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const FavSound = styled.div`
  background-color: var(--color-pink);
  box-shadow: 0px 0px 20px 5px rgba(0, 0, 0, 0.14);

  height: 300px;
  width: 200px;
  border-radius: 25px;
  padding: 20px;
  margin-left: 40px;
  margin-top: 50px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

export default Profile;
