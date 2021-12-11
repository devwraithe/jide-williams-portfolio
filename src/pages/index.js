// import components
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Layout from "../components/layout/layout";
import Header from "../components/header/header";
// import styling
import styles from "../styles/pages/home.module.scss";
// import assets
import saasIcon from "../assets/images/saas.png";
import fintechIcon from "../assets/images/fintech.png";
import ecommerceIcon from "../assets/images/ecommerce.png";
import analysisIcon from "../assets/images/analysis.png";

// home component
const Home = () => {
  return (
    <>
      <Head>
        <title>
          Jide Williams | Product Manager - Event Host - Bad Singer - Average
          Cook
        </title>
      </Head>
      <div className={styles.hm}>
        <Layout>
          {/* header : open */}
          <Header className={styles.header}>
            <div className={styles.wrap}>
              - Jide is a Senior Product Manager, Event Host,{" "}
              <br className={styles.hbr} />
              Bad Singer and Average Cook in Lagos -
            </div>
          </Header>
          {/* header : open */}

          {/* experience : open */}
          <section className={styles.experience}>
            <div className={styles.wrap}>
              <div className={`${styles.item} ${styles.one}`}>
                <Image
                  src={saasIcon}
                  alt="saas experience icon"
                  width={130}
                  height={130}
                />
              </div>
              <div className={`${styles.item} ${styles.two}`}>
                <Image
                  className={styles.image}
                  src={fintechIcon}
                  alt="fintech experience icon"
                  width={130}
                  height={130}
                />
              </div>
              <div className={`${styles.item} ${styles.three}`}>
                <Image
                  src={ecommerceIcon}
                  alt="ecommerce experience icon"
                  width={130}
                  height={130}
                />
              </div>
              <div className={`${styles.item} ${styles.four}`}>
                <Image
                  src={analysisIcon}
                  alt="analysis experience icon"
                  width={130}
                  height={130}
                />
              </div>
            </div>
          </section>

          <section className={styles.testimonial}>
            <div className={styles.wrap}>
              <div className={styles.msg}>
                “Jide is loaded with imaginative excitement, and consistently
                draws an obvious conclusion regarding the current work and his
                continuous investigation of new tech, novel thoughts, new
                initiatives and bright individuals. Jide isn{"'"}t reluctant to
                investigate new domains and thoughts and he is certainly perhaps
                the most liberal person I{"'"}ve met in sharing knowledge and
                setting out open doors for other people”
              </div>
              <div className={styles.author}>
                - Nicolas Waern, Founder and Chief Executive Officer, WINNIO
              </div>
            </div>
          </section>

          <section className={styles.about}>
            <Link href="/about" passHref>
              <button className={styles.btn}>About Jide</button>
            </Link>
          </section>
        </Layout>
      </div>
    </>
  );
};

// export component
export default Home;
