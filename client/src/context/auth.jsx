
import {  createContext, useContext,useState } from "react";

const AuthContext = createContext(null)

export const AuthContextProvider = ({children })=>{
     const [datasearch,setDataSearch] = useState("")
     console.log(datasearch)
     const value = {
        datasearch,
        setDataSearch
     }
    return(
        <AuthContext.Provider value={value}>
        {children}
    </AuthContext.Provider>
    )
}

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthContextProvider");
  }
  return context;
};
