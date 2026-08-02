
import React, { useState, createContext, useEffect } from "react";

export const LoginContext = createContext();

const LoginContextProvider = (props) => {

    const [accessToken, setAccessToken] = useState("No access token yet");
    const [storedUserId, setStoredUserId] = useState("No storedUserId yet");
    const [isLoggedIn, setIsLoggedIn] = useState();

    return (
        <>
            <LoginContext.Provider value={{ accessToken, setAccessToken, storedUserId, setStoredUserId, isLoggedIn, setIsLoggedIn }}>
                {props.children}
            </LoginContext.Provider>
        </>
    );
}


export default LoginContextProvider;
