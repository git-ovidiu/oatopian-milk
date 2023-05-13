import React from "react";
import Head from "next/head";
import Image from "next/image";
import { Animated_text, Button_slide, FAQ_item, Footer_card } from "@git-ovidiu/nextjs-component-library";
import { Media_component } from "@git-ovidiu/component-library";
import Media_and_paragraph from "./Organisms/Media-and-paragraph/Media_and_paragraph";
import styleguide from "../styles/main.module.scss";
import Footer from "./Organisms/Footer/Footer";

export default function Home() {
  return (
    <div className={styleguide.styleguide}>
      <Footer 
      footer_card={
        <Footer_card
        action={
          <Button_slide
            hover_effect="slide-right"
            iconPosition="right"
            icon="cacat"
            text="Placeholder text"
            padding="xs"
          />
        }
        description={
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Sapiente, debitis. Rerum eos, quae expedita maxime labore ipsa
            nisi iure nam repellendus, mollitia repellat. Assumenda,
            deleniti!
          </p>
        }
        logo={
            <Image
              src="https://via.placeholder.com/160x63/e3e3e3/b38686"
              alt="Logo Placeholder"
              width={160}
              height={60}
            />
        }
      />
      }
      />
      <div className="padding_xxl">
        <Media_and_paragraph
          reverse
          image={
            <Media_component
              autoPlay
              controls
              image={
                <Image
                  alt="placeholder"
                  src="https://res.cloudinary.com/dfddk8jjr/image/upload/v1683302522/OvidiuBunghez_diagramic_drawing_of_a_glass_with_oatmilk_on_a_fu_ad6763db-0b39-4326-a90f-f7e506e7c455_1_h2ude7.png"
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
          }
          content={
            <div className="white">
              <Animated_text
                text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure officia cumque, facere nemo dolorem illo sequi veniam."
                variant="h3"
              />
            </div>
          }
        />
      </div>
      <div className="padding_m">
        <Media_and_paragraph
          image={
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
          }
          content={
            <>
              <h2 className="white">
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure
                officia cumque, facere nemo dolorem illo sequi veniam. 123123"
              </h2>
              <div className="faq-container">
                <>
                  <FAQ_item
                    arrow={
                      <svg
                        fill="none"
                        height="8"
                        viewBox="0 0 14 8"
                        width="14"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M1 1L7 7L13 1"
                          stroke="#000000"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                        />
                      </svg>
                    }
                    description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, repellendus ipsa vero dicta nihil voluptas eos omnis? Sit necessitatibus pariatur consequatur temporibus totam maxime tempora iusto animi, ipsa labore facere libero deleniti porro dolore incidunt, nulla ut soluta deserunt! Quia commodi nesciunt doloribus dignissimos enim. Eaque ipsa odio maxime accusantium!"
                    title={
                      <Animated_text
                        text="adfadsfasdfasdfas adsfa sdfasd fasdf ads fa dsf"
                        variant="p"
                      />
                    }
                  />
                </>
                <>
                  <FAQ_item
                    arrow={
                      <svg
                        fill="none"
                        height="8"
                        viewBox="0 0 14 8"
                        width="14"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M1 1L7 7L13 1"
                          stroke="#000000"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                        />
                      </svg>
                    }
                    description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, repellendus ipsa vero dicta nihil voluptas eos omnis? Sit necessitatibus pariatur consequatur temporibus totam maxime tempora iusto animi, ipsa labore facere libero deleniti porro dolore incidunt, nulla ut soluta deserunt! Quia commodi nesciunt doloribus dignissimos enim. Eaque ipsa odio maxime accusantium!"
                    title={
                      <Animated_text
                        text="adfadsfasdfasdfas adsfa sdfasd fasdf ads fa dsf"
                        variant="p"
                      />
                    }
                  />
                </>
              </div>
            </>
          }
        />
      </div>£
      <div
        className={`${styleguide.padding_top_m} ${styleguide.padding_bottom_m}`}
      >
        <Media_and_paragraph
          reverse
          image={
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
          }
          content={
            <div className="white">
              <Animated_text
                text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure officia cumque, facere nemo dolorem illo sequi veniam."
                variant="h1"
              />
            </div>
          }
        />
      </div>
      {/* 
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
            <Animated_text
              text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure officia cumque, facere nemo dolorem illo sequi veniam."
              variant="h1"
            />
          </div>
        </div>

        <div className={`row ${styles.row}`}>
          <div className={`col-12 col-sm-6 ${styles.textColumn}`}>
            <Animated_text
              text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure officia cumque, facere nemo dolorem illo sequi veniam."
              variant="h1"
            />
          </div>
          <div className={`col-12 col-md-6 ${styles.mediaLeft}`}></div>
        </div>
      </div> */}
    </div>
  );
}
