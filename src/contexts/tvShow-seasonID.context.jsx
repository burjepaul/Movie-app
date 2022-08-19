import { createContext, useState } from "react";

export const TVSeasonIDContext = createContext({
    seasonID: '',
    setSeasonID: () => null
});

export const TVSeasonIDProvider = ({children}) =>{
    const [seasonNo, setSeasonNo] = useState()
    const value = {seasonNo, setSeasonNo}

    return(
        <TVSeasonIDContext.Provider value={value}>
            {children}
        </TVSeasonIDContext.Provider>
    )
}
