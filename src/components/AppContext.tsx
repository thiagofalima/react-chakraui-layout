import { createContext } from "react";

interface IAppContext {
  user: string,
  isLoggedIn: boolean
}

export const AppContext = createContext({} as IAppContext)

export const AppContextProvider = ({ children }: any) => {
  const user = 'thiago'
  const isLoggedIn = false

  return (
    // aqui é o que e exportado
    <AppContext.Provider value={{ user, isLoggedIn }}> 
      { children }
    </AppContext.Provider>
  )
}