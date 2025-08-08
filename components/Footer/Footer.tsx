import css from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={css.footer}>
      <div className={css.content}>
        <p>© {new Date().getFullYear()} NoteHub. All rights reserved.</p>
        <div className={css.wrap}>
          <p>Developer: your name</p>
          <p>
            Contact us:
            <a href="mailto:student@notehub.app">student@notehub.app</a>
          </p>
          <p>
            Created <time dateTime="2025">2025</time>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
