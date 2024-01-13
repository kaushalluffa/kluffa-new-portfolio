import { memo } from 'react';
import { Route, Routes } from 'react-router-dom';
import About from '../About/About';
import Contact from '../Contact/Contact';
import Home from '../Home/Home';
import ProjectDetail from '../ProjectDetail/ProjectDetail';
import Works from '../Works/Works';

function AllRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/works" element={<Works />} />
      <Route path="/works/:projectId" element={<ProjectDetail />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
}

export default memo(AllRoutes);
