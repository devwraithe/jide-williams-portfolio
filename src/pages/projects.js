// import components
import Head from "next/head";
import Image from "next/image";
import React, { useState } from "react";
import Layout from "../components/layout/layout";
import Header from "../components/header/header";
import { Dialog } from "@reach/dialog";
// import styling
import styles from "../styles/pages/projects.module.scss";
// import assets
import fybrr from "../assets/images/fybrr.png";
import storeMapper from "../assets/images/storemapper.png";
import algorandWallet from "../assets/images/algorand.png";

// projects component
const Projects = (props) => {
  let projects = [
    {
      title: "Fybrr",
      description:
        "Fybrr is a full-stack cloud infrastructure for developers and startups in Africa to launch software products quicker and safer. With Fybrr, developers can efficiently deploy, host, scale and secure applications without worrying about infrastructure. Fybrr is highly adaptable and it is easy for users of other platforms to access and control their infrastructure from Fybrr.",
      role: "Software Product Manager/Product Owner responsible for ideation, prototyping, process documentation and the end-to-end development lifecycle.",
      tags: "SaaS/Web Design Tool",
      img: fybrr,
      alt: "fybrr web and saas project",
      deliverables: [
        "A functional cloud hosting platform that makes it easy and affordable for users to host projects",
        "A functional DIY platform for creating several web and mobile app projects in iterative usable models",
        "Development team management",
        "Product documentation",
      ],
      link: "https://fybrr.com/",
    },
    {
      title: "StoreMapper",
      description:
        "Storemapper is a DIY SaaS Store locator web application that helps your customers find your products or services across various locations anywhere in the world. It can be installed in minutes with no coding required.",
      role: "Product Manager playing a hybrid role that cuts across the following roles; Scrum Master, Product Owner and Project Manager. I oversee the daily activities and all teams holistically while ensuring that the metrics stay green.",
      tags: "Software as a Service (SaaS)",
      img: storeMapper,
      alt: "storemapper saas project",
      deliverables: [
        "Platform stability across all website CMS and marketplaces - Shopify, BigCommerce, Magento, Wix, WooCommerce, and custom built sites.",
        "A functional widget that works across all web and mobile devices",
        "Metrics tracking to ensure product financials remain healthy",
        "Resource and cost management across all functional departments",
        "Product documentation",
        "Hiring",
      ],
      link: "https://www.storemapper.com/",
    },
    {
      title: "Algorand",
      description:
        "Algorand is a crypto-currency wallet, built by the team that created the Algorand Blockchain to securely manage Algorand assets while earning rewards",
      role: "Freelance Product Manager that worked on the customer onboarding process for new and existing users to make it easier to personalize their wallets.",
      tags: "Crypto | Web 3.0",
      img: algorandWallet,
      alt: "storemapper saas project",
      deliverables: [
        "Specification documents for personalization feature",
        "User research through interviews and a product audit",
        "Feature rich user stories to be approved by the overall product team",
      ],
      link: "https://algorandwallet.com/",
    },
  ];

  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const expandModal = (project) => {
    setSelectedProject(project);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setSelectedProject(null);
    setModalIsOpen(false);
  };

  return (
    <>
      <Head>
        <title>Jide Williams | Selected Projects</title>
      </Head>
      <div className={styles.prj}>
        <Layout>
          {/* header : open */}
          <Header className={styles.header}>
            <div className={styles.wrap}>Selected Projects</div>
          </Header>
          {/* header : open */}

          {/* projects : open */}
          <div className={styles.list}>
            {projects.map((project) => (
              <div
                key={project.title}
                className={styles.project}
                onClick={() => expandModal(project)}
              >
                <div className={styles.imgOuter}>
                  <Image
                    src={project.img}
                    layout="responsive"
                    alt={project.alt}
                    height="70%"
                    width="100%"
                    objectFit="cover"
                  />
                </div>
                <h2 className={styles.title}>{project.title}</h2>
                <p className={styles.tags}>{project.tags}</p>
              </div>
            ))}
            <Dialog
              isOpen={modalIsOpen}
              onDismiss={closeModal}
              className={styles.modal}
            >
              <div className={styles.closeIcon} onClick={closeModal}>
                Close
              </div>
              <div className={styles.wrap}>
                <div className="col-1">
                  <div className={styles.about}>
                    <h3 className={styles.title}>
                      About {selectedProject && selectedProject.title}
                    </h3>
                    <p className={styles.info}>
                      {selectedProject && selectedProject.description}
                    </p>
                  </div>
                  <div className={styles.role} style={{ marginTop: "1.7em" }}>
                    <h3 className={styles.title}>My Role</h3>
                    <p className={styles.info}>
                      {selectedProject && selectedProject.role}
                    </p>
                  </div>
                </div>
                <div className={styles.col2}>
                  <h3 className={styles.title}>Deliverables</h3>
                  <p className={styles.info}>
                    <ul>
                      {selectedProject &&
                        selectedProject.deliverables.map((deliverable) => (
                          <>
                            <li style={{ marginTop: "10px" }} key={deliverable}>
                              {deliverable}
                            </li>
                          </>
                        ))}
                    </ul>
                    <p style={{ marginTop: "2.2em", fontSize: "1rem" }}>
                      <b>Preview Link</b>
                      {" - "}
                      <a
                        href={selectedProject && selectedProject.link}
                        target="_blank"
                        rel="noreferrer"
                      >
                        {selectedProject && selectedProject.link}
                      </a>
                    </p>
                  </p>
                </div>
              </div>
            </Dialog>
          </div>
        </Layout>
      </div>
    </>
  );
};

// export component
export default Projects;
