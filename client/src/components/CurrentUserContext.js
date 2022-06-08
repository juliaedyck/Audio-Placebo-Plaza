import { createContext, useEffect, useState, } from "react";



export const CurrentUserContext = createContext(null)

export const CurrentUserProvider = ({ children }) => {

const [firstName, setFirstName]= useState("")
const [currentUser, setCurrentUser] = useState("");
const [loggedIn, setLoggedIn]= useState(false)
const [password, setPassword]= useState("")
const [favourites, setFavourites]= useState([])

useEffect(() => {
  const storedValue = sessionStorage.getItem("name")

    if (storedValue) {
      setLoggedIn(true)
      setCurrentUser(JSON.parse(storedValue))
      // console.log(currentUser, "user")
    }

})

return (
    <CurrentUserContext.Provider value={{currentUser, setCurrentUser, setLoggedIn, loggedIn, password, setPassword, favourites, setFavourites, firstName, setFirstName}}>
        {children}
    </CurrentUserContext.Provider>
);


}