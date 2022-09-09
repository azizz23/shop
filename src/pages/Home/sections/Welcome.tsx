import React from "react";
import { scrollBy } from "seamless-scroll-polyfill";
import useGallery from "../../../hooks/useGallery";
import style from "../../../styles/welcome.module.scss";

type Props = {
  categoriesSec: {
    current: any;
  };
};

const imgs: string[] = [

  "/static/curosal/argus.jpg",
];

const Welcome = (props: Props) => {
  const { boxRef } = useGallery({
    hideClass: style.hideClassGallery,
    speed: 0.6,
    delay: 7,
  });

  return (
    <section className={style.welcome}>
      <div className="container">
        <div className={style.galleryContainer} ref={boxRef}>
          {imgs.map((img: string, idx: number) => (
            <img key={idx} className={style.galleryItem} src={img} alt="" />
          ))}
        </div>

        <main
          className={`text-center pb-5 min-h-95vh flex-center flex-column ${style.mainSec}`}
        >
          <h2 className="title text-light display-1 fw-bold">Aziz-Nargila</h2>
          <p className="text-light fs-3">
            Shopping is easier and faster with Aziz.
          </p>
          <button
            onClick={() =>
              scrollBy(window, {
                top: props.categoriesSec.current.offsetTop - 70,
                behavior: "smooth",
              })
            }
            className="btn btn-light px-4 py-2 mt-4"
          >
            START NOW
          </button>
        </main>
      </div>
    </section>
  );
};

export default Welcome;
