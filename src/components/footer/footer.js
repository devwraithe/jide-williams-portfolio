// import styling
import styles from "./footer.module.scss";

// footer component
const Footer = () => {
  return (
    <footer className={styles.ft}>
      &copy;Jide Williams | Sr Product Manager |{" "}
      <a
        href="https://drive.google.com/file/d/190IGC0wu_zmTLU7al0qUKgJsquNUh--h/view?usp=sharing"
        className={styles.link}
        passHref
        target="_blank"
        rel="noreferrer"
      >
        View Resume
      </a>
    </footer>
  );
};

// export component
export default Footer;
