import React from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Projects from './pages/Projects'
import Experience from './pages/Experience'
import Resume from './pages/Resume'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ProjectDisplay from './pages/ProjectDisplay'
import ScrollToTop from './components/ScrollToTop'

function App() {
  return (
    <div className="App">
      <Router>
        <ScrollToTop>
          <Navbar />
          <Routes>
            <Route path={process.env.PUBLIC_URL + '/'} element={<Home />} />
            <Route
              path={process.env.PUBLIC_URL + '/projects'}
              element={<Projects />}
            />
            <Route
              path={process.env.PUBLIC_URL + '/projects/:slug'}
              element={<ProjectDisplay />}
            />
            <Route
              path={process.env.PUBLIC_URL + 'experience'}
              element={<Experience />}
            />
            <Route
              path={process.env.PUBLIC_URL + '/resume'}
              element={<Resume />}
            />
          </Routes>
          <Footer />
        </ScrollToTop>
      </Router>
    </div>
  )
}

export default App
