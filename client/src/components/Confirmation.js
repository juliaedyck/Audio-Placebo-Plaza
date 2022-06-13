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

    const handleNote = ()=> {
      // add a new BE endpoint for adding information on favorite collection

      // call the endpoint by making a new API request
      fetch(`/add-note/${_id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          note: notes,
        })}
    )
    .then((res) => res.json())
    .then((data) => {
        console.log(data)
       })
      // error handling

      // on success, redirect users to homepage

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
  <Wrap>
    <div>Your Audio Placebo: </div>
    
    <PlaceboWrapper>
   

    <span>
    Favourite it to save for later
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
              <button onClick={handleNote}>submit</button>
      <Div><ResponsiveEmbed style="border: 0; width: 200px; height: 42px;" src={placebo?.url} seamless/></Div>
              </PlaceboWrapper>
              </Wrap>
</>
)}
    </>
)

}
const Wrap = styled.div`
margin-top: 30px;
display: flex;
align-items: center;
flex-direction: column;
z-index: -1;
`

const HeartButton = styled.span`
/* z-index: 2; */
max-height: 30px;
`

const Input = styled.input`
  height: 20px;
  width: 125px;
  margin-left: 10px;
`;


const PlaceboWrapper = styled.div`
display: flex;
flex-direction: column;
box-shadow: 0px 0px 20px 5px rgba(0, 0, 0, 0.14);
  background-color: var(--color-pink);
height: 200px;
width: 600px;
border-radius: 30px;
padding: 80px;
margin-top: 50px;
`
const Div = styled.div`
width: 600px;
height: 30px;
z-index: 0;

`




export default Confirmation