import { Route, Routes } from 'react-router-dom'
import  Signup  from './pages/Signup'
import  Signin from './pages/Signin'
import  Blog  from './pages/Blog'
import Blogs from "./pages/Blogs"
import PublishPage from './pages/PublishPage'
import Footer from './components/Footer'
// import Home from './pages/Home'

function App() {

  return (
    <>

        <Routes>
          {/* <Route path="/" element={<Home />} /> */}
          <Route path="/" element={<Signup />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/blog/:id" element={<Blog />} />
          <Route path="/ffcadminpannel" element={<PublishPage />} />
        </Routes>
        <Footer />
    </>
  )
}

export default App