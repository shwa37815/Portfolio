import ReactMarkdown from 'react-markdown';

import memoText from '../../assets/memo.md?raw';
import functionText from '../../assets/関数.md?raw';
import designText from '../../assets/設計.md?raw';


const Memo = () => {
  return (
    <div>
      <h2>備忘録ページ</h2>
      <div style={{ backgroundColor: '#f9f9f9', padding: '20px' ,borderRadius: '8px', lineHeight: '1.6' }}>
        <ReactMarkdown>{memoText}</ReactMarkdown>
      </div>
    </div>
  );
};

export default Memo;