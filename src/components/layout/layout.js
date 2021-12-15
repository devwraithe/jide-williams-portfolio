// import components
import Navbar from "../navbar/navbar";
import Footer from "../footer/footer";
// import styling
import styles from "./layout.module.scss";

// layout component
const Layout = ({ children }) => {
  const onLoadRemoveClass = () => {
    let body = document.querySelector("body");
    body.classList.remove("no-scroll");
  };
  return (
    <div className={styles.lyt} onLoad={onLoadRemoveClass}>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

// export component
export default Layout;
