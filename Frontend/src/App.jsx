import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import About from "./pages/About"
import Membership from "./pages/Membership"
import Initiative from "./pages/Initiative"
import Projects from "./pages/Project"
import ProjectDetail from "./pages/ProjectDetail"
import Impact from "./pages/Impact"
import GalleryPage from "./pages/GalleryPage"
import ScrollToTop from './components/ScrollToTop';
import Donate from "./pages/Donate"
import WingsDetail from "./pages/Wing"


function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/membership" element={<Membership />} />
        <Route path="/initiative" element={<Initiative />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/project/:id" element={<ProjectDetail />} />
        <Route path="/impact" element={<Impact />} />
        <Route path="/gallery" element={<GalleryPage />} />
        <Route path="/donate" element={<Donate />} />
        <Route path="/wing/:title" element={<WingsDetail />} />

      </Routes>
    </BrowserRouter>
  )
}

export default App
