import React from "react"
import Share from "./pages/share"
import Navbar from "./pages/navbar"
import Home from "./pages/home"
import Lawyer from "./pages/lawyer"
import Judge from "./pages/judge"
import Client from "./pages/client"
import Select from "./pages/select"
import { BrowserRouter, Routes, Route } from "react-router-dom"

function App() {

  return (
    <>
    <div className="sticky top-0"><Navbar/></div>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/share" element={<Share/>}/>
      <Route path="/lawyer" element={<Lawyer/>}/>
      <Route path="/client" element={<Client/>}/>
      <Route path="/judge" element={<Judge/>}/>
      <Route path="/select" element={<Select/>}/>
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
