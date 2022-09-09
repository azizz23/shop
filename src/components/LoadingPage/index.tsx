import React from "react";
import style from "../../styles/loading.module.scss";

const LoadingPage = () => {
  return (
    <main className={`${style.loadingConatiner} min-h-85vh flex-center`}>
      <div className={style.bg_load}></div>
      <div className={style.wrapper}>
        <div className={style.inner}>
          <span>L</span>
          <span>o</span>
          <span>a</span>
          <span>d</span>
          <span>i</span>
          <span>n</span>
          <span>g</span>
        </div>
      </div>
    </main>
  );
};

export default LoadingPage;
