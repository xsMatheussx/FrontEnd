import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Ajuste os caminhos para serem relativos à pasta src
import Navbar from "./components/Layout/Navbar.jsx";
import Dashboard from "./pages/Home.jsx "; 
import DeviceForm from "./components/Device/DeviceForm.jsx";
import DeviceList from "./components/Device/DeviceList.jsx";
import QuickTest from "./components/Test/QuickTest.jsx";
import ConnectivityLog from "./components/Logs/ConnectivityLog.jsx";

export default function App() {
  return (
    <Router>
      <Navbar />
      <main style={{ padding: "40px", minHeight: "100vh", background: "#f9fafb" }}>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/cadastro" element={<DeviceForm />} />
          <Route path="/listagem" element={<DeviceList />} />
          <Route path="/teste" element={<QuickTest />} />
          <Route path="/logs" element={<ConnectivityLog />} />
        </Routes>
      </main>
    </Router>
  );
}
