import React, { useEffect, useRef } from 'react';
import './Hello.css';

const Hello = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let width = window.innerWidth;
    let height = window.innerHeight;

    canvas.width = width;
    canvas.height = height;

    const letters =
      'アァカサタナハマヤャラワガザダバパイィキシチニヒミリヰギジヂビピウゥクスツヌフムユュルグズヅブプエェケセテネヘメレヱゲゼデベペオォコソトノホモヨョロヲゴゾドボポヴッンABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    const fontSize = 18;
    const columns = Math.floor(width / fontSize);
    const drops = Array(columns).fill(1);

    let frame = 0;
    const speed = 2; // Higher value = slower

    function draw() {
      ctx.fillStyle = 'rgba(24, 27, 32, 0.08)';
      ctx.fillRect(0, 0, width, height);
      ctx.font = fontSize + 'px monospace';
      ctx.fillStyle = '#00ff41';

      // Only increment drops every 'speed' frames
      if (frame % speed === 0) {
        for (let i = 0; i < drops.length; i++) {
          const text = letters.charAt(Math.floor(Math.random() * letters.length));

          ctx.fillText(text, i * fontSize, drops[i] * fontSize);

          if (drops[i] * fontSize > height && Math.random() > 0.975) {
            drops[i] = 0;
          }

          drops[i]++;
        }
      } else {
        // Draw the current state without incrementing drops
        for (let i = 0; i < drops.length; i++) {
          const text = letters.charAt(Math.floor(Math.random() * letters.length));

          ctx.fillText(text, i * fontSize, drops[i] * fontSize);
        }
      }

      frame++;

      animationFrameId = requestAnimationFrame(draw);
    }

    draw();

    function handleResize() {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
    }

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <main className="main-section">
      <canvas ref={canvasRef} className="matrix-canvas"></canvas>
      <div className="main-text">
        <p className="greeting">Hello! I am</p>
        <h1 className="main-name">Nithin Viswanathan</h1>
        <p className="subtitle">I am a full stack developer</p>
      </div>
      <div className="main-image">
        <img src={process.env.PUBLIC_URL + '/images/programmer.svg'} alt="Developer at computer" />
      </div>
    </main>
  );
};

export default Hello;
