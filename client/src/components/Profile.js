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
            console.log(data);
            setCurrentUser(data.data)
            setIsLoading(false)
            
            
        });
        
    }, [profileId]);
    
    
    
    ///fetch placebo from id (favourite id)
    // useEffect(() => {
    //     setIsLoading(true)
    //     fetch(`/get-placebo/${currentUser.favourites}`)
    //     .then((res) => res.json())
    //     .then((data) => {
    //         console.log(data);
    //         setPlacebo(data.data)
    //         setIsLoading(false)
            
            
    //     });
        
    // }, [profileId]);


    ////get all placebos and conditionally render on page

const fetchPlacebos = () => {
    fetch("/get-placebos")
      .then((res) => res.json())
      .then((data) => {
          console.log(data.data)
        setPlacebos(data.data);
        setIsLoading(false);
      });
  };
  
  useEffect(() => {
    setIsLoading(true);
    fetchPlacebos();
  }, [profileId]);
    
console.log(currentUser)
    return (
        <>
        {isLoading ? ("loading") : (
            <div>
{currentUser.noise}

                {placebos?.filter((placebo) => {
                    return currentUser.favourites.includes(placebo._id)
                }

                ).map((placebo, index) => {
                    console.log(placebo)
                    return (
                        <Div>
<ResponsiveEmbed src={placebo?.url}/>
</Div>
)


//             if (currentUser.favourites.some((favourite) => favourite === placebo._id)) {

// return (
// <PlaceboWrapper key ={currentUser._id}>
//         Your audio placebos:
//         {currentUser?.favourites?.map((fav) => <p>{fav}</p>)}


           
//     </PlaceboWrapper>
// )
// }
//             })
            
            
            }
            )}
        </div>
        
        )
}
        </>
        )}

const PlaceboWrapper = styled.div``

const Div = styled.div`
border: red solid 1px;
height: 50px;
`

export default Profile;