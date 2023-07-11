import React,{createContext ,useContext ,useReducer} from "react";

//prepares the data layer
export const StateContext = createContext();

//wrap our app
export const StateProvider = ({reducer,intitialState,children}) => (
    <StateContext.Provider value ={useReducer(reducer,intitialState)} >
        {children}
    </StateContext.Provider>
);


//pull information from data layer
export const useStateValue =() => useContext(StateContext);