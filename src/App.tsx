import { BrowserRouter, Routes,Route,Link } from 'react-router-dom';
import Skills from './components/pages/Skills';
import Portfolio from './components/pages/Portfolio';
import Memo from './components/pages/Memo';
import Contact from './components/pages/Contact';

const Home= () => <div><h2>ホーム</h2><p>ポートフォリオテスト(開発中)</p></div>;

function App() {
   return (
    <BrowserRouter>
      <div style={{ maxWidth: '800px',margin: '0 auto', padding: '20px' , fontFamily: 'sans-serif'}}>
        <h1>メインメニュー</h1>

        {/* ナビゲーションメニュー */ }
        <nav style ={{ display: 'flex', gap: '15px' , borderBottom: '2px solid #eee' , paddingBottom: '10px' , marginBottom: '20px' }}> 
            <li><Link to="/">ホーム</Link></li>
            <li><Link to="/skills">スキル</Link></li>
            <li><Link to="/portfolio">ポートフォリオ</Link></li>
            <li><Link to="/memo">備忘録</Link></li>
            <li><Link to="/contact">連絡先</Link></li>
        </nav>

        {/*URLに応じて表示するコンポーネントを切り替える */ }
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/memo" element={<Memo />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;