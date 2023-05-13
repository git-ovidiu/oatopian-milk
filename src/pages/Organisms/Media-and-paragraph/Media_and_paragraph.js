import React from "react";
import styles from "./Media_and_paragraph.module.scss";
import { motion } from "framer-motion";

export default function Media_and_paragraph(props) {
  return (
    <>
      <div className={`${styles.o_media_and_paragraph}`}>
        <div className="container">
          <div
            className={`row ${styles.row} ${
              props.reverse ? "flex-md-row-reverse" : ""
            }`}
          >
            <motion.div
              initial={{ opacity: 0, x: props.reverse ? 300 : -300 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.37, delay: 0.5 }}
              viewport={{once: true}}
              className={`${styles.o_media_and_paragraph__image_container} col-12 col-md-6 `}
            >
              {props.image}
            </motion.div>
            <div
              className={`${styles.o_media_and_paragraph__content_container} col-12 col-md-6`}
            >
              {props.content}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
