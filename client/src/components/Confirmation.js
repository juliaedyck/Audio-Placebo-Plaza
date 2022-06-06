import { useState, useContext } from "react"
import {FcLike} from "react-icons/fc"
import styled from "styled-components";
import {AiOutlineHeart} from "react-icons/ai"
import { CurrentUserProvider } from "./CurrentUserContext";

const Confirmation = ()=> {


// const {favourites, setFavourites} = useContext(CurrentUserContext)
const [isLikedByCurrentUser, setIsLikedByCurrentUser] = useState(false)
const [notes, setNotes] = useState("")


///handlelike function to save placebo in favourites
// const handleLike = () => {
//     setIsLikedByCurrentUser(!isLikedByCurrentUser);
//     setFavourites(array)
// }
// let favouritesArray = [];

// useEffect(() => {
//      favouritesArray.push(
//         fetch(`/api/get-placebo/`)
//           .then((res) => res.json())
//           .then((data) => {
//             return data.data;
//           })
//       );
//     });
//     Promise.all(favouritesArray)
//       .then((data) => handleLike(data))

//       .catch((error) => console.log(error));
//   }, [])


return (
    <>
    Your Audio Placebo: 
    Favourite it to save for later
    
    <div>AUDIO FILE HERE</div>
 
    <HeartButton isLiked={isLikedByCurrentUser} 
    onClick={()=> console.log("click")} 
    >
      {isLikedByCurrentUser ? <FcLike/> : <AiOutlineHeart/>}
      </HeartButton >

<div>
      notes/comments?
      <Input
                type="text"
                placeholder="your notes"
                value={notes}
                onChange={(ev) => setNotes(ev.target.value)}
              />
              </div>
    </>
)

}

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