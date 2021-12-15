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
import vaarWater from "../assets/images/vw.png";
import healthyEntrepreneurs from "../assets/images/he.png";
import fybrr from "../assets/images/fybrr.png";
import storeMapper from "../assets/images/storemapper.png";
import simplePurchaseOrders from "../assets/images/spo.png";
import motVerz from "../assets/images/mv.png";
import algorandWallet from "../assets/images/algorand.png";
import showLove from "../assets/images/sl.png";
import adReach from "../assets/images/ar.png";
import kongaPay from "../assets/images/kp.png";
import konga from "../assets/images/konga.png";
import micserah from "../assets/images/micserah.png";
import ajeMart from "../assets/images/aje.png";

// projects component
const Projects = (props) => {
  let projects = [
    {
      title: "VaarWater",
      description:
        "VaarWater is a free app which allows people to discover Amsterdam from the water. It provides up-to-date information on the traffic flow on the waterways. Riders can mark points of interest on their screen by dropping a virtual anchor. This will allow navigation and movement on the waters  from 'anchor' to 'anchor'",
      role: "Software Project Manager responsible for the teams working on the mobile apps for VaarWater. I coordinated all the teams, budgets, timelines, stakeholders and project tracking.",
      tags: "Mobile | Transport",
      img: vaarWater,
      alt: "vaar water mobile project",
      deliverables: [
        "Fully functional Android and iOS mobile applications",
        "Team resource management",
        "Stakeholder management",
        "Risk identification and aversion",
      ],
      link: "https://apps.apple.com/us/app/vaarwater/id631323264",
      linkTitle: "Get on Apple Store",
    },
    {
      title: "Healthy Entrepreneurs",
      description:
        "Healthy Entrepreneurs provides basic healthcare where no one else will go. Trained health workers sell health care products and educate their customers from their own mini-pharmacies. Thanks to the efforts of these passionate entrepreneurs, isolated villages transform into strong, healthy, well-informed communities",
      role: "Software Project Manager responsible for the teams working on the fully functional mini-pharm app with USSD protocols to enable offline access in remote areas. I coordinated all the teams, budgets, timelines, stakeholders and project tracking.",
      tags: "MediTech | Mobile",
      img: healthyEntrepreneurs,
      alt: "healthy entrepreneurs project",
      deliverables: [
        "24hours platform stability for all consumer touch points - USSD, Android Mobile Apps",
        "Team resource management",
        "Stakeholder Management",
        "Risk identification and aversion",
      ],
      link: "https://www.healthyentrepreneurs.nl/",
      linkTitle: "https://www.healthyentrepreneurs.nl/",
    },
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
      linkTitle: "https://fybrr.com/",
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
      linkTitle: "https://www.storemapper.com/",
    },
    {
      title: "Simple Purchase Orders",
      description:
        "Simple Purchase Orders is an Inventory Management and Order Fulfilment Shopify Application and it simplifies order fulfillment using automated purchase orders and inventory restocking for Shopify store owners working with dropshipping and wholesale suppliers.",
      role: "Product Manager playing a hybrid role that cuts across the following roles; Scrum Master, Product Owner and Project Manager. I oversee the daily activities and all teams holistically while ensuring that the metrics stay green.",
      tags: "Software as a Service (SaaS)",
      img: simplePurchaseOrders,
      alt: "simple purchase orders saas project",
      deliverables: [
        "Platform stability across all website CMS and marketplaces - Shopify, BigCommerce, Magento, Wix, WooCommerce, and custom built sites.",
        "A functional widget that works across all web and mobile devices",
        "Metrics tracking to ensure product financials remain healthy",
        "Resource and cost management across all functional departments",
        "Product documentation",
        "Hiring",
      ],
      link: "https://www.simplepurchaseorders.com/",
      linkTitle: "https://www.simplepurchaseorders.com/",
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
      linkTitle: "https://algorandwallet.com/",
    },
    {
      title: "Motverz",
      description:
        "MotVerz is a job board I worked on as a personal pet project to just post remote jobs that can be worked from anywhere in the world. Visitors to the website can simply apply directly to roles in any job category of their choice.",
      role: "The entire platform ideation and I currently manage everything about the platform as its one of my personal pet projects to give back to anyone and everyone who needs access to a remote job.",
      tags: "Job Board",
      img: motVerz,
      alt: "motverz job board project",
      deliverables: [
        "Continuous testing of the deployments to ensure all API endpoints remain functional",
        "Stakeholder engagement with all parastatals through the lifecycle of the project",
        "Technical specs for the core development team",
        "Market research and validation",
        "Team management",
        "Product roadmap",
      ],
      link: "https://motverz.com/",
      linkTitle: "https://motverz.com/",
    },
    {
      title: "Showlove",
      description:
        "Showlove is changing the narrative around gifting in Africa by simplifying the art, process and science behind giving, receiving and showing acts of benevolence.",
      role: "Product Manager doubling as Agile Coach responsible for setting up the product, engineering and design teams. I also trained the teams on the usage of Jira for project management and Confluence for documentation and how to apply the usage of these tools towards more seamless internal processes.",
      tags: "Gifting | Ecommerce | Fintech",
      img: showLove,
      alt: "showlove gifting, ecommerce and fintech project",
      deliverables: [
        "Hire right candidates for the product, design and engineering teams",
        "Coaching on the use of Jira",
        "Initial epics specifications for the entire product roadmap",
        "Mobile wallet product roadmap",
        "Stable MVP for the initial launch in April 2021",
      ],
      link: "https://showlove.io/",
      linkTitle: "https://showlove.io/",
    },
    {
      title: "ADReach",
      description:
        "ADReach is an Outdoor Advertising Company that is leading the way in SMME development and business upliftment in South Africa with over 40,000 Street Pole Ads (SPAs) across South Africa",
      role: "Manage a third party web development agency to create an automated process for billboard booking and inventory management for advertising spaces.",
      tags: "Ad Tech",
      img: adReach,
      alt: "adreach adtech project",
      deliverables: [
        "End-to-End product requirement gathering and scope definition",
        "Managing the feature roadmap and backlog",
        "Prototype testing for all designs for approval from management",
        "Complete stakeholder engagement and management",
        "User research and training ",
        "All required documentation for project handover",
      ],
      link: "https://www.adreach.co.za/",
      linkTitle: "https://www.adreach.co.za/",
    },
    {
      title: "KongaPay",
      description:
        "A fintech product that started off as a solution to merchant payouts within the ecommerce marketplace but soon became a household mobile money and bill payments solution.",
      role: "Stakeholder management, developer engagement, user experience and product support liaison.",
      tags: "FinTech",
      img: kongaPay,
      alt: "kongapay fintech project",
      deliverables: [
        "Continuous user and revenue growth",
        "Managing the Direct Integration Partnerships with billers across Africa",
        "Vetting all User Acceptance Test (UAT) documentations",
        "Customer Satisfaction",
      ],
      link: "https://www.kongapay.com/",
      linkTitle: "https://www.kongapay.com/",
    },
    {
      title: "Konga",
      description:
        "One of the first and largest ecommerce marketplaces in Africa with thousands of merchants and hundreds of thousands of customers.",
      role: "Senior Product Manager",
      tags: "Ecommerce",
      img: konga,
      alt: "konga ecommerce project",
      deliverables: ["NULL"],
      link: "https://www.konga.com/?k_id=willsdeals",
      linkTitle: "https://www.konga.com/?k_id=willsdeals",
    },
    {
      title: "Micserah",
      description:
        "An ecommerce platform that started off as a marketplace but eventually became an online retail store for lifestyle brands and high end fashion accessories and wrist watches.",
      role: "Senior Product Manager",
      tags: "Ecommerce",
      img: micserah,
      alt: "micserah ecommerce project",
      deliverables: ["NULL"],
      link: "https://micserah.com/",
      linkTitle: "https://micserah.com/",
    },
    {
      title: "Aje Mart",
      description:
        "An online marketplace that connects farmers and local producers directly with the end consumers of their products.",
      role: "Senior Product Manager",
      tags: "Ecommerce and AgriTech",
      img: ajeMart,
      alt: "ajemart ecommerce project",
      deliverables: ["NULL"],
      link: "https://ajemart.com/",
      linkTitle: "https://ajemart.com/",
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
                        {selectedProject && selectedProject.linkTitle}
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
