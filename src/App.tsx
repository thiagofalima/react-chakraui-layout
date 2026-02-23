import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import { AccountPage } from "./pages/AccountPage"
import Layout from "./components/Layout";
import { createContext } from "react";

interface IAppContext {
  user: string
}

const AppContext = createContext({} as IAppContext)

const AppContextProvider = ({ children }: any) => {
  const user = 'thiago'

  return (
    <AppContext.Provider value={{ user }}>
      { children }
    </AppContext.Provider>
  )
}

function App() {

  return (
    <>
      <BrowserRouter>
        <AppContextProvider>
          <Layout>
            <Routes>
              <Route path="/" element={<LoginPage />} />
              <Route path="/account" element={<AccountPage />} />
            </Routes>
          </Layout>
        </AppContextProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
