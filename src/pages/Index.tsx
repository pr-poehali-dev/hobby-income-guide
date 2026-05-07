import { useState } from "react";
import Icon from "@/components/ui/icon";

const hobbies = [
  {
    emoji: "🎨",
    name: "Рисование и иллюстрация",
    category: "Творчество",
    income: "от 30 000 ₽/мес",
    color: "from-orange-400 to-pink-500",
    bg: "bg-orange-50",
    steps: [
      "Создай аккаунт на Behance и Pinterest",
      "Продавай принты на Redbubble или Printful",
      "Предложи иллюстрации фрилансерским биржам",
    ],
    tools: ["Procreate", "Adobe Illustrator", "Canva Pro"],
  },
  {
    emoji: "📸",
    name: "Фотография",
    category: "Визуальное искусство",
    income: "от 50 000 ₽/мес",
    color: "from-violet-500 to-blue-500",
    bg: "bg-violet-50",
    steps: [
      "Загрузи фото на стоки: Shutterstock, Adobe Stock",
      "Предложи услуги фотосессий через соцсети",
      "Создай пресет-паки и продавай в Telegram",
    ],
    tools: ["Lightroom", "Photoshop", "500px"],
  },
  {
    emoji: "🎸",
    name: "Музыка",
    category: "Исполнение",
    income: "от 20 000 ₽/мес",
    color: "from-green-400 to-teal-500",
    bg: "bg-green-50",
    steps: [
      "Выложи треки на Spotify, Apple Music через DistroKid",
      "Создай канал на YouTube с cover-версиями",
      "Запусти уроки онлайн через Zoom или Telegram",
    ],
    tools: ["GarageBand", "Audacity", "DistroKid"],
  },
  {
    emoji: "✍️",
    name: "Писательство и блогинг",
    category: "Контент",
    income: "от 25 000 ₽/мес",
    color: "from-yellow-400 to-orange-500",
    bg: "bg-yellow-50",
    steps: [
      "Заведи блог на Телеграф или Яндекс.Дзен",
      "Пиши статьи на заказ через биржи копирайтинга",
      "Продавай электронные книги через Gumroad",
    ],
    tools: ["Notion", "Яндекс.Дзен", "Gumroad"],
  },
  {
    emoji: "🧶",
    name: "Вязание и рукоделие",
    category: "Ручной труд",
    income: "от 15 000 ₽/мес",
    color: "from-pink-400 to-rose-500",
    bg: "bg-pink-50",
    steps: [
      "Открой магазин на Etsy или Wildberries",
      "Сними мастер-классы для YouTube",
      "Продавай выкройки и схемы на Boosty",
    ],
    tools: ["Etsy", "Wildberries", "Boosty"],
  },
  {
    emoji: "🍳",
    name: "Кулинария",
    category: "Гастрономия",
    income: "от 40 000 ₽/мес",
    color: "from-red-400 to-orange-400",
    bg: "bg-red-50",
    steps: [
      "Запусти foodblog в Instagram или TikTok",
      "Готовь на заказ через ВКонтакте или Авито",
      "Продай авторский сборник рецептов онлайн",
    ],
    tools: ["Instagram", "TikTok", "Авито"],
  },
];

const steps = [
  {
    num: "01",
    title: "Оцени своё хобби",
    desc: "Разберись, что ты делаешь лучше всего и кому это может быть нужно. Запиши 3 своих сильных стороны.",
    color: "bg-orange-400",
  },
  {
    num: "02",
    title: "Изучи рынок",
    desc: "Посмотри, что продают другие в твоей нише. Найди цены, форматы и популярные платформы.",
    color: "bg-pink-500",
  },
  {
    num: "03",
    title: "Сделай первый продукт",
    desc: "Создай минимальный продукт или услугу. Не жди идеала — важно начать и получить первую обратную связь.",
    color: "bg-violet-500",
  },
  {
    num: "04",
    title: "Выйди на первых клиентов",
    desc: "Расскажи друзьям, опубликуй в соцсетях, зайди на биржи. Первые 3 клиента меняют всё.",
    color: "bg-green-500",
  },
  {
    num: "05",
    title: "Масштабируй",
    desc: "Автоматизируй, делегируй, создай пассивный доход. Превращай разовые продажи в стабильный поток.",
    color: "bg-teal-500",
  },
];

const stories = [
  {
    name: "Анна, 29 лет",
    hobby: "Иллюстратор",
    income: "120 000 ₽/мес",
    text: "Год назад рисовала в тетрадке для себя. Сейчас у меня 4 постоянных клиента, магазин на Etsy и онлайн-курс.",
    emoji: "🎨",
    color: "from-orange-400 to-pink-500",
  },
  {
    name: "Михаил, 34 года",
    hobby: "Фотограф",
    income: "85 000 ₽/мес",
    text: "Начал выкладывать фото природы в Instagram. Через 6 месяцев первый коммерческий заказ, сейчас это основная работа.",
    emoji: "📸",
    color: "from-violet-500 to-blue-500",
  },
  {
    name: "Екатерина, 26 лет",
    hobby: "Кулинар",
    income: "60 000 ₽/мес",
    text: "Готовила торты для семьи. Теперь принимаю до 20 заказов в месяц и веду кулинарный YouTube-канал.",
    emoji: "🍰",
    color: "from-red-400 to-orange-400",
  },
];

const resources = [
  { icon: "Globe", title: "Etsy", desc: "Продавай изделия ручной работы по всему миру", tag: "Маркетплейс" },
  { icon: "Music", title: "DistroKid", desc: "Распространяй музыку на все стриминговые платформы", tag: "Музыка" },
  { icon: "Camera", title: "Shutterstock", desc: "Зарабатывай на продаже фото и видео", tag: "Фото/Видео" },
  { icon: "BookOpen", title: "Gumroad", desc: "Продавай цифровые продукты: курсы, книги, пресеты", tag: "Цифровой" },
  { icon: "Users", title: "Boosty", desc: "Монетизируй аудиторию через подписки", tag: "Подписки" },
  { icon: "Zap", title: "Notion", desc: "Организуй работу и создавай продукты", tag: "Продуктивность" },
];

export default function Index() {
  const [activeHobby, setActiveHobby] = useState<number | null>(null);
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="min-h-screen bg-[#FFFBF5] font-montserrat overflow-x-hidden">
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

      {/* CATALOG */}
      <section id="catalog" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 bg-violet-100 text-violet-700 px-4 py-2 rounded-full text-sm font-bold mb-4">
              <span>🗂️</span> Интерактивный каталог
            </div>
            <h2 className="font-black text-4xl md:text-5xl text-gray-900 mb-4">Популярные хобби</h2>
            <p className="text-gray-500 text-lg font-medium">Нажми на любое хобби, чтобы узнать первые шаги</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {hobbies.map((hobby, i) => (
              <div
                key={i}
                onClick={() => setActiveHobby(activeHobby === i ? null : i)}
                className={`cursor-pointer rounded-3xl border-2 transition-all duration-300 overflow-hidden ${
                  activeHobby === i
                    ? "border-orange-400 shadow-xl shadow-orange-100 scale-[1.02]"
                    : "border-transparent bg-white shadow-md hover:shadow-xl hover:scale-[1.01]"
                }`}
              >
                <div className={`p-6 ${activeHobby === i ? `bg-gradient-to-br ${hobby.color}` : "bg-white"}`}>
                  <div className="flex items-start justify-between mb-4">
                    <div className={`w-14 h-14 rounded-2xl flex items-center justify-center text-3xl ${activeHobby === i ? "bg-white/20" : hobby.bg}`}>
                      {hobby.emoji}
                    </div>
                    <span className={`text-xs font-bold px-3 py-1.5 rounded-full ${activeHobby === i ? "bg-white/20 text-white" : "bg-gray-100 text-gray-500"}`}>
                      {hobby.category}
                    </span>
                  </div>
                  <h3 className={`font-black text-xl mb-1 ${activeHobby === i ? "text-white" : "text-gray-900"}`}>
                    {hobby.name}
                  </h3>
                  <div className={`font-bold text-lg ${activeHobby === i ? "text-white/90" : "text-green-600"}`}>
                    {hobby.income}
                  </div>
                </div>

                {activeHobby === i && (
                  <div className="bg-white p-6">
                    <div className="mb-4">
                      <div className="font-black text-gray-900 mb-3 flex items-center gap-2">
                        <Icon name="ListChecks" size={16} /> Первые шаги
                      </div>
                      <div className="space-y-2">
                        {hobby.steps.map((step, j) => (
                          <div key={j} className="flex items-start gap-3">
                            <div className="w-6 h-6 rounded-full bg-orange-100 text-orange-600 text-xs font-black flex items-center justify-center shrink-0 mt-0.5">
                              {j + 1}
                            </div>
                            <span className="text-gray-700 text-sm font-medium">{step}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div>
                      <div className="font-black text-gray-900 mb-3 flex items-center gap-2">
                        <Icon name="Wrench" size={16} /> Инструменты
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {hobby.tools.map((tool, j) => (
                          <span key={j} className="bg-gray-100 text-gray-700 text-xs font-bold px-3 py-1.5 rounded-full">
                            {tool}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* STEPS */}
      <section id="plan" className="py-20 px-6 bg-gray-900">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 bg-orange-500/20 text-orange-400 px-4 py-2 rounded-full text-sm font-bold mb-4">
              <span>🚀</span> Пошаговый план
            </div>
            <h2 className="font-black text-4xl md:text-5xl text-white mb-4">От хобби к доходу</h2>
            <p className="text-gray-400 text-lg font-medium">5 конкретных шагов, которые работают</p>
          </div>

          <div className="space-y-6">
            {steps.map((step, i) => (
              <div key={i} className={`flex items-start gap-6 ${i % 2 === 1 ? "md:flex-row-reverse" : ""}`}>
                <div className="flex-1">
                  <div className="bg-gray-800 rounded-3xl p-6 border border-gray-700 hover:border-orange-500/50 transition-colors">
                    <div className={`w-12 h-12 ${step.color} rounded-2xl flex items-center justify-center font-black text-white text-lg mb-4`}>
                      {step.num}
                    </div>
                    <h3 className="font-black text-xl text-white mb-2">{step.title}</h3>
                    <p className="text-gray-400 font-medium leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TIPS */}
      <section className="py-20 px-6 bg-gradient-to-br from-orange-50 via-white to-pink-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-bold mb-4">
              <span>💡</span> Советы
            </div>
            <h2 className="font-black text-4xl md:text-5xl text-gray-900 mb-4">Развитие и масштабирование</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { emoji: "📱", title: "Социальные сети", tip: "Публикуй процесс работы — это привлекает клиентов лучше, чем реклама готового продукта." },
              { emoji: "🤝", title: "Нетворкинг", tip: "Общайся с коллегами в своей нише. Партнёрства часто приносят больше, чем прямые продажи." },
              { emoji: "📦", title: "Пакетные предложения", tip: "Объединяй услуги в пакеты — это увеличивает средний чек в 2-3 раза." },
              { emoji: "🔄", title: "Пассивный доход", tip: "Создавай цифровые продукты: курсы, шаблоны, гайды. Продаются пока ты спишь." },
              { emoji: "⭐", title: "Отзывы и кейсы", tip: "Собирай отзывы с первых клиентов. 10 отзывов заменяют тысячи рекламных слов." },
              { emoji: "📊", title: "Анализируй результаты", tip: "Каждый месяц смотри, что продаётся лучше. Делай больше того, что работает." },
            ].map((tip, i) => (
              <div key={i} className="bg-white rounded-3xl p-6 shadow-md hover:shadow-xl transition-all hover:-translate-y-1 border border-gray-100">
                <div className="text-4xl mb-4">{tip.emoji}</div>
                <h3 className="font-black text-lg text-gray-900 mb-2">{tip.title}</h3>
                <p className="text-gray-600 font-medium leading-relaxed">{tip.tip}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* STORIES */}
      <section id="stories" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 bg-pink-100 text-pink-700 px-4 py-2 rounded-full text-sm font-bold mb-4">
              <span>🌟</span> Истории успеха
            </div>
            <h2 className="font-black text-4xl md:text-5xl text-gray-900 mb-4">Реальные люди, реальные результаты</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {stories.map((story, i) => (
              <div key={i} className="relative">
                <div className={`bg-gradient-to-br ${story.color} rounded-3xl p-6 text-white mb-4 shadow-xl`}>
                  <div className="text-5xl mb-4">{story.emoji}</div>
                  <p className="font-medium text-white/90 leading-relaxed text-lg italic">"{story.text}"</p>
                </div>
                <div className="bg-white rounded-2xl p-4 shadow-md border border-gray-100 flex items-center justify-between">
                  <div>
                    <div className="font-black text-gray-900">{story.name}</div>
                    <div className="text-gray-500 text-sm font-medium">{story.hobby}</div>
                  </div>
                  <div className="bg-green-50 text-green-700 font-black text-sm px-3 py-2 rounded-xl">
                    {story.income}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* RESOURCES */}
      <section className="py-20 px-6 bg-gray-900">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 bg-teal-500/20 text-teal-400 px-4 py-2 rounded-full text-sm font-bold mb-4">
              <span>🛠️</span> Ресурсы
            </div>
            <h2 className="font-black text-4xl md:text-5xl text-white mb-4">Полезные инструменты</h2>
            <p className="text-gray-400 text-lg font-medium">Проверенные платформы для старта</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {resources.map((res, i) => (
              <div key={i} className="bg-gray-800 rounded-3xl p-6 border border-gray-700 hover:border-teal-500/50 transition-all hover:-translate-y-1 group cursor-pointer">
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 bg-teal-500/10 rounded-2xl flex items-center justify-center group-hover:bg-teal-500/20 transition-colors">
                    <Icon name={res.icon} fallback="Globe" size={22} className="text-teal-400" />
                  </div>
                  <span className="bg-gray-700 text-gray-400 text-xs font-bold px-3 py-1.5 rounded-full">{res.tag}</span>
                </div>
                <h3 className="font-black text-white text-lg mb-2">{res.title}</h3>
                <p className="text-gray-400 font-medium">{res.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-20 px-6 bg-gradient-to-br from-orange-50 via-white to-violet-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 bg-orange-100 text-orange-700 px-4 py-2 rounded-full text-sm font-bold mb-4">
              <span>💌</span> Обратная связь
            </div>
            <h2 className="font-black text-4xl md:text-5xl text-gray-900 mb-4">Остались вопросы?</h2>
            <p className="text-gray-500 text-lg font-medium">Расскажи о своём хобби — помогу найти путь к монетизации</p>
          </div>

          <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 border border-gray-100">
            {sent ? (
              <div className="text-center py-12">
                <div className="text-7xl mb-6">🎉</div>
                <h3 className="font-black text-2xl text-gray-900 mb-3">Сообщение отправлено!</h3>
                <p className="text-gray-500 font-medium">Ответим в течение 24 часов. Твоё хобби уже на пути к монетизации!</p>
                <button
                  onClick={() => setSent(false)}
                  className="mt-6 bg-orange-500 hover:bg-orange-600 text-white font-bold px-6 py-3 rounded-2xl transition-all hover:scale-105"
                >
                  Отправить ещё
                </button>
              </div>
            ) : (
              <form onSubmit={handleSend} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block font-bold text-gray-700 mb-2">Имя</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Как тебя зовут?"
                      className="w-full border-2 border-gray-200 focus:border-orange-400 rounded-2xl px-4 py-3 outline-none font-medium transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block font-bold text-gray-700 mb-2">Email</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="example@mail.ru"
                      className="w-full border-2 border-gray-200 focus:border-orange-400 rounded-2xl px-4 py-3 outline-none font-medium transition-colors"
                    />
                  </div>
                </div>
                <div>
                  <label className="block font-bold text-gray-700 mb-2">Расскажи о своём хобби</label>
                  <textarea
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Что ты любишь делать? Хочешь ли монетизировать? Какие есть вопросы?"
                    rows={4}
                    className="w-full border-2 border-gray-200 focus:border-orange-400 rounded-2xl px-4 py-3 outline-none font-medium transition-colors resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-orange-500 to-pink-500 hover:from-orange-600 hover:to-pink-600 text-white font-black text-lg py-4 rounded-2xl transition-all hover:scale-[1.02] active:scale-[0.98] shadow-lg shadow-orange-200"
                >
                  Отправить сообщение 🚀
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-gray-900 text-gray-400 py-10 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="text-2xl">✨</span>
            <span className="font-black text-white text-xl">ХоббиПро</span>
          </div>
          <p className="text-sm font-medium">Превращаем увлечения в доход с 2024 года</p>
          <div className="flex items-center gap-6 text-sm font-semibold">
            <a href="#catalog" className="hover:text-white transition-colors">Каталог</a>
            <a href="#plan" className="hover:text-white transition-colors">План</a>
            <a href="#contact" className="hover:text-white transition-colors">Контакты</a>
          </div>
        </div>
      </footer>
    </div>
  );
}