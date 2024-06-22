import { BrowserRouter, Routes, Route } from 'react-router-dom'
import LandingPage from './pages/landingPage.jsx'
import Tokens from './pages/tokenConnect.jsx'
import WalletConnect from './pages/walletPage.jsx';
import AOS from 'aos';
import 'aos/dist/aos.css';
import 'bootstrap/dist/css/bootstrap.min.css';
AOS.init();
function App() {

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route index element={<LandingPage />} />
        <Route path="/home" element={<LandingPage />} />
        <Route path="/wallet" element={<WalletConnect />} />
        <Route path="/token" element={<Tokens />} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
