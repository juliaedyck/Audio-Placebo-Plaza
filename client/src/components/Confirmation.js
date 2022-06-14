import { useState, useContext, useEffect } from "react";
import { FcLike } from "react-icons/fc";
import styled from "styled-components";
import { AiOutlineHeart } from "react-icons/ai";
import { CurrentUserContext } from "./CurrentUserContext";
import ResponsiveEmbed from "react-responsive-embed";
import LoadingSpinner from "./LoadingSpinner";
import { useParams } from "react-router-dom";

const Confirmation = () => {
  const [placebo, setPlacebo] = useState();
  const { favourites, setFavourites, currentUser } =
    useContext(CurrentUserContext);
  const [isLikedByCurrentUser, setIsLikedByCurrentUser] = useState(false);
  const [notes, setNotes] = useState("");
  const [loading, setLoading] = useState("");
  const { _id } = useParams();

  // /handlelike function to save placebo in favourites
  const handleLike = () => {
    setIsLikedByCurrentUser(!isLikedByCurrentUser);
    setFavourites();
    fetch("/add-like", {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        _id: currentUser._id,
        placeboId: _id,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
      })
      .catch((err) => {
        console.log("error");
      });
  };

  // handlenote function saves notes to placebo

  const handleNote = () => {
    fetch(`/add-note/${_id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        note: notes,
        _id: currentUser._id,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
      })
      .catch((err) => {
        console.log("error");
      });
  };

  // fetch get Placebo from id in params

  useEffect(() => {
    setLoading(true);
    fetch(`/get-placebo/${_id}`)
      .then((res) => res.json())
      .then((data) => {
        setPlacebo(data.data);

        setLoading(false);
      })
      .catch((err) => {
        console.log("error");
      });
  }, []);

  return (
    <>
      {loading ? (
        <>
          <LoadingSpinner />
        </>
      ) : (
        <>
          <Wrap>
            <div>Your Audio Placebo: </div>

            <PlaceboWrapper>
              <span>
                Favourite it to save for later
                <HeartButton
                  isLiked={isLikedByCurrentUser}
                  onClick={handleLike}
                >
                  {isLikedByCurrentUser ? <FcLike /> : <AiOutlineHeart />}
                </HeartButton>
              </span>
              <LikeComment>
                Notes/Comments?
                <Input
                  type="text"
                  placeholder="your notes"
                  value={notes}
                  onChange={(ev) => setNotes(ev.target.value)}
                />
                <Button onClick={handleNote}>submit</Button>
              </LikeComment>
              <Div>
                <ResponsiveEmbed src={placebo?.url} />
              </Div>
            </PlaceboWrapper>
          </Wrap>
        </>
      )}
    </>
  );
};

const LikeComment = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 15px;
  margin-bottom: 15px;
  align-items: center;
`;
const Button = styled.button`
  font-family: var(--font-body);
  background: #336699;
  height: 30px;
  width: 150px;
  border-radius: 16px;
  border: none;
  cursor: pointer;
  color: #ffff;

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
const Wrap = styled.div`
  margin-top: 30px;
  display: flex;
  align-items: center;
  flex-direction: column;
  z-index: -1;
  font-family: var(--font-body);
  color: var(--color-blue);
`;

const HeartButton = styled.span`
  /* z-index: 2; */
  max-height: 40px;
  font-size: 25px;
  padding: 3px;
`;

const Input = styled.input`
  margin-left: 10px;
  margin-right: 10px;
  height: 27px;
  width: 300px;
  border-radius: 16px;
  border: 2px solid #f7c2ce;
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
`;
const Div = styled.div`
  width: 600px;
  height: 30px;
  z-index: 0;
`;

export default Confirmation;
