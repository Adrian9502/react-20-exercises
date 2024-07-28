import React, { useEffect, useState } from "react";
import QRCode from "react-qr-code";

export default function QrGenerator() {
  const [qrCode, setQrCode] = useState("");
  const [input, setInput] = useState("Adrian");

  function handleGenerateQRCode() {
    setQrCode(input);
    setInput("");
  }

  return (
    <div className="bg-light container rounded p-4 mt-5 mb-5">
      <h1 className="text-dark mb-4">QR Code Generator</h1>
      <div className="input-group mb-3 px-5">
        <input
          className="form-control"
          onChange={(e) => setInput(e.target.value)}
          type="text"
          name="qr-code"
          value={input}
          placeholder="Enter value..."
        />
        <button
          className="btn btn-primary"
          disabled={!input.trim()}
          onClick={handleGenerateQRCode}
        >
          Generate
        </button>
      </div>
      {qrCode && (
        <div className="text-center">
          <QRCode value={qrCode} size={400} bgColor="#fff" />
        </div>
      )}
    </div>
  );
}
