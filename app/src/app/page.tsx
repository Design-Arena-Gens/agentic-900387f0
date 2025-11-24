import styles from "./page.module.css";

const collections = [
  {
    title: "Линия «Monolith»",
    description:
      "Скульптурные диваны и кресла с бесшовной обивкой из итальянской шерсти. Чёткая геометрия для статусных пространств.",
    tag: "Для гостиной",
  },
  {
    title: "Коллекция «Nordic Calm»",
    description:
      "Модульные системы хранения из массива ясеня и термодуба. Тёплая палитра и тактильные поверхности для камерных интерьеров.",
    tag: "Спальни и кабинеты",
  },
  {
    title: "Линия «Aero Loft»",
    description:
      "Минималистичные обеденные группы с компактными формами, анодированным алюминием и каменной столешницей.",
    tag: "Кухни и dining",
  },
];

const features = [
  {
    title: "Экологичные материалы",
    description:
      "Используем FSC-дерево, органические ткани и лакокрасочные материалы без запаха. Каждый сертификат включён в паспорт изделия.",
  },
  {
    title: "Дизайн-проект за 7 дней",
    description:
      "Команда архитекторов создаёт 3D-визуализации, подбирает отделку и декор под ваш сценарий жизни.",
  },
  {
    title: "Ручная сборка в Москве",
    description:
      "Собственное производство и контроль качества на каждом этапе — от каркаса до упаковки.",
  },
];

const testimonials = [
  {
    quote:
      "Monoluxe создали для нашего пентхауса мебель, которая выглядит как произведение искусства. Особенно впечатлил сервис — команда сопровождала нас до финальной установки.",
    name: "Ольга и Максим",
    role: "проект в клубном доме «Садовая 10»",
  },
  {
    quote:
      "Наш семейный дом стал намного функциональнее. Модульные решения позволили адаптировать пространство под детей и работу из дома.",
    name: "Анастасия",
    role: "коттедж в Жуковке",
  },
];

export default function Home() {
  return (
    <div className={styles.page}>
      <header className={styles.hero}>
        <div className={styles.heroContent}>
          <span className={styles.heroBadge}>Monoluxe Interior</span>
          <h1>
            Авторская мебель, которая задаёт стиль вашему пространству.
          </h1>
          <p>
            Создаём мебель по вашим размерам, подбираем материалы и фактуры,
            доставляем и монтируем без стресса. Для квартир, пентхаусов и
            бутиков с характером.
          </p>
          <div className={styles.heroActions}>
            <a className={styles.primaryButton} href="#consultation">
              Получить консультацию
            </a>
            <a className={styles.secondaryButton} href="#collections">
              Смотреть коллекции
            </a>
          </div>
          <dl className={styles.heroStats}>
            <div>
              <dt>12 лет</dt>
              <dd>Создаём мебель премиум-класса под заказ</dd>
            </div>
            <div>
              <dt>240+ проектов</dt>
              <dd>Реализовано с дизайнерами России и Европы</dd>
            </div>
            <div>
              <dt>5 лет гарантии</dt>
              <dd>Полное сервисное обслуживание</dd>
            </div>
          </dl>
        </div>
        <div className={styles.heroShowcase}>
          <div className={styles.showcaseCard}>
            <span>Новинка</span>
            <strong>Коллекция «Monolith»</strong>
            <p>Скульптурные формы, тактильные материалы и ручная сборка.</p>
          </div>
          <div className={styles.showcaseBackdrop} />
        </div>
      </header>

      <main className={styles.main}>
        <section id="collections" className={styles.section}>
          <div className={styles.sectionHeader}>
            <span>Коллекции сезона</span>
            <h2>Выберите характер вашего пространства</h2>
            <p>
              Каждая коллекция создаётся ограниченным тиражом, доступна в трёх
              палитрах и адаптируется под планировку вашего объекта.
            </p>
          </div>
          <div className={styles.cardsGrid}>
            {collections.map((collection) => (
              <article key={collection.title} className={styles.collectionCard}>
                <div className={styles.cardTag}>{collection.tag}</div>
                <h3>{collection.title}</h3>
                <p>{collection.description}</p>
                <button type="button" className={styles.linkButton}>
                  Заказать презентацию →
                </button>
              </article>
            ))}
          </div>
        </section>

        <section className={styles.section}>
          <div className={styles.sectionHeader}>
            <span>Почему выбирают Monoluxe</span>
            <h2>Сервис полного цикла — от идеи до установки</h2>
            <p>
              Мы берём на себя проектирование, производство и монтаж, чтобы вы
              получили продуманное пространство без компромиссов.
            </p>
          </div>
          <div className={styles.features}>
            {features.map((feature) => (
              <article key={feature.title}>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className={styles.section}>
          <div className={styles.sectionHeader}>
            <span>Отзывы клиентов</span>
            <h2>Истории интерьеров, созданных вместе</h2>
          </div>
          <div className={styles.testimonials}>
            {testimonials.map((testimonial) => (
              <blockquote key={testimonial.name}>
                <p>“{testimonial.quote}”</p>
                <footer>
                  <strong>{testimonial.name}</strong>
                  <span>{testimonial.role}</span>
                </footer>
              </blockquote>
            ))}
          </div>
        </section>

        <section id="consultation" className={styles.ctaSection}>
          <div>
            <span>Персональный проект</span>
            <h2>Расскажите о вашем пространстве — подготовим предложение</h2>
            <p>
              Менеджер свяжется в течение рабочего дня, соберёт референсы и
              подготовит подборку решений для вашего интерьера.
            </p>
          </div>
          <form className={styles.form}>
            <label>
              Имя
              <input type="text" name="name" placeholder="Екатерина" />
            </label>
            <label>
              Телефон
              <input type="tel" name="phone" placeholder="+7 (___) ___-__-__" />
            </label>
            <label>
              Город или объект
              <input type="text" name="city" placeholder="Москва, ЖК «Река»" />
            </label>
            <label>
              Формат проекта
              <select name="type" defaultValue="">
                <option value="" disabled>
                  Выберите
                </option>
                <option>Квартира</option>
                <option>Дом</option>
                <option>Офис</option>
                <option>Коммерческий объект</option>
              </select>
            </label>
            <button type="submit" className={styles.primaryButton}>
              Отправить заявку
            </button>
          </form>
        </section>
      </main>

      <footer className={styles.footer}>
        <div>
          <strong>Monoluxe Interior</strong>
          <p>Авторская мебель и декор. Производство в Москве с 2012 года.</p>
        </div>
        <div className={styles.footerContacts}>
          <a href="tel:+74952100011">+7 (495) 210-00-11</a>
          <a href="mailto:studio@monoluxe.ru">studio@monoluxe.ru</a>
        </div>
        <p className={styles.footerNote}>
          © {new Date().getFullYear()} Monoluxe Interior. Все права защищены.
        </p>
      </footer>
    </div>
  );
}
