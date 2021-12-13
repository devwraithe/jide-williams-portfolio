// import components
import Head from "next/head";
import Image from "next/image";
import Layout from "../components/layout/layout";
import Header from "../components/header/header";
// import styling
import styles from "../styles/pages/about.module.scss";
// import assets
import jidePhoto from "../assets/images/jide-williams.png";

// about component
const About = () => {
  return (
    <>
      <Head>
        <title>Jide Williams | About Jide</title>
      </Head>
      <div className={styles.abt}>
        <Layout>
          <Header>
            <div className={styles.wrap}>About Jide</div>
          </Header>

          <section className={styles.brief}>
            <h1 className={styles.title}>Senior Product Manager</h1>
            <h2 className={styles.subtitle}>
              Data-Driven, Detail-Oriented, Problem Solver
            </h2>
          </section>

          <section className={styles.bio}>
            <div className={styles.wrap}>
              <div className={styles.details}>
                <h1 className={styles.title}>Jide{"'"}s Bio</h1>
                <div className={styles.info}>
                  <p>I didn’t set out to build products.</p>
                  <p>
                    For the longest time, I imagined myself as an Astronaut. I
                    wanted to go to space - I still want to go to space but as
                    life would have it, I got my first stint at building a
                    product back in 2013 and I have never looked back since
                    then.
                  </p>
                  <p>
                    I explored some other career paths in sales, business
                    development and customer success but I always found my way
                    back to building and shipping products but these paths
                    shaped my love for the end users of platforms and products I
                    build/manage.
                  </p>
                  <p>
                    While meeting several business targets, goals and metrics,
                    it is also important to craft unique user experiences with
                    data as the back-bone of every decision.
                  </p>
                  <p>
                    Over the years, I have recorded some remarkable failures but
                    I also have some outstanding successes. I have sold 2
                    startups at a small scale and worked across multiple
                    business industries but in recent times, I have been
                    exploring web3, metaverse, IoT and several gaming projects.
                  </p>
                </div>
              </div>
              <div className={styles.img}>
                <Image
                  src={jidePhoto}
                  alt="jide williams photo"
                  height={120}
                  width="100%"
                  layout="responsive"
                  objectFit="cover"
                />
              </div>
            </div>
          </section>

          <section className={styles.skilltools}>
            <div className={styles.wrap}>
              <div className={styles.containOne}>
                <div className={styles.testimonial}>
                  <h1 className={styles.title}>Testimonial</h1>
                  <div className={styles.msg}>
                    “We needed to validate our ideas, market-size,
                    customer-market fit and other important metrics and there
                    was Jide telling us not to waste our time or effort on our
                    light bulb idea! A few weeks and some global updates later,
                    we realized we had made the best decision not to go with our
                    emotions. Till date, I always get his counsel before
                    building anything!”
                  </div>
                  <div className={styles.author}>
                    - Jake Jason Timm - Founder and CEO, Hakuna Technologies, NL
                  </div>
                </div>
                <div className={styles.education}>
                  <h1 className={styles.title}>
                    Education {"&"} Certifications
                  </h1>
                  <div className={styles.msg}>
                    <p>
                      - Certificate in Information Technology | British Computer
                      Society (BCS) | Aug. 2021
                    </p>
                    <p>- MBA | Nexford University | Dec. 2020</p>
                    <p>- PMP | Project Management Institute (PMI) | Dec 2020</p>
                    <p>- B.Sc Geography | UNILAG | May 2011</p>
                  </div>
                </div>
              </div>
              <div className={styles.nworthy}>
                <h1 className={styles.title}>Skills {"&"} Tools</h1>
                <div className={styles.containTwo}>
                  <div className={styles.skills}>
                    <h3 className={styles.subtitle}>Skills</h3>- SCRUM {"&"}{" "}
                    Agile Methodology
                    <br /> - Complete Product Lifecycle
                    <br /> - Product Pricing
                    <br /> - Creating User Personas and Journey Maps
                    <br /> - Conducting User Interviews
                    <br /> - Market Research and Validation
                    <br /> - Design {"&"} UX Principles
                  </div>

                  <div className={styles.skills}>
                    <h3 className={styles.subtitle}>Tools</h3>- Azure DevOps,
                    Jira, Clickup, Asana, Trello {"&"} more
                    <br />- Google Apps - Analytics, Sheets, Docs, Slide,
                    Calendar, Mail {"&"} more
                    <br />- Figma, Miro, ProductBoard, InVision, Slack, Discord,
                    Intercom, Salesforce, Mailchimp, Airtable, Typeform {
                      "&"
                    }{" "}
                    more.
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className={styles.contact}>
            <h1 className={styles.title}>Connect with Jide</h1>
            <div className={styles.info}>
              I am open to discussions around work opportunities
              <br className={styles.cbr} /> or side projects. I’d also be happy
              to give my input or <br className={styles.cbr} />
              feedback on any ideas you need to get out of your
              <br className={styles.cbr} />
              head and I will ensure I respond in record time.
            </div>
            <div className={styles.links}>
              <a
                href="mailto:jidewils@gmail.com"
                className={styles.link}
                target="_blank"
                rel="noreferrer"
              >
                Send an Email
              </a>{" "}
              <span className={styles.split}> or </span>
              <a
                href="https://www.linkedin.com/in/jidewils/"
                className={styles.link}
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn Connect
              </a>
            </div>
          </section>
        </Layout>
      </div>
    </>
  );
};

// export component
export default About;
