import { useEffect, useState } from 'react';
import { siteData } from './data/siteData.js';
import './App.css';

function resolvePublicFileUrl(relativePathFromPublic) {
  const base = import.meta.env.BASE_URL;
  const path = String(relativePathFromPublic).replace(/^\/+/, '');
  return `${base}${path}`;
}

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="site-header">
      <div className="site-header__inner">
        <a className="site-logo" href="#hero" onClick={closeMenu}>
          <span className="site-logo__mark" aria-hidden="true" />
          <span className="site-logo__text">{siteData.meta.shortName}</span>
        </a>

        <button
          type="button"
          className="nav-toggle"
          aria-expanded={menuOpen}
          aria-controls="site-navigation"
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span className="nav-toggle__bar" />
          <span className="nav-toggle__bar" />
          <span className="nav-toggle__bar" />
          <span className="visually-hidden">
            {menuOpen ? 'Закрыть меню' : 'Открыть меню'}
          </span>
        </button>

        <nav
          id="site-navigation"
          className={`site-nav ${menuOpen ? 'site-nav--open' : ''}`}
          aria-label="Основная навигация по разделам"
        >
          <ul className="site-nav__list">
            {siteData.navigation.map((item) => (
              <li key={item.id} className="site-nav__item">
                <a className="site-nav__link" href={`#${item.id}`} onClick={closeMenu}>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}

function Footer() {
  return (
    <footer className="site-footer" id="footer">
      <div className="container">
        <div className="site-footer__grid">
          <div>
            <p className="site-footer__org">{siteData.meta.organizationName}</p>
            {siteData.footer.legalLines.map((line) => (
              <p key={line} className="site-footer__line">
                {line}
              </p>
            ))}
          </div>
          <p className="site-footer__disclaimer">{siteData.footer.disclaimer}</p>
        </div>
        <p className="site-footer__meta">
          <a className="site-footer__to-top" href="#hero">
            Наверх
          </a>
        </p>
      </div>
    </footer>
  );
}

export default function App() {
  useEffect(() => {
    document.title = siteData.meta.siteTitle;
  }, []);

  const licensePdfHref = resolvePublicFileUrl(siteData.license.pdfPath);

  return (
    <>
      <Header />

      <main>
        <section className="hero" id="hero" aria-labelledby="hero-title">
          <div className="container hero__inner">
            <div className="hero__content">
              <p className="hero__badge">{siteData.meta.organizationName}</p>
              <h1 id="hero-title" className="hero__title">
                {siteData.hero.headline}
              </h1>
              <p className="hero__lead">{siteData.hero.subheadline}</p>
              <div className="hero__actions">
                <a className="btn btn--primary" href={siteData.hero.primaryCta.href}>
                  {siteData.hero.primaryCta.label}
                </a>
                <a className="btn btn--ghost" href={siteData.hero.secondaryCta.href}>
                  {siteData.hero.secondaryCta.label}
                </a>
              </div>
            </div>
            <div className="hero__panel" aria-hidden="true">
              <ul className="hero__facts">
                {siteData.hero.highlights.map((line) => (
                  <li key={line}>{line}</li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section className="section" id="activity" aria-labelledby="activity-title">
          <div className="container">
            <h2 id="activity-title" className="section__title">
              {siteData.activity.sectionTitle}
            </h2>
            <p className="section__intro">{siteData.activity.intro}</p>
            <ul className="card-grid">
              {siteData.activity.items.map((item) => (
                <li key={item.title} className="info-card">
                  <h3 className="info-card__title">{item.title}</h3>
                  <p className="info-card__text">{item.text}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="section section--alt" id="staff" aria-labelledby="staff-title">
          <div className="container">
            <h2 id="staff-title" className="section__title">
              {siteData.staff.sectionTitle}
            </h2>
            <p className="section__intro">{siteData.staff.intro}</p>
            <div className="staff-list">
              {siteData.staff.workers.map((person) => (
                <article key={person.fullName} className="staff-card">
                  <h3 className="staff-card__name">{person.fullName}</h3>
                  <dl className="staff-card__dl">
                    <div className="staff-card__row">
                      <dt>Должность</dt>
                      <dd>{person.position}</dd>
                    </div>
                    <div className="staff-card__row">
                      <dt>Специальность</dt>
                      <dd>{person.specialty}</dd>
                    </div>
                    <div className="staff-card__row">
                      <dt>Образование</dt>
                      <dd>{person.education}</dd>
                    </div>
                    <div className="staff-card__row">
                      <dt>Учебное заведение</dt>
                      <dd>{person.institution}</dd>
                    </div>
                    <div className="staff-card__row">
                      <dt>Год окончания</dt>
                      <dd>{person.graduationYear}</dd>
                    </div>
                    <div className="staff-card__row">
                      <dt>Квалификация</dt>
                      <dd>{person.qualification}</dd>
                    </div>
                    <div className="staff-card__row">
                      <dt>Категория</dt>
                      <dd>{person.category}</dd>
                    </div>
                    <div className="staff-card__row">
                      <dt>Аккредитация / сертификат</dt>
                      <dd>{person.accreditation}</dd>
                    </div>
                    <div className="staff-card__row">
                      <dt>Стаж</dt>
                      <dd>{person.experienceYears} лет</dd>
                    </div>
                  </dl>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section" id="license" aria-labelledby="license-title">
          <div className="container narrow">
            <h2 id="license-title" className="section__title">
              {siteData.license.sectionTitle}
            </h2>
            <div className="license-block">
              <dl className="license-block__dl">
                <div className="license-block__row">
                  <dt>Номер</dt>
                  <dd>{siteData.license.number}</dd>
                </div>
                <div className="license-block__row">
                  <dt>Дата</dt>
                  <dd>{siteData.license.issueDate}</dd>
                </div>
                <div className="license-block__row">
                  <dt>Кем выдана</dt>
                  <dd>{siteData.license.issuedBy}</dd>
                </div>
                <div className="license-block__row license-block__row--wide">
                  <dt>Описание</dt>
                  <dd>{siteData.license.description}</dd>
                </div>
              </dl>
              <p className="license-block__action">
                <a className="btn btn--primary" href={licensePdfHref} download>
                  {siteData.license.downloadButtonLabel}
                </a>
              </p>
              <p className="license-block__hint">
                После замены файла PDF на актуальный (без изменения имени и относительного пути от
                корня сайта) загрузка по этой кнопке будет отдавать новую редакцию документа.
              </p>
            </div>
          </div>
        </section>

        <section className="section section--alt" id="services" aria-labelledby="services-title">
          <div className="container">
            <h2 id="services-title" className="section__title">
              {siteData.paidServices.sectionTitle}
            </h2>
            <p className="section__intro">{siteData.paidServices.intro}</p>
            <div className="table-wrap">
              <table className="data-table">
                <caption className="visually-hidden">Перечень платных услуг и ориентировочные цены</caption>
                <thead>
                  <tr>
                    <th scope="col">Услуга</th>
                    <th scope="col">Цена</th>
                    <th scope="col">Примечание</th>
                  </tr>
                </thead>
                <tbody>
                  {siteData.paidServices.services.map((row) => (
                    <tr key={row.name}>
                      <td>{row.name}</td>
                      <td>{row.price}</td>
                      <td>{row.note}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <section className="section" id="documents" aria-labelledby="documents-title">
          <div className="container">
            <h2 id="documents-title" className="section__title">
              {siteData.documents.sectionTitle}
            </h2>
            <p className="section__intro">{siteData.documents.intro}</p>
            <ul className="doc-list">
              {siteData.documents.items.map((doc) => (
                <li key={doc.title} className="doc-item">
                  <span className="doc-item__title">{doc.title}</span>
                  <span className="doc-item__note">{doc.note}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="section section--alt" id="patients" aria-labelledby="patients-title">
          <div className="container">
            <h2 id="patients-title" className="section__title">
              {siteData.patients.sectionTitle}
            </h2>
            <ul className="card-grid card-grid--2">
              {siteData.patients.blocks.map((block) => (
                <li key={block.title} className="info-card info-card--soft">
                  <h3 className="info-card__title">{block.title}</h3>
                  <p className="info-card__text">{block.text}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="section" id="contacts" aria-labelledby="contacts-title">
          <div className="container narrow">
            <h2 id="contacts-title" className="section__title">
              {siteData.contacts.sectionTitle}
            </h2>
            <div className="contacts-card">
              <p className="contacts-card__address">{siteData.contacts.address}</p>
              <ul className="contacts-card__phones">
                {siteData.contacts.phones.map((phone) => (
                  <li key={phone}>{phone}</li>
                ))}
              </ul>
              <p className="contacts-card__email">
                E-mail:{' '}
                <a href={`mailto:${siteData.contacts.email}`}>{siteData.contacts.email}</a>
              </p>
              <p className="contacts-card__schedule">{siteData.contacts.schedule}</p>
              <p className="contacts-card__extra">{siteData.contacts.extra}</p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
