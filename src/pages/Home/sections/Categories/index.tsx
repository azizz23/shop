import React, { useState } from "react";
import style from "../../../../styles/categories.module.scss";
import { useDispatch } from "react-redux";
import { openModal } from "../../../../store/ModalSlice";
import { Link } from "react-router-dom";
import SwiperSlide from "./SwiperSlide";

type Props = {
  categoriesSec: any;
  products: any;
};

const Categories = (props: Props) => {
  const [activeNavigate, setActiveNavigate] = useState(1);

  const dispatch = useDispatch();

  return (
    <section ref={props.categoriesSec} className={`${style.categories} pb-5`}>
      <nav>
        <div className="container">
          <h2 className="my-4">Categories</h2>
          <SwiperSlide
            categores={props.products.categores}
            activeNavigate={activeNavigate}
            setActiveNavigate={setActiveNavigate}
          />
        </div>
      </nav>
      <hr />
      <div className="container min-h-100vh pb-5 mb-5 mt-4 pt-4">
        {/* Products */}
        <div className="row">
          {props.products.product.map((product: any, idx: number) => (
            <div
              className={`${
                activeNavigate === product.categoreId || activeNavigate === 1
                  ? "col-md-4 col-lg-4 col-sm-6"
                  : "d-none"
              }`}
              key={idx}
            >
              <div className={`${style.thumbWrapper} my-2`}>
                <Link to={`/product/${product.id}`}>
                  <div className={`${style.imgBox} cu-pointer`}>
                    <img
                      src={product.img}
                      className="img-fluid"
                      alt="nargila"
                    />
                  </div>
                </Link>

                <div className="thumb-content">
                  <h4>{product.name}</h4>
                  <p className={`${style.itemPrice}`}>
                    {product.oldPrice && (
                      <span
                        style={{ textDecoration: "line-through" }}
                        className="text-muted me-2"
                      >
                        ₪{product.oldPrice}
                      </span>
                    )}
                    <b>₪{product.price}</b>
                  </p>
                  <div className="btns mt-4 flex-between conatiner">
                    <Link to={`/product/${product.id}`}>
                      <p className="btn btn-success">Order Now</p>
                    </Link>
                    <p
                      onClick={() => dispatch(openModal(product))}
                      className="btn btn-dark"
                    >
                      Details
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;
