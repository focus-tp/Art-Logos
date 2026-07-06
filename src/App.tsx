/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import KidsPage from './pages/KidsPage';
import GalleryPage from './pages/GalleryPage';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/kids" element={<KidsPage />} />
      <Route path="/gallery" element={<GalleryPage />} />
    </Routes>
  );
}
