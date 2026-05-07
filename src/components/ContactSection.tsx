import { useState } from "react";

export default function ContactSection() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <>
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
    </>
  );
}
