// src/pages/ResumePage.js
import React from 'react';

const ResumePage = () => {
  return (
    <div style={{ textAlign: 'center', marginTop: '20px' }}>
      <h1>My Resume</h1>
      <iframe 
        src="/resume.pdf" 
        style={{ width: '80%', height: '800px', border: 'none' }} 
        title="Resume"
      />
    </div>
  );
};

export default ResumePage;
