import { BrowserRouter, Routes,Route } from 'react-router-dom';
import Header from './components/layout/Header';
import Home from './components/pages/Home';
import PlayGround from './components/pages/PlayGround.tsx';
import Portfolio from './components/pages/Portfolio';
import Memo from './components/pages/Memo';
import Contact from './components/pages/Contact';

function App() {
   return (
    <BrowserRouter>
        <Header />


        <main style={{ padding: '20px', minHeight: 'calc(100vh - 60px)', }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/PlayGround" element={<PlayGround />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/memo" element={<Memo />} />
            <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;