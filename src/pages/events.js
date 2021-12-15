// import components
import Footer from "../components/footer/footer";
import Header from "../components/header/header";
import Navbar from "../components/navbar/navbar";
import styles from "../styles/pages/events.module.scss";

// events component
const Events = () => {
  return (
    <div className={styles.evt}>
      <Navbar />
      <div className={styles.evtbrite}>
        <Header className={styles.header}>
          <a
            href="https://eventbrite.ca/o/jide-williams-17298305413"
            passHref
            target="_blank"
            rel="noreferrer"
          >
            <u>Visit EventBrite</u>
          </a>
        </Header>
      </div>
      <div className={styles.ft}>
        <Footer />
      </div>
    </div>
  );
};

// export component
export default Events;
