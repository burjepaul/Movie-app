import { createContext, useState } from "react";

export const TVShowIDContext = createContext({
    id: '',
    setID: () => null
});

export const TVShowIDProvider = ({children}) =>{
    const [id, setID] = useState()
    const value = {id, setID}

    return(
        <TVShowIDContext.Provider value={value}>
            {children}
        </TVShowIDContext.Provider>
    )
}
