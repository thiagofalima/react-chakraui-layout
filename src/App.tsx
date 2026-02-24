import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import { AccountPage } from "./pages/AccountPage"
import Layout from "./components/Layout";
import { AppContextProvider } from "./components/AppContext";

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
