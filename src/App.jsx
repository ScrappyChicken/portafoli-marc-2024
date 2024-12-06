import "./App.css";

import Footer from "./components/AppComponents/footer.jsx";
import Navigation from "./components/AppComponents/navegation.jsx";
import LandingPage from "./pages/landingPage.jsx";
import Projects from "./pages/projects.jsx";
import Contact from "./pages/contactPage.jsx";
import Newsletter from "./pages/newsLetters.jsx";

import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

export default function App() {
    return (
        <Router>
            <Navigation />
            <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/newsletter" element={<Newsletter />} />
                <Route path="*" element={<Navigate replace to="/" />} />
            </Routes>
            <Footer />
        </Router>
    );
}