'use client';
import { useState } from 'react';
import emailjs from '@emailjs/browser';

export default function Home() {
  const [transcript, setTranscript] = useState('');
  const [prompt, setPrompt] = useState('');
  const [summary, setSummary] = useState('');
  const [recipientEmail, setRecipientEmail] = useState('');
  const [status, setStatus] = useState('');

  async function handleSubmit() {
    const res = await fetch('/api/summarize', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ transcript, prompt }),
    });
    const data = await res.json();
    setSummary(data.summary);
  }

  function sendEmail() {
    if (!recipientEmail || !summary) {
      setStatus('Please enter recipient email and generate summary first.');
      return;
    }

    const templateParams = {
      to_email: recipientEmail,
      summary: summary,
    };

    emailjs
      .send(
        'service_qwdah47', // Replace with your Service ID
        'template_17dlm1e', // Replace with your Template ID
        templateParams,
        'xKFfWv4LMEWp273v5' // Replace with your Public Key
      )
      .then(
        (response) => {
          console.log('SUCCESS!', response.status, response.text);
          setStatus('Email sent successfully ✅');
        },
        (err) => {
          console.error('FAILED...', err);
          setStatus('Failed to send email ❌');
        }
      );
  }

  return (
    <div style={{
      minHeight: "100vh",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "#f4f6f8",
      padding: "20px"
    }}>
      <div style={{
        width: "100%",
        maxWidth: "800px",
        background: "white",
        borderRadius: "12px",
        boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
        padding: "30px",
        display: "flex",
        flexDirection: "column",
        gap: "20px"
      }}>
        <h1 style={{ textAlign: "center", color: "#333", marginBottom: "10px" }}>AI Meeting Summarizer</h1>

        {/* Transcript */}
        <label style={{ fontWeight: "600", color: "#444" }}>Transcript</label>
        <textarea
          placeholder="Paste transcript here..."
          value={transcript}
          onChange={(e) => setTranscript(e.target.value)}
          style={{
            width: "100%",
            minHeight: "120px",
            resize: "vertical",
            padding: "10px",
            borderRadius: "8px",
            border: "1px solid #ccc",
            fontSize: "14px"
          }}
        />

        {/* Prompt */}
        <label style={{ fontWeight: "600", color: "#444" }}>Custom Instruction</label>
        <input
          type="text"
          placeholder="Enter custom instruction..."
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          style={{
            width: "100%",
            padding: "10px",
            borderRadius: "8px",
            border: "1px solid #ccc",
            fontSize: "14px"
          }}
        />
        <button
          onClick={handleSubmit}
          style={{
            backgroundColor: "#007bff",
            color: "white",
            padding: "10px 16px",
            border: "none",
            borderRadius: "8px",
            cursor: "pointer",
            fontWeight: "600",
            alignSelf: "flex-start"
          }}
        >
          Generate Summary
        </button>

        {/* Summary */}
        <label style={{ fontWeight: "600", color: "#444" }}>Summary</label>
        <textarea
          value={summary}
          onChange={(e) => setSummary(e.target.value)}
          style={{
            width: "100%",
            minHeight: "150px",
            resize: "vertical",
            padding: "10px",
            borderRadius: "8px",
            border: "1px solid #ccc",
            fontSize: "14px"
          }}
        />

        {/* Email Section */}
        <label style={{ fontWeight: "600", color: "#444" }}>Recipient Email</label>
        <div style={{ display: "flex", gap: "10px" }}>
          <input
            type="email"
            placeholder="Enter recipient email..."
            value={recipientEmail}
            onChange={(e) => setRecipientEmail(e.target.value)}
            style={{
              flex: 1,
              padding: "10px",
              borderRadius: "8px",
              border: "1px solid #ccc",
              fontSize: "14px"
            }}
          />
          <button
            onClick={sendEmail}
            style={{
              backgroundColor: "#28a745",
              color: "white",
              padding: "10px 16px",
              border: "none",
              borderRadius: "8px",
              cursor: "pointer",
              fontWeight: "600"
            }}
          >
            Send
          </button>
        </div>

        {/* Status */}
        {status && (
          <p style={{ color: status.includes('✅') ? "green" : "red", fontWeight: "600" }}>
            {status}
          </p>
        )}
      </div>
    </div>
  );
}
