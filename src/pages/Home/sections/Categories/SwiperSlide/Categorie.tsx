import React from "react";
import style from "../../../../../styles/categories.module.scss";

type Props = {
  name: string;
  img: string;
  active?: boolean | undefined;
  onClick: any;
};

const Categorie = (props: Props) => {
  return (
    <div
      onClick={props.onClick}
      className={`${style.categorie} ${
        props.active ? style.active : ""
      } px-4 flex-center w-fit flex-column cu-pointer`}
    >
      <img
        width={window.innerWidth > 1000 ? 150 : 120}
        className={`border-circle ${style.img}`}
        src={props.img}
        alt=""
      />
      <p className="name mt-2">{props.name}</p>
    </div>
  );
};

export default Categorie;
