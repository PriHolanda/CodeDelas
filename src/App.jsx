import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from './pages/Home/home'
import Meetings from './pages/Meetings/Meetings'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/meetings" element={<Meetings />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App