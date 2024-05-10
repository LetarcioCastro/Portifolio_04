import { createContext, createRef, useContext } from "react"


const AppContext = createContext({ viewRef: createRef<HTMLElement>() })

export const useAppContext = () => useContext(AppContext)
export const AppProvider = AppContext.Provider