import React, { createContext, useState } from 'react'
const UserContext = createContext({user : null ,setUser : null});

// const { user, setUser } = useContext(UserContext);

// const data = user();

// data.sellerId

// setUser('newdata');

const UserContextProvider = ({ children })=> {

    const [user, setUser] = useState(null);

    const userContextValue = () => {
        return user;
    }

    const setUserContextValue = (val) => {
        console.log("SETTING CONTEXT VALUE >>>>>", val)
        setUser(val);
    }

    return (
        <UserContext.Provider value={{ user: userContextValue, setUser: setUserContextValue }}>
            {children}
        </UserContext.Provider>
    )
} 

export default UserContextProvider;
export { UserContext };