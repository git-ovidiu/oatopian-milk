import {
  Button_slide,
  Footer_Card,
  Footer_link,
} from "@git-ovidiu/nextjs-component-library";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import styles from "./Footer.module.scss";

export default function Footer(props) {
  return (
    <div className={styles.o_footer}>
      <div className="container">
        <div className="row">
          <div className="col-md-4">{props.footer_card}</div>
          <div className="col-md-4">
            <Footer_link link={<Link href="https://www.google.com">cacat</Link>} link_type="main" />
          </div>
        </div>
      </div>
    </div>
      // test
      // test
  );
}
