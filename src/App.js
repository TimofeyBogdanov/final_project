import React, { useState } from "react";
import { Navigate, Outlet, Route, Routes } from "react-router-dom";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import SearchResultPage from "./pages/search-result-page/SearchResultPage";
import AuthPage from "./pages/auth-page/AuthPage";
import MainPage from "./pages/main-page/MainPage";
import FailedAuthPage from "./pages/failed-auth-page/FailedAuthPage";
import SearchPage from "./pages/search-page/SearchPage";
import PageDoesntExist from "./pages/page-doesnt-exist/PageDoesntExist";
import ResultProvider from "./context/resultProvider";
import "./global-styles/App.css";

const App = () => {
  const [isAuth, setIsAuth] = useState(false);
  return (
    <div className="App">
      <Header isAuth={isAuth} setIsAuth={setIsAuth} />
      <Routes>
        <Route path="/" element={<MainPage isAuth={isAuth} />} />
        <Route
          path="/auth"
          element={!isAuth ? <AuthPage isAuth={isAuth} setIsAuth={setIsAuth} /> : <Navigate to="/" />}
        />
        <Route element={isAuth ? <Outlet /> : <Navigate to="/auth" />}>
          <Route
            path="/search"
            element={
              <ResultProvider>
                <SearchPage />
              </ResultProvider>
            }
          />
          <Route
            path="/result"
            element={
              <ResultProvider>
                <SearchResultPage />
              </ResultProvider>
            }
          />
        </Route>
        <Route path="/autherror" element={<FailedAuthPage />} />
        <Route path="*" element={<PageDoesntExist />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;