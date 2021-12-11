// import styling
import styles from "./footer.module.scss";

// footer component
const Footer = () => {
  return (
    <footer className={styles.ft}>
      &copy;Jide Williams | Sr Product Manager |{" "}
      <a href="https://devwraithe.web.app" className={styles.link}>
        View Resume
      </a>
    </footer>
  );
};

// export component
export default Footer;
