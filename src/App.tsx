import { BrowserRouter, Routes,Route,Link } from 'react-router-dom';
import Memo from './components/pages/Memo';

const Home= () => <div><h2>ホーム</h2><p>ポートフォリオテスト(開発中)</p></div>;
const Skills= () => <div><h2>スキル</h2><p>ポートフォリオテスト(開発中)</p></div>;
const Portfolios= () => <div><h2>ポートフォリオ</h2><p>ポートフォリオテスト(開発中)</p></div>;
const Contact= () => <div><h2>連絡先</h2><p>ポートフォリオテスト(開発中)</p></div>;

function App() {
   return (
    <BrowserRouter>
      <div style={{ maxWidth: '800px',margin: '0 auto', padding: '20px' , fontFamily: 'sans-serif'}}>
        <h1>メインメニュー</h1>

        {/* ナビゲーションメニュー */ }
        <nav style ={{ display: 'flex', gap: '15px' , borderBottom: '2px solid #eee' , paddingBottom: '10px' , marginBottom: '20px' }}> 
            <li><Link to="/">ホーム</Link></li>
            <li><Link to="/skills">スキル</Link></li>
            <li><Link to="/portfolios">ポートフォリオ</Link></li>
            <li><Link to="/memo">備忘録</Link></li>
            <li><Link to="/contact">連絡先</Link></li>
        </nav>

        {/*URLに応じて表示するコンポーネントを切り替える */ }
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/portfolios" element={<Portfolios />} />
          <Route path="/memo" element={<Memo />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;