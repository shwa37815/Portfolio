const Contact = () => {
    const GoogleFormURL = "https://docs.google.com/forms/d/e/1FAIpQLSfz2IMCInajEhU7Pzk-5hpQanxLIj3rucY4Hr69W7SXgSQ1Gw/viewform?embedded=true";
    
    return (
        <div style={{ maxWidth: '800px', margin: '0 auto', padding: '0 16px',textAlign: 'left', backgroundColor: '#f5f5f5',}}>
            <h2 style={{ textAlign: 'left', marginBottom: '24px' }}>お問い合わせ</h2><p style={{ fontSize: '1.2em', color: '#666' }}>以下のフォームよりお問い合わせください</p>
            <iframe src={GoogleFormURL} width="100%" height="800" frameBorder="0" marginHeight={0} marginWidth={0}>読み込んでいます…</iframe>
        </div>
    );
}

export default Contact;