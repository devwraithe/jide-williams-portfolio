// import components
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState, useRef } from "react";
// import styling
import styles from "./navbar.module.scss";

// navbar component
const Navbar = () => {
  const router = useRouter();
  const overlayDropRef = useRef(0);
  const [overlayActive, setOverlayActive] = useState(false);

  const onClickOpenOverlay = () => {
    let body = document.querySelector("body");
    setOverlayActive(!overlayActive);
    if (!overlayActive) {
      body.classList.add("no-scroll");
    } else {
      body.classList.remove("no-scroll");
    }
  };

  return (
    <nav className={styles.nav}>
      <div className={styles.brand}>
        <Link href="/" passHref>
          <a className={styles.logoLink}>Jide Williams</a>
        </Link>
      </div>
      {/* large devices */}
      <div className={styles.smNone}>
        <span className={styles.link}>
          <Link href="/">
            <a
              className={
                router.pathname == "/" ? `${styles.active}` : `${styles.anchor}`
              }
            >
              Home
            </a>
          </Link>
        </span>
        <span className={styles.link}>
          <Link href="/about">
            <a
              className={
                router.pathname == "/about"
                  ? `${styles.active}`
                  : `${styles.anchor}`
              }
            >
              About
            </a>
          </Link>
        </span>
        <span className={styles.link}>
          <Link href="/projects">
            <a
              className={
                router.pathname == "/projects"
                  ? `${styles.active}`
                  : `${styles.anchor}`
              }
            >
              Projects
            </a>
          </Link>
        </span>
        <span className={styles.link}>
          {/* <Link href="/events">
            <a
              className={
                router.pathname == "/events"
                  ? `${styles.active}`
                  : `${styles.anchor}`
              }
            >
              Events
            </a>
          </Link> */}
          <Link
            href="https://eventbrite.ca/o/jide-williams-17298305413"
            passHref
            target="_blank"
            rel="noreferrer"
          >
            <a
              className={
                router.pathname ==
                "https://eventbrite.ca/o/jide-williams-17298305413"
                  ? `${styles.active}`
                  : `${styles.anchor}`
              }
              passHref
              target="_blank"
              rel="noreferrer"
            >
              Events
            </a>
          </Link>
        </span>
        <span className={styles.link}>
          {/* <Link href="/blog">
            <a
              className={
                router.pathname == "/blog"
                  ? `${styles.active}`
                  : `${styles.anchor}`
              }
            >
              Blog
            </a>
          </Link> */}
          <Link
            href="https://medium.com/@jidewils_"
            passHref
            target="_blank"
            rel="noreferrer"
          >
            <a
              className={
                router.pathname == "https://medium.com/@jidewils_"
                  ? `${styles.active}`
                  : `${styles.anchor}`
              }
              passHref
              target="_blank"
              rel="noreferrer"
            >
              Blog
            </a>
          </Link>
        </span>
      </div>

      {/* small devices */}
      <div
        className={`${styles.menu} ${styles.lgNone}`}
        onClick={onClickOpenOverlay}
      >
        {overlayActive ? "Close" : "Menu"}
      </div>

      <div
        className={`${overlayActive ? styles.overlay : styles.inactive} ${
          styles.lg_none
        }`}
        ref={overlayDropRef}
      >
        <div className={styles.links}>
          <div className={styles.link}>
            <Link href="/">
              <a
                className={
                  router.pathname == "/"
                    ? `${styles.active}`
                    : `${styles.anchor}`
                }
              >
                Home
              </a>
            </Link>
          </div>
          <div className={styles.link}>
            <Link href="/about">
              <a
                className={
                  router.pathname == "/about"
                    ? `${styles.active}`
                    : `${styles.anchor}`
                }
              >
                About
              </a>
            </Link>
          </div>
          <div className={styles.link}>
            <Link href="/projects">
              <a
                className={
                  router.pathname == "/projects"
                    ? `${styles.active}`
                    : `${styles.anchor}`
                }
              >
                Projects
              </a>
            </Link>
          </div>
          <div className={styles.link}>
            {/* <Link href="/events">
              <a
                className={
                  router.pathname == "/events"
                    ? `${styles.active}`
                    : `${styles.anchor}`
                }
              >
                Events
              </a>
            </Link> */}
            <Link
              href="https://eventbrite.ca/o/jide-williams-17298305413"
              passHref
              target="_blank"
              rel="noreferrer"
            >
              <a
                className={
                  router.pathname ==
                  "https://eventbrite.ca/o/jide-williams-17298305413"
                    ? `${styles.active}`
                    : `${styles.anchor}`
                }
                passHref
                target="_blank"
                rel="noreferrer"
              >
                Events
              </a>
            </Link>
          </div>

          <div className={styles.link}>
            {/* <Link href="/blog">
              <a
                className={
                  router.pathname == "/blog"
                    ? `${styles.active}`
                    : `${styles.anchor}`
                }
              >
                Blog
              </a>
            </Link> */}
            <Link
              href="https://medium.com/@jidewils_"
              passHref
              target="_blank"
              rel="noreferrer"
            >
              <a
                className={
                  router.pathname == "https://medium.com/@jidewils_"
                    ? `${styles.active}`
                    : `${styles.anchor}`
                }
                passHref
                target="_blank"
                rel="noreferrer"
              >
                Blog
              </a>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

// export component
export default Navbar;
