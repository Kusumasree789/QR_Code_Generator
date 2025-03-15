import React, { useState } from 'react';
import QRCode from 'qrcode';
import './QrCodeGenerator.css';

const QrCodeGenerator = () => {
  const [url, setUrl] = useState('');
  const [qrCode, setQrCode] = useState('');
  const [error, setError] = useState('');

  const generateQrCode = async () => {
    if (!url) {
      setError('Enter The Url');
      setTimeout(() => setError(''), 5000);
      return;
    }
    try {
      const qrCodeDataUrl = await QRCode.toDataURL(url);
      setQrCode(qrCodeDataUrl);
    } catch (err) {
      setError('Invalid URL');
      setTimeout(() => setError(''), 5000);
    }
  };

  const clearQrCode = () => {
    setUrl('');
    setQrCode('');
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      generateQrCode();
    }
  };

  return (
    <div className="qr-code-generator">
      <input
        type="url"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
        onKeyPress={handleKeyPress}
        placeholder="Enter URL"
        className="url-input"
      />
      <div className="button-group">
        <button onClick={generateQrCode} className="generate-button">Generate</button>
        <button onClick={clearQrCode} className="clear-button">Clear</button>
      </div>
      {qrCode && (
        <div className="qr-code-container">
          <img src={qrCode} alt="qr-code" className="qr-code" />
          <a download="qrCode.png" href={qrCode} className="download-button">
            Download
          </a>
        </div>
      )}
      {error && <div className="error-message mt-2 mb-1">{error}</div>}
    </div>
  );
};

export default QrCodeGenerator;