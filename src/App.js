// App.js
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Components/Login";
import DashboardLayout from "./Components/DashboardLayout";
import Dashboard from "./Components/Dashboard";
import "./App.scss";
import NotFoundPage from "./Pages/NotFoundPage";

function App() {
  return (
    // <div className="content">
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route
            path="/dashboard"
            element={
              <DashboardLayout>
                <Dashboard />
              </DashboardLayout>
            }
          />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Router>
    // </div>
  );
}

export default App;
