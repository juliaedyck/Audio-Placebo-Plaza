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
    console.log(currentUser.favourites)
    
     
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
    
    // console.log(currentUser)


    ///fetch placebo from id (favourite id)
    useEffect(() => {
        setIsLoading(true)
        fetch(`/get-placebo/${currentUser.favourites}`)
        .then((res) => res.json())
        .then((data) => {
            console.log(data);
            setPlacebo(data.data.url)
            setIsLoading(false)
            
            
        });
        
    }, [profileId]);

    return (

        <>
        {isLoading ? ("loading") : (
            <div>
        Your audio placebos:
        {/* {currentUser?.favourites?.map((fav) => <p>{fav}</p>)} */}


    <ResponsiveEmbed style="border: 0; width: 100%; height: 42px;" src={placebo} seamless/>

        </div>
        )}
        
        </>
        )
}
export default Profile;