import { AnimatePresence } from 'framer-motion';
import { memo } from 'react';
import { Route, Routes } from 'react-router-dom';
import Contact from '../Contact/Contact';
import Home from '../Home/Home';
import ProjectDetail from '../ProjectDetail/ProjectDetail';
import Works from '../Works/Works';

function AllRoutes() {
  return (
    <AnimatePresence mode="wait">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/works" element={<Works />} />
        <Route path="/works/:projectId" element={<ProjectDetail />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </AnimatePresence>
  );
}

export default memo(AllRoutes);
