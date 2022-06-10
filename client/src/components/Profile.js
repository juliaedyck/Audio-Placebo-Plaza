import { useState, useContext, useEffect } from "react"
import styled from "styled-components";
import ResponsiveEmbed from "react-responsive-embed"
import { CurrentUserContext } from "./CurrentUserContext";
import { useParams } from "react-router-dom"




const Profile = () => {
    
    const {favourites, setFavourites, currentUser, setCurrentUser} = useContext(CurrentUserContext)
    
    let { profileId }= useParams();
    const [isLoading, setIsLoading] = useState(false)
    const [placebo, setPlacebo] = useState()
    const [placebos, setPlacebos] = useState([])


    
     
    useEffect(() => {
        setIsLoading(true)
        fetch(`/get-profile/${profileId}`)
        .then((res) => res.json())
        .then((data) => {
            setCurrentUser(data.data)
            setIsLoading(false)
            
            
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
    
console.log(currentUser)
console.log(placebos)
    return (
      <Wrapper>
        {isLoading ? (
          "loading"
        ) : (
          <div>
              
            <Greeting>Hi {currentUser.firstName}!</Greeting>
            <NoiseSound>
            <NoiseWrapper>Your noise: <Span> {currentUser.noise}</Span></NoiseWrapper>
            <FavSound>Your favourite sound: <Span> {currentUser.favSound} </Span></FavSound>
            </NoiseSound>
            {placebos
              ?.filter((placebo) => {
                return currentUser.favourites.includes(placebo._id);
              })
              .map((placebo, index) => {
                console.log(placebo);
                return (
                  <Div>
                     <P> Your Placebos:</P>
                    <ResponsiveEmbed src={placebo?.url} />
                  </Div>
                );

                //             if (currentUser.favourites.some((favourite) => favourite === placebo._id)) {

                // return (
                // <PlaceboWrapper key ={currentUser._id}>
                //         Your audio placebos:
                //         {currentUser?.favourites?.map((fav) => <p>{fav}</p>)}

                //     </PlaceboWrapper>
                // )
                // }
                //             })
              })}
          </div>
        )}
      </Wrapper>
    );}

const NoiseSound = styled.div`
display: flex;
flex-direction: column;`


const Span = styled.span`
font-size: 20px;`


const Wrapper = styled.div`
display: flex;
flex-direction: row;
`
const P = styled.p`
margin-bottom: 10px;
`

const Div = styled.div`
  box-shadow: 0px 0px 20px 5px rgba(0, 0, 0, 0.14);
  background-color: var(--color-pink);
height: 200px;
width: 600px;
border-radius: 30px;
padding: 80px;
margin-left: 40px;
margin-top: 50px;
/* display: flex;
align-items: center; */
`

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
align-items:center`

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
align-items: center;`

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
`

export default Profile;