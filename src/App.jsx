import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Nav from "./components/Nav";

import Home from "./pages/Home";
import { AppContainer, AppWrapper } from "./app.styles";
import Info from "./pages/Info";
import { NoMatch } from "./pages/NoMatch";
import Genre from "./pages/Genre";

import { ToastContainer } from "react-toastify";

// USER ROUTES
import { UserProfile } from "./pages/user/profile";
import { UserWL } from "./pages/user/watchList";
import { UserCW } from "./pages/user/continueWatching";
import { UserMal } from "./pages/user/mal";
import { UserSettings } from "./pages/user/settings";
import LogIn from "./pages/user/logIn";
import PrivateRoute from "./routes/PrivateRoute";
import News from "./pages/News";
import Footer from "./components/Footer";
import Manga from "./pages/Manga";
import { UserLiked } from "./pages/user/liked";
import Genres from "./pages/Genres";

const App = () => {
  return (
    <Router>
      <Nav />
      <AppWrapper>
        <AppContainer>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/anime/:id" element={<Info />} />
            <Route path="/anime/:id/episode/:ep/" element={<Info />} />
            <Route path="/anime/:id/episode/:ep/:typeDub" element={<Info />} />
            <Route path="/manga/:id/chapter/" element={<Manga />} />
            <Route path="/genre/:genre" element={<Genre />} />
            <Route path="/genre/" element={<Genres />} />
            <Route path="/news/" element={<News />} />
            <Route path="/news/:topic" element={<News />} />
            {/* USER ROUTES */}
            <Route path="/user/signIn" element={<LogIn isSwitch={true} />} />
            <Route path="/user/signUp" element={<LogIn isSwitch={false} />} />

            <Route
              path="/user/profile"
              element={
                <PrivateRoute>
                  <UserProfile />
                </PrivateRoute>
              }
            />
            <Route
              path="/user/continueWatching"
              element={
                <PrivateRoute>
                  <UserCW />
                </PrivateRoute>
              }
            />
            <Route
              path="/user/watchList"
              element={
                <PrivateRoute>
                  <UserWL />
                </PrivateRoute>
              }
            />
            <Route
              path="/user/liked"
              element={
                <PrivateRoute>
                  <UserLiked />
                </PrivateRoute>
              }
            />
            <Route
              path="/user/mal"
              element={
                <PrivateRoute>
                  <UserMal />
                </PrivateRoute>
              }
            />
            <Route
              path="/user/settings"
              element={
                <PrivateRoute>
                  <UserSettings />
                </PrivateRoute>
              }
            />

            <Route path="*" element={<NoMatch />} />
          </Routes>
        </AppContainer>
        <ToastContainer theme="dark" />
        <Footer />
      </AppWrapper>
    </Router>
  );
};

export default App;
