import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Nav from "./components/Nav";

import Home from "./pages/Home";
import { AppWrapper } from "./app.styles";
import Info from "./pages/Info";
import { NoMatch } from "./pages/NoMatch";
import Genre from "./pages/Genre";

// USER ROUTES
import { UserProfile } from "./pages/user/profile";
import { UserWL } from "./pages/user/watchList";
import { UserCW } from "./pages/user/continueWatching";
import { UserMal } from "./pages/user/mal";
import { UserSettings } from "./pages/user/settings";
import LogIn from "./pages/user/logIn";

const App = () => {
  return (
    <Router>
      <Nav />
      <AppWrapper>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/anime/:id" element={<Info />} />
          <Route path="/anime/:id/episode/:ep/" element={<Info />} />
          <Route path="/anime/:id/episode/:ep/:typeDub" element={<Info />} />
          <Route path="/genre/:genre" element={<Genre />} />

          {/* USER ROUTES */}
          <Route path="/user/signIn" element={<LogIn isSwitch={true} />} />
          <Route path="/user/signUp" element={<LogIn isSwitch={false} />} />

          <Route path="/user/profile" element={<UserProfile />} />
          <Route path="/user/continueWatching" element={<UserCW />} />
          <Route path="/user/watchList" element={<UserWL />} />
          <Route path="/user/mal" element={<UserMal />} />
          <Route path="/user/settings" element={<UserSettings />} />

          <Route path="*" element={<NoMatch />} />
        </Routes>
      </AppWrapper>
    </Router>
  );
};

export default App;
