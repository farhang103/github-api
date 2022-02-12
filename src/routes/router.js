import React, { useMemo, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "../components/Header";
import UserInfo from "../components/UserInfo";
import { UserContext } from "../context/userContext";
import Search from "../components/Search";

const Router = () => {
  const [value, setValue] = useState([]);
  const providerValue = useMemo(() => ({ value, setValue }), [value, setValue]);
  return (
    <BrowserRouter>
      <Header />
      <UserContext.Provider value={providerValue}>
        <Routes>
          <Route path="/" element={<Search />} />
          <Route
            path="/about"
            element={
              <h1 className="flex h-full justify-center text-3xl">About</h1>
            }
          />
          <Route path="/user/:login" element={<UserInfo />} />
        </Routes>
      </UserContext.Provider>
    </BrowserRouter>
  );
};

export default Router;
