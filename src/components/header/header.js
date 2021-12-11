// import styling
import styles from "./header.module.scss";

// header component
const Header = ({ children }) => {
  return (
    <header className={styles.hdr}>
      <div className={styles.wrap}>
        <h1 className={styles.title}>{children}</h1>
      </div>
    </header>
  );
};

// export component
export default Header;
