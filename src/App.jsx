
import React from 'react';

export default function App() {
  return (
      <div className="scanlines" style={{ minHeight: '100vh', backgroundColor: '#05070A', color: '#F3F4F6', fontFamily: 'Inter, sans-serif', position: 'relative' }}>
        {/* Cyber Grid Background */}
        <div className="cyber-grid"></div>
        <main id="root">
          <section className="flex flex-col items-center justify-center pt-20 pb-12 relative">
            <div className="absolute left-0 right-0 top-8 flex justify-center pointer-events-none select-none" style={{ zIndex: 1 }}>
              <span className="px-5 py-2 rounded-full border border-cyan-400 text-cyan-400 text-xs tracking-widest font-mono bg-black bg-opacity-40 shadow-lg uppercase" style={{ letterSpacing: '0.2em' }}>Google Flow Workspace Access</span>
            </div>
            <h1 className="glitch-text text-4xl md:text-5xl font-bold font-display text-center mb-2" data-text="Google Flow & Veo | Нейровидео Студия | Доступ РФ" style={{ color: '#00F0FF', textShadow: '0 0 16px #00F0FF', marginTop: '48px' }}>
              Платформа Нейровидео<br />
              <span style={{ color: '#00F0FF', fontSize: '1.2em', letterSpacing: '2px', textShadow: '0 0 24px #00F0FF' }}>GOOGLE FLOW</span>
            </h1>
            <div className="text-lg text-center mb-2">
              <span style={{ color: '#F3F4F6' }}>&amp; Powered by </span>
              <span style={{ color: '#8B5CF6', fontWeight: 'bold' }}>Veo 3</span>
            </div>
            <div className="mt-6 mb-8">
              <span className="px-8 py-4 rounded-xl bg-black border-2 border-green-400 text-green-400 text-2xl font-bold shadow-lg tracking-wide" style={{ boxShadow: '0 0 24px #00FF41' }}>+ 25,000 FLOW КРЕДИТОВ</span>
            </div>
            <div className="flex justify-center mt-6">
              <a href="#" className="px-10 py-4 bg-cyan-400 text-black font-bold rounded-lg shadow-lg hover:bg-cyan-300 transition text-xl tracking-wide" style={{ boxShadow: '0 0 16px #00F0FF' }}>Купить доступ</a>
            </div>
          </section>
          <section className="max-w-2xl mx-auto bg-black bg-opacity-60 rounded-2xl p-6 mb-8 shadow-xl border border-cyan-900 mt-8">
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
          <section className="max-w-2xl mx-auto bg-black bg-opacity-50 rounded-2xl p-6 mb-8 shadow-xl border border-cyan-900">
            <h2 className="text-lg font-bold mb-4 text-cyan-400">Часто задаваемые вопросы</h2>
            <div className="mb-4">
              <div className="font-semibold mb-1">Как получить доступ к Google Flow?</div>
              <div className="text-sm text-gray-300">После оплаты вы получите прямой доступ к платформе и 25 000 Flow кредитов для генерации видео и персонажей.</div>
            </div>
            <div className="mb-4">
              <div className="font-semibold mb-1">Можно ли использовать российские карты?</div>
              <div className="text-sm text-gray-300">Да, сервис работает без ограничений для РФ, оплата доступна любыми картами.</div>
            </div>
            <div className="mb-4">
              <div className="font-semibold mb-1">Что входит в пакет?</div>
              <div className="text-sm text-gray-300">Доступ к Google Flow, 25 000 кредитов, поддержка, обновления и возможность сохранять проекты.</div>
            </div>
          </section>
          <section className="flex flex-col md:flex-row items-center justify-center gap-8 mb-8">
            <img src="/11.jpeg" alt="Demo" className="rounded-xl shadow-lg" style={{ maxWidth: '320px' }} />
            <video src="/flow-demo.mp4.mp4" controls className="rounded-xl shadow-lg" style={{ maxWidth: '320px' }} />
          </section>
        </main>
      </div>
    );
}
