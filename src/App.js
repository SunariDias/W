import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import CustomerHomepage from "./routes/CustomerHomepage";
import CustomerDashboard from "./routes/CustomerDashboard";
import PartnerDashboard from "./routes/PartnerDashboard";
import SellerDashboard from "./routes/SellerDashboard";

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/customer" element={<CustomerHomepage />} />
          <Route
            exact
            path="/customer/dashboard"
            element={<CustomerDashboard />}
          />
          <Route
            exact
            path="/partner/dashboard"
            element={<PartnerDashboard />}
          />

          <Route exact path="/seller/profile" element={<SellerDashboard />} />
          
        </Routes>
      </Router>
    </>
  );
};
export default App;
