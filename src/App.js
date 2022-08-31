import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Nav from "./components/Nav";
import { AppWrapper } from "./app.styles";
import Info from "./pages/Info";

function App() {
  return (
    <Router>
      <Nav />
      <AppWrapper>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/anime/:id" element={<Info />} />
          <Route path="/anime/:id/episode/:ep" element={<Info />} />
        </Routes>
      </AppWrapper>
    </Router>
  );
}

export default App;
