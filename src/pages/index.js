// import components
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Layout from "../components/layout/layout";
import Header from "../components/header/header";
// import styling
import styles from "../styles/pages/home.module.scss";
// import assets
import creativity from "../assets/images/creativity.png";
import design from "../assets/images/design.png";
import shipping from "../assets/images/shipping.png";
import rocket from "../assets/images/rocket.png";

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
              {/* - Jide is a Senior Product Manager, Event Host,{" "}
              <br className={styles.hbr} />
              Bad Singer and Average Cook in Lagos - */}
              - Jide is a Senior Product Manager, an Event Host and a Bad Singer
              with Average Cooking skills -
            </div>
          </Header>
          {/* header : open */}

          {/* experience : open */}
          <section className={styles.experience}>
            <div className={styles.wrap}>
              <div className={styles.item}>
                <Image src={creativity} alt="s" width={160} height={160} />
                <h4 className={styles.title}>Ideation {"&"} Research</h4>
              </div>
              <div className={styles.item}>
                <Image src={design} alt="s" width={160} height={160} />
                <h4 className={styles.title}>Validate {"&"} Prototype</h4>
              </div>
              <div className={styles.item}>
                <Image src={shipping} alt="s" width={160} height={160} />
                <h4 className={styles.title}>Build {"&"} Ship</h4>
              </div>
              <div className={styles.item}>
                <Image src={rocket} alt="s" width={160} height={160} />
                <h4 className={styles.title}>Expand {"&"} Scale</h4>
              </div>
              {/* <div className={`${styles.item} ${styles.one}`}>
                <Image
                  src={saasIcon}
                  alt="saas experience icon"
                  width={130}
                  height={130}
                />
              </div> */}
              {/* <div className={`${styles.item} ${styles.two}`}>
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
              </div> */}
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
