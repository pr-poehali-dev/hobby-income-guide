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

export default function CatalogSection() {
  const [activeHobby, setActiveHobby] = useState<number | null>(null);

  return (
    <>
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
    </>
  );
}
