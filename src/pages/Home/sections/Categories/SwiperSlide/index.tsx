import React, { useState, useEffect, useRef } from "react";
import { Navigation, Pagination, Scrollbar, A11y, Controller } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import Categorie from "./Categorie";

import style from "../../../../../styles/categories.module.scss";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

type Props = {
  categores: any;
  activeNavigate: number;
  setActiveNavigate: Function;
};

const cardWidth = 185;

const Slide = (props: Props) => {
  const [swiper, setSwiper] = useState<any>();
  const prevRef = useRef<any>();
  const nextRef = useRef<any>();

  const [elPerPage, setElPerPage] = useState<any>(
    Math.floor(window.innerWidth / cardWidth)
  );

  useEffect(() => {
    window.onresize = () =>
      setElPerPage(Math.floor(window.innerWidth / cardWidth));
  }, []);

  useEffect(() => {
    if (swiper) {
      swiper.params.navigation.prevEl = prevRef.current;
      swiper.params.navigation.nextEl = nextRef.current;
      swiper.navigation.init();
      swiper.navigation.update();
    }
  }, [swiper]);

  return (
    <div className="position-relative">
      <div
        className={`swiper-button flex-center border shadow ${style.slidebtn} ${style.leftBtn}`}
        ref={prevRef}
      >
        <i className="bi bi-chevron-left"></i>
      </div>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y, Controller]}
        spaceBetween={5}
        slidesPerView={elPerPage > 6 ? 6 : elPerPage}
        slidesPerGroup={elPerPage - 1}
        navigation={{
          prevEl: prevRef?.current,
          nextEl: nextRef?.current,
        }}
        updateOnWindowResize
        observer
        observeParents
        onSwiper={setSwiper}
      >
        {props.categores.map(
          (item: { name: string; id: number; img: string }, idx: number) => (
            <SwiperSlide className="flex-center" key={idx}>
              <Categorie
                active={item.id === props.activeNavigate}
                onClick={() => props.setActiveNavigate(item.id)}
                name={item.name}
                img={item.img}
              />
            </SwiperSlide>
          )
        )}
      </Swiper>
      <div
        className={`swiper-button flex-center border shadow ${style.slidebtn} ${style.rightBtn}`}
        ref={nextRef}
      >
        <i className="bi bi-chevron-right"></i>
      </div>
    </div>
  );
};

export default Slide;
