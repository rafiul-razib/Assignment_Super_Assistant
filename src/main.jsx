import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, Route, Routes } from 'react-router'
import CategorizePage from './pages/Categorize.jsx'
import ClozePage from './pages/Cloze.jsx'
import ComprehensionPage from './pages/Comprehension.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
  <BrowserRouter>
  <Routes>
      <Route path="/" element={<CategorizePage/>} />
      <Route path="/cloze" element={<ClozePage/>} />
      <Route path="/comprehension" element={<ComprehensionPage/>} />
    </Routes>
  </BrowserRouter>
  </StrictMode>,
)
