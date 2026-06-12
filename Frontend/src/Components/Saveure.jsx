import { Section } from "./Section"
import { ConditionCard } from "./ConditionCard"

export default function Saveur() {

  const tasks = [
    "Разработка и поддержка пользовательских интерфейсов на React",
    "Написание чистого, масштабируемого TypeScript-кода",
    "Интеграция с REST API и работа с данными в реальном времени",
    "Участие в код-ревью и улучшении архитектуры фронтенда",
    "Тесное взаимодействие с дизайнерами и бэкенд-командой",
  ]

  const perks = [
    "Молодая и амбициозная команда — работаем над реальным AI-продуктом",
    "Обучение за счёт компании: курсы, конференции, книги",
    "Оплата хакатонов и профессиональных мероприятий",
    "Оформление через ИП",
    "Выдача доступов к AI-сервисам (ChatGPT, Claude, Midjourney и др.)",
  ]

  return (
    <div className="min-h-screen  flex items-start justify-center py-10 px-4 bg-[#f5f5f3]">
      <div className="w-full max-w-3xl border border-[#2a3a50] rounded-2xl overflow-hidden ">

        <div className="relative  px-8  pb-7 bg-[#1e2a3a] bg-[radial-gradient(rgba(203,213,225,0.1)_1px,transparent_3px)] bg-size-[40px_40px]">

          <div className="absolute -top-10 -right-16 sm:-top-14 sm:-right-14 w-35 h-35 sm:w-43 sm:h-43 rounded-full bg-[#c9a84c]" />

          <div className="relative ">
            <div className="text-2xl font-bold text-white mb-1">
              SAVEUR<span className="text-[#c9a84c] text-5xl">.</span>
            </div>
            <div className="text-xs text-[#8a9db5] mb-4">
              saveur.tech • AI для ресторанного бизнеса
            </div>

            <div className="h-px bg-[#c9a84c] mb-4" />

            <div className="text-[22px] font-bold text-white mb-1">
              Предложение о работе
            </div>
            <div className="text-[15px] font-bold text-[#c9a84c]">
              Junior Frontend Developer
            </div>
          </div>
        </div>

        <div className="flex justify-center w-full mt-5 px-5">

          <div className="bg-white flex border px-4 py-3 border-[#e0e0dc] rounded-2xl">
            <span >
              Мы рады предложить вам присоединиться к команде Saveur — технологической компании,
              которая разрабатывает AI-решения для автоматизации и масштабирования ресторанного
              бизнеса. Мы верим, что вы станете ценным участником нашей команды.
            </span>
          </div>
        </div>
        <div className=" px-8 py-5">
          <div className="text-lg font-bold text-black mb-3 border-b-2 w-fit border-b-[#c9a84c]">
            Условия работы
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            <ConditionCard title="85 000 ₽ / месяц" label="Заработная плата" lines={["Белая зарплата", "Выплата 1 раз в месяц"]} />
            <ConditionCard title="Свободный график" label="График работы" lines={["Работайте в удобное время", "Главное — результат"]} />
            <ConditionCard title="Полностью удалённо" label="Формат работы" lines={["100% remote", "Работа из любой точки мира"]} />
            <ConditionCard title="Рост до Middle" label="Карьерный рост" lines={["Ревью каждые 6 месяцев", "Путь до Middle за 1–1.5 года"]} />
          </div>
        </div>

        <Section title="Ваши задачи" items={tasks} />
        <Section title="Что мы предлагаем" items={perks} />


        <div
          className="px-6 py-5 bg-[#1e2a3a]">
          <span className="text-[12px] text-zinc-400 sm:justify-between sm:flex  w-full">
            saveur.tech  <p>Настоящий документ является официальным предложением о работе · © 2025 Saveur Technologies </p>
          </span>
          <span className="text-xs flex justify-center text-[#57633c]">
            Срок действия оффера: 7 календарных дней с даты получения
          </span>
        </div>

      </div>
    </div>
  );
}
