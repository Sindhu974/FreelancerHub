import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import Messages from "./pages/Messages";
import Payments from "./pages/Payments";
import Settings from "./pages/Settings";
import Notifications from "./pages/Notifications";
import Admin from "./pages/Admin";
import Contact from "./pages/Contact";
import Profile from "./pages/Profile";

function App() {
  return (
    <BrowserRouter>

      <Routes>

        <Route path="/" element={<Home />} />

        <Route path="/login" element={<Login />} />

        <Route path="/register" element={<Register />} />

        <Route path="/dashboard" element={<Dashboard />} />

        <Route path="/messages" element={<Messages />} />

        <Route path="/payments" element={<Payments />} />

        <Route path="/settings" element={<Settings />} />

        <Route path="/notifications" element={<Notifications />} />

        <Route path="/admin" element={<Admin />} />

        <Route path="/contact" element={<Contact />} />

        <Route path="/profile" element={<Profile />} />

      </Routes>

    </BrowserRouter>
  );
}

export default App;
