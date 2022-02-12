import { render } from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./css/main.css";
import App from "./App";
import LoginSignup from "./routes/login_signup";
import Profile from "./routes/profile";
import Home from "./routes/home";
import Announce from "./routes/announce";

import "antd/dist/antd.css";

const rootElement: any = document.getElementById("root");
render(
  <BrowserRouter>
    <Routes>
      <Route path="login" element={<LoginSignup />} />
      <Route path="/" element={<App />}>
        <Route path="/" element={<Home />} />
        <Route path="/profile/:id" element={<Profile />} />
        <Route path="/announce/:id/:id" element={<Announce />} />
      </Route>
    </Routes>
  </BrowserRouter>,
  rootElement
);
