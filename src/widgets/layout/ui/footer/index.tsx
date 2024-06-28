import React from "react";
import styles from "./styles.module.css";
import FooterImg from "../../../../shared/assets/image 13.svg";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className={styles["footer"]}>
      <Image
        style={{
          width: "100%",
        }}
        alt="Flower Picture"
        src={FooterImg}
      ></Image>
    </footer>
  );
};

export default Footer;
