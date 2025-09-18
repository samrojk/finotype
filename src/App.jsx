import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Routes, Route, Navigate } from "react-router-dom";
import { account } from "./lib/appwrite"; // ✅ Add Appwrite

// Main Pages -----
import Landing from "./pages/landing.jsx";
import Home from "./pages/home.jsx";
import About from "./pages/about.jsx";
import SignUp from "./pages/signup.jsx";
import Login from "./pages/login.jsx";
import Pricing from "./pages/pricing.jsx";
import Terms from "./pages/terms.jsx";

// Layout Components -----
import Navbar1 from "./components/navbar1.jsx";
import Navbar2 from "./components/navbar2.jsx";
import Footer from "./components/footer.jsx";
import Notification from "./components/notification.jsx";

// Features: BreakEven
import BreakEven from "./features/BreakEven/BreakEven.jsx";
import BreakEvenResult from "./features/BreakEven/BreakEvenResult.jsx";

// Features: Runway
import Runway from "./features/Runway/Runway.jsx";
import RunwayResult from "./features/Runway/RunwayResult.jsx";

// Features: StartupCost
import StartupCost from "./features/StartupCost/StartupCost.jsx";
import StartupResult from "./features/StartupCost/StartupResult.jsx";

function App() {
  const location = useLocation();

  // Check Login to show particular Navbar
  const [isLoggedIn, setIsLoggedIn] = useState(false); // default false

  // ✅ Check login session on refresh
  useEffect(() => {
    const checkSession = async () => {
      try {
        const user = await account.get(); // fetch user from Appwrite
        if (user) setIsLoggedIn(true);
      } catch {
        setIsLoggedIn(false);
      }
    };
    checkSession();
  }, []);

  // Hide navbar on login & signup pages
  const hideLayout =
    location.pathname === "/login" || location.pathname === "/signup";

  return (
    <div>
      <Notification />
      {/* Show navbar depending on login status & Hide navbar on login and signup page */}
      {!hideLayout &&
        (isLoggedIn ? <Navbar2 setIsLoggedIn={setIsLoggedIn} /> : <Navbar1 />)}

      <Routes>
        {/* Landing Page (only when not logged in) */}
        <Route
          path="/"
          element={
            !isLoggedIn ? (
              <Landing setIsLoggedIn={setIsLoggedIn} />
            ) : (
              <Navigate to="/home" />
            )
          }
        />

        {/* Home Page (only when logged in) */}
        <Route
          path="/home"
          element={
            isLoggedIn ? (
              <Home setIsLoggedIn={setIsLoggedIn} />
            ) : (
              <Navigate to="/" />
            )
          }
        />

        {/* Other pages */}
        <Route path="/about" element={<About />} />
        <Route
          path="/signup"
          element={<SignUp setIsLoggedIn={setIsLoggedIn} />}
        />
        <Route
          path="/login"
          element={<Login setIsLoggedIn={setIsLoggedIn} />}
        />

        <Route path="/pricing" element={<Pricing />} />
        <Route path="/terms" element={<Terms />} />

        {/* Feature: StartupCost */}
        <Route path="/startupcost" element={<StartupCost />} />
        <Route path="/startup/result" element={<StartupResult />} />

        {/* Feature: Runway */}
        <Route path="/runway" element={<Runway />} />
        <Route path="/runway/result" element={<RunwayResult />} />

        {/* Feature: BreakEven */}
        <Route path="/breakeven" element={<BreakEven />} />
        <Route path="/breakeven/result" element={<BreakEvenResult />} />
      </Routes>
      {!hideLayout && <Footer isLoggedIn={isLoggedIn} />}
    </div>
  );
}

export default App;
