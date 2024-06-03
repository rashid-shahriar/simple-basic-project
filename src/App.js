import LandingPage from "./components/LandingPage";
import LoginSignupPage from "./components/LoginSignupPage";
import RoleSelectionPage from "./components/RoleSelectionPage";
import AdminDashboard from "./components/AdminDashboard";
import ClientDashboard from "./components/ClientDashboard";

//import react router dom
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      {" "}
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<LoginSignupPage />} />
          <Route path="/role" element={<RoleSelectionPage />} />
          <Route path="/admin" element={<AdminDashboard />} />
          <Route path="/client" element={<ClientDashboard />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
