import React, { createContext, useContext, useState } from "react";

const StateContext = createContext({
    user: null,
    token: null,
    setUser: () => {},
    setToken: () => {},
});

const ContextProvider = ({ children }) => {
    const [user, setUser] = useState({});
    const [token, _setToken] = useState(null);

    const setToken = (token) => {
        _setToken(token);
        if (token) {
            localStorage.addItem("ACCESS TOKEN", token);
        } else {
            localStorage.removeItem("ACCESS TOKEN");
        }
    };

    return (
        <>
            <StateContext.Provider
                value={{
                    user,
                    token,
                    setUser,
                    setToken,
                }}
            >
                {children}
            </StateContext.Provider>
        </>
    );
};

export default ContextProvider;

export const useStateContext = () => useContext(StateContext);
