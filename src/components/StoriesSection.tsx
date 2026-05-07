import Icon from "@/components/ui/icon";

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

export default function StoriesSection() {
  return (
    <>
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
    </>
  );
}
