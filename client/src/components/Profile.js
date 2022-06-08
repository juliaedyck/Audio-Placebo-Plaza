import { useState, useContext, useEffect } from "react"
import styled from "styled-components";
import ResponsiveEmbed from "react-responsive-embed"
import { CurrentUserContext } from "./CurrentUserContext";


const Profile = () => {
    


const {favourites, setFavourites, currentUser,} = useContext(CurrentUserContext)

    return (

        <>
        Your audio placebos:

        </>
    )
}
export default Profile;