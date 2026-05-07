export default function HeroSection() {
  return (
    <>
      {/* NAV */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-orange-100">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-2xl">✨</span>
            <span className="font-black text-xl text-gray-900 tracking-tight">ХоббиПро</span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm font-semibold text-gray-600">
            <a href="#catalog" className="hover:text-orange-500 transition-colors">Каталог</a>
            <a href="#plan" className="hover:text-orange-500 transition-colors">План</a>
            <a href="#stories" className="hover:text-orange-500 transition-colors">Истории</a>
            <a href="#contact" className="hover:text-orange-500 transition-colors">Контакты</a>
          </div>
          <a href="#catalog" className="bg-orange-500 hover:bg-orange-600 text-white font-bold px-5 py-2.5 rounded-full text-sm transition-all hover:scale-105 active:scale-95">
            Начать
          </a>
        </div>
      </nav>

      {/* HERO */}
      <section className="relative pt-32 pb-20 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-50 via-pink-50 to-violet-50" />
        <div className="absolute top-20 right-0 w-[600px] h-[600px] bg-gradient-to-br from-orange-300/20 to-pink-400/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gradient-to-tr from-violet-300/20 to-teal-300/20 rounded-full blur-3xl" />

        <div className="relative max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 bg-orange-100 text-orange-700 px-4 py-2 rounded-full text-sm font-bold mb-6">
              <span>🔥</span> Монетизируй то, что любишь
            </div>
            <h1 className="font-black text-5xl md:text-6xl text-gray-900 leading-tight mb-6">
              Твоё хобби —<br />
              <span className="bg-gradient-to-r from-orange-500 to-pink-500 bg-clip-text text-transparent">
                источник дохода
              </span>
            </h1>
            <p className="text-gray-600 text-lg leading-relaxed mb-8 font-medium">
              Узнай, как превратить увлечение в стабильный заработок. Реальные истории, конкретные шаги и проверенные инструменты.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="#catalog" className="bg-gradient-to-r from-orange-500 to-pink-500 hover:from-orange-600 hover:to-pink-600 text-white font-bold px-8 py-4 rounded-2xl text-lg transition-all hover:scale-105 active:scale-95 shadow-lg shadow-orange-200">
                Найти своё хобби
              </a>
              <a href="#plan" className="bg-white border-2 border-gray-200 hover:border-orange-300 text-gray-800 font-bold px-8 py-4 rounded-2xl text-lg transition-all hover:scale-105 active:scale-95">
                Пошаговый план
              </a>
            </div>

            <div className="flex items-center gap-8 mt-10">
              <div>
                <div className="font-black text-3xl text-gray-900">200+</div>
                <div className="text-gray-500 text-sm font-medium">хобби для монетизации</div>
              </div>
              <div className="w-px h-12 bg-gray-200" />
              <div>
                <div className="font-black text-3xl text-gray-900">50к+</div>
                <div className="text-gray-500 text-sm font-medium">людей уже зарабатывают</div>
              </div>
              <div className="w-px h-12 bg-gray-200" />
              <div>
                <div className="font-black text-3xl text-gray-900">3 мес</div>
                <div className="text-gray-500 text-sm font-medium">до первого дохода</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="https://cdn.poehali.dev/projects/a9873016-152a-41e3-a5ca-e68e56aebb62/files/9092a023-6e86-4a6b-bfdc-7cfe7264995f.jpg"
                alt="Творческое рабочее место"
                className="w-full h-[420px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-orange-900/30 to-transparent" />
            </div>
            <div className="absolute -bottom-4 -left-4 bg-white rounded-2xl shadow-xl p-4 flex items-center gap-3">
              <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center text-2xl">💰</div>
              <div>
                <div className="font-black text-gray-900">+85 000 ₽</div>
                <div className="text-xs text-gray-500 font-medium">средний доход в месяц</div>
              </div>
            </div>
            <div className="absolute -top-4 -right-4 bg-white rounded-2xl shadow-xl p-4 flex items-center gap-3">
              <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center text-2xl">⭐</div>
              <div>
                <div className="font-black text-gray-900">4.9 / 5</div>
                <div className="text-xs text-gray-500 font-medium">оценка историй</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
