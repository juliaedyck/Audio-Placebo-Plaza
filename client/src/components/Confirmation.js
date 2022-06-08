import { useState, useContext, useEffect } from "react"
import {FcLike} from "react-icons/fc"
import styled from "styled-components";
import {AiOutlineHeart} from "react-icons/ai"
import { CurrentUserContext } from "./CurrentUserContext";
import ResponsiveEmbed from "react-responsive-embed"
import DryASMR from "./Placebos.js/DryASMR";



const Confirmation = ()=> {

const [placebo, setPlacebo] = useState()
const {favourites, setFavourites} = useContext(CurrentUserContext)
const [isLikedByCurrentUser, setIsLikedByCurrentUser] = useState(false)
const [notes, setNotes] = useState("")



///fetch to getPlacebo **not functional

// useEffect(() => {

  // fetch('https://api.Cloudinary.com/v1_1/:df6wmqnl6/:image/upload')
  //     .then((res) => res.json())
  //     .then((data) => {
  //       console.log(data)
  //       setPlacebo(data);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // }, []);




// /handlelike function to save placebo in favourites
const handleLike = () => {
    setIsLikedByCurrentUser(!isLikedByCurrentUser);
    setFavourites([])
    fetch("/profile/:id", {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          favourites: favourites,

        })}
    )
    .then((res) => res.json())
    .then((data) => {
        console.log(data)
       })
    }

return (
    <>
    <div>Your Audio Placebo: </div>
    Favourite it to save for later
    

    <span>
   
      
        
 
    <HeartButton isLiked={isLikedByCurrentUser} 
    onClick={handleLike} 
    >
      {isLikedByCurrentUser ? <FcLike/> : <AiOutlineHeart/>}
      </HeartButton >
      </span>
<div>
      notes/comments?
      <Input
                type="text"
                placeholder="your notes"
                value={notes}
                onChange={(ev) => setNotes(ev.target.value)}
              />
          <DryASMR />
              </div>
    </>
)

}
const PlaceboContainer = styled.div`

display: flex;
align-items: center;
justify-content: center;
`

const HeartButton = styled.span`
z-index: 2;
max-height: 30px;
`

const Input = styled.input`
  height: 20px;
  width: 125px;
  margin-left: 10px;
`;



export default Confirmation