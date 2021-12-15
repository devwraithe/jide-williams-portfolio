// import components
import Footer from "../components/footer/footer";
import Header from "../components/header/header";
import Navbar from "../components/navbar/navbar";
// styling
import styles from "../styles/pages/blog.module.scss";

// blog component
const Blog = () => {
  return (
    <div className={styles.blg}>
      <Navbar />
      <div className={styles.medium}>
        <Header className={styles.header}>Coming Soon!</Header>
      </div>
      <div className={styles.ft}>
        <Footer />
      </div>
    </div>
  );
};

// export component
export default Blog;
