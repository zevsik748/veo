
import React from 'react';

export default function App() {
  return (
    <div className="scanlines" style={{ minHeight: '100vh', backgroundColor: '#05070A', color: '#F3F4F6', fontFamily: 'Inter, sans-serif', position: 'relative' }}>
      {/* Cyber Grid Background */}
      <div className="cyber-grid"></div>

      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center pt-16 pb-8">
        <div className="mb-4">
          <span className="px-4 py-2 rounded-full border border-cyan-400 text-cyan-400 text-xs tracking-widest font-mono bg-black bg-opacity-40 shadow-lg">GOOGLE FLOW WORKSPACE ACCESS</span>
        </div>
        <h1 className="text-4xl md:text-5xl font-bold font-display text-center mb-2" style={{ color: '#00F0FF', textShadow: '0 0 8px #00F0FF' }}>
          Платформа Нейровидео<br />
          <span style={{ color: '#00F0FF', fontSize: '1.2em', letterSpacing: '2px' }}>GOOGLE FLOW</span>
        </h1>
        <div className="text-lg text-center mb-2">
          &amp; Powered by <span style={{ color: '#8B5CF6', fontWeight: 'bold' }}>Veo 3</span>
        </div>
        <div className="mt-4 mb-6">
          <span className="px-6 py-3 rounded-xl bg-black border-2 border-green-400 text-green-400 text-xl font-bold shadow-lg">+ 25,000 FLOW КРЕДИТОВ</span>
        </div>
      </section>

      {/* Info Section */}
      <section className="max-w-2xl mx-auto bg-black bg-opacity-60 rounded-2xl p-6 mb-8 shadow-xl border border-cyan-900">
        <h2 className="text-xl font-bold mb-2 flex items-center gap-2">
          <span role="img" aria-label="info" className="text-cyan-400">🟣</span> Что такое Flow?
        </h2>
        <p className="text-base mb-2">
          Это не просто генератор, это профессиональная среда для создания Нейровидео.<br />
          Сохраняйте персонажей между сценариями, стройте таймлайн, редактируйте кадры.<br />
        </p>
        <p className="text-base">
          Вы получаете прямой доступ к Google Labs с балансом 25 000 кредитов. Без лишних ограничений.
        </p>
      </section>

      {/* Demo Image & Video */}
      <section className="flex flex-col md:flex-row items-center justify-center gap-8 mb-8">
        <img src="/11.jpeg" alt="Demo" className="rounded-xl shadow-lg" style={{ maxWidth: '320px' }} />
        <video src="/flow-demo.mp4.mp4" controls className="rounded-xl shadow-lg" style={{ maxWidth: '320px' }} />
      </section>

      {/* CTA Button */}
      <div className="flex justify-center mb-12">
        <a href="#" className="px-8 py-4 bg-cyan-400 text-black font-bold rounded-lg shadow-lg hover:bg-cyan-300 transition text-xl">Купить доступ</a>
      </div>
    </div>
  );
}
