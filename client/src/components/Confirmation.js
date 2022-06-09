import { useState, useContext, useEffect } from "react"
import {FcLike} from "react-icons/fc"
import styled from "styled-components";
import {AiOutlineHeart} from "react-icons/ai"
import { CurrentUserContext } from "./CurrentUserContext";
import ResponsiveEmbed from "react-responsive-embed"
import DryASMR from "./Placebos.js/DryASMR";
import { useParams } from "react-router-dom";



const Confirmation = ()=> {


const [placebo, setPlacebo] = useState()
const {favourites, setFavourites, currentUser} = useContext(CurrentUserContext)
const [isLikedByCurrentUser, setIsLikedByCurrentUser] = useState(false)
const [notes, setNotes] = useState("")
const [loading, setLoading] = useState("")
const {_id} = useParams()

// console.log(useParams())
console.log(currentUser)
// /handlelike function to save placebo in favourites
const handleLike = () => {
    setIsLikedByCurrentUser(!isLikedByCurrentUser);
    // setPlaceboId(req.params.id)
    setFavourites()
    fetch("/add-like", {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          _id: currentUser._id,
          placeboId: _id,

        })}
    )
    .then((res) => res.json())
    .then((data) => {
        console.log(data)
       })
    }


    useEffect(() => {
      console.log("useEffect")
      setLoading(true)
      fetch(`/get-placebo/${_id}`)
        .then((res) => res.json())
        .then((data) => {
          // console.log(data)
          setPlacebo(data.data);


        setLoading(false)
        })
        .catch((err) => { console.log("error")
        });
    }, []);


return (
<>
{loading ? ("loading") : (
  <>
    <div>Your Audio Placebo: </div>
    <p>Favourite it to save for later</p>
    

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
              </div>
              <Div>
<ResponsiveEmbed style="border: 0; width: 200px; height: 42px;" src={placebo?.url} seamless/></Div>
</>
)}
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



const Div = styled.div`
border: red solid 1px;
height: 50px;
`




export default Confirmation