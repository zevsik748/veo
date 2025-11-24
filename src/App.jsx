
import React from 'react';

export default function App() {
  return (
    <>
      {/* Фон-сетка */}
      <div className="cyber-grid"></div>
      {/* Основной контент */}
      <div className="scanlines min-h-screen flex flex-col items-center justify-center" style={{ fontFamily: 'Inter, sans-serif', color: '#F3F4F6', backgroundColor: '#05070A' }}>
        <h1 className="glitch-text text-4xl font-display font-bold mb-4" data-text="Google Flow & Veo | Нейровидео Студия | Доступ РФ" style={{ color: '#00F0FF', textAlign: 'center' }}>
          Google Flow & Veo | Нейровидео Студия | Доступ РФ
        </h1>
        <p className="text-lg font-sans mb-8" style={{ color: '#8B5CF6', textAlign: 'center' }}>
          Купить доступ к Google Flow и Veo. Платформа для создания нейровидео.<br />
          25000 кредитов. Генерация персонажей и монтаж без зарубежных карт.
        </p>
        {/* Пример блока с картинкой (замените src на ваш файл) */}
        <img src="/11.jpeg" alt="Demo" className="rounded-xl shadow-lg mb-6" style={{ maxWidth: '320px' }} />
        {/* Пример видео (замените src на ваш файл) */}
        <video src="/flow-demo.mp4.mp4" controls className="rounded-xl shadow-lg mb-6" style={{ maxWidth: '320px' }} />
        {/* Кнопка */}
        <a href="#" className="px-6 py-3 bg-brand-accent text-black font-bold rounded-lg shadow-lg hover:bg-brand-secondary transition">Купить доступ</a>
      </div>
    </>
  );
}
