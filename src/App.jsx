import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Header from "./components/Header"
import Footer from "./components/Footer"
import HomePage from './Pages/HomePage'
import PlantIdentifier from './Pages/PlantIdentifier'
import Community from "./Pages/Community"
import Blog from "./Pages/Blog"
import PlantProblems from "./Pages/PlantProblems"
import PlantProblemDetail from './Pages/PlantProblemsDetails'

const App = () => {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Header />
        <main>
          <Routes>
            <Route path='/' element={<HomePage/>}/>           
            <Route path="/plant-identifier" element={<PlantIdentifier />} />
            <Route path="/community" element={<Community />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/plant-problems" element={<PlantProblems />} />
            <Route path="/Plant-problems/:problemId" element={<PlantProblemDetail/>}/>
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App