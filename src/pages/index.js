import React, { useState, useEffect } from "react";
import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "components/styles/Home.module.scss";
import { Animated_text } from "@git-ovidiu/nextjs-component-library";
import { Media_component } from "@git-ovidiu/component-library";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {

  return (
    <>
      <div className={`container-fluid ${styles.banner}`}>
        <div className="row">
            <Media_component
              autoPlay
              controls
              image={
                <div className={styles.mediaContainer}>
                  <Image
                    alt="placeholder"
                    src="https://res.cloudinary.com/dfddk8jjr/image/upload/v1682261650/header-media-image_ct8h12.webp"
                    quality={100}
                    style={{
                      objectFit: "cover",
                      overflow: "auto",
                      objectPosition: "auto",
                    }}
                    layout="fill"
                  />
                  <div className={styles.animatedText}>
                    <Animated_text text="OATOPIA" variant="h1" />
                  </div>
                </div>
              }
              loop
              muted
              playsInline
              video=""
            />
        </div>
      </div>

      <div className="container">
        <div className={`row ${styles.row}`}>
          <div className={`col-12 col-md-6 ${styles.mediaLeft}`}>
            <Media_component
              autoPlay
              controls
              image={
                <Image
                  alt="placeholder"
                  src="https://res.cloudinary.com/dfddk8jjr/image/upload/v1682273896/chia_seeds_glass_jvzkyi.webp"
                  quality={100}
                  style={{
                    objectFit: "cover",
                    overflow: "auto",
                    objectPosition: "auto",
                  }}
                  layout="fill"
                />
              }
              loop
              muted
              playsInline
              video=""
            />
          </div>
          <div className={`col-12 col-sm-6 ${styles.textColumn}`}>
            <Animated_text text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure officia cumque, facere nemo dolorem illo sequi veniam." variant="h1" />
          </div>
        </div>

        <div className={`row ${styles.row}`}>
        <div className={`col-12 col-sm-6 ${styles.textColumn}`}>
            <Animated_text text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure officia cumque, facere nemo dolorem illo sequi veniam." variant="h1" />
          </div>
          <div className={`col-12 col-md-6 ${styles.mediaLeft}`}>
            <Media_component
              autoPlay
              controls
              image={
                <Image
                  alt="placeholder"
                  src="https://res.cloudinary.com/dfddk8jjr/image/upload/v1682275203/before-transformed_sowhjy.png"
                  quality={100}
                  style={{
                    objectFit: "cover",
                    overflow: "auto",
                    objectPosition: "auto",
                  }}
                  layout="fill"
                />
              }
              loop
              muted
              playsInline
              video=""
            />
          </div>
        </div>
      </div>
    </>
  );
}
