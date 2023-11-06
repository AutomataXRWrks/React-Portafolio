import { Route, Routes } from "react-router-dom"
import  About  from "./pages/About"
import Header  from "./components/Header"
import  Contact  from "./pages/Contact"
import  Projects  from "./pages/Projects"
import NotFound from "./pages/NotFound"




export default function App() {
  return (
    <>
    <Header></Header>
    
    <Routes>
      <Route path="/" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/projects" element={<Projects />} />
     <Route path="*" element={<NotFound />} /> 
    </Routes>

    </>
  )
}