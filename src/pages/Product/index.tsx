/* eslint-disable no-new-func */
import React, { useMemo, useState } from "react";
import { Link, useParams } from "react-router-dom";
import SliceText from "../../components/SliceText";
import style from "../../styles/product.module.scss";
import keys from "../../config";

const Product = ({ products }: any) => {
  const { id } = useParams();
  const product = useMemo(
    () => products.product.find((product: any) => product.id.toString() === id),
    [products, id]
  );

  const [previewImg, setPreviewImg] = useState(product.img);

  const order = () => {
    const Phonenumber = keys.whatsapp;
    const message = `Hello, I want to order the "${product.name}" product, Give me the details`;
    const whatsappAPI = `https://wa.me/${Phonenumber}?text=${message}`;

    window.open(whatsappAPI, "_blanc");
  };

  return (
    <div className="container mt-5 mb-5 min-h-100vh flex-center">
      <div className={style.card}>
        <div className="row g-0">
          <div className="col-md-6 border-end">
            <div className="d-flex flex-column justify-content-center">
              <div className={style.main_image}>
                <img
                  draggable={false}
                  src={previewImg}
                  width="350"
                  alt="product"
                />
              </div>
              <div className={style.thumbnail_images}>
                <ul id="thumbnail">
                  <div className="row">
                    {product.imgs
                      .slice(0, 4)
                      .map((img: string, idx: number) => (
                        <div className="col-3" key={idx}>
                          <li
                            className={`flex-center ${
                              img === previewImg ? "border-primary" : ""
                            } rounded`}
                            style={{
                              overflow: "hidden",
                            }}
                          >
                            <img
                              draggable={false}
                              style={{
                                objectFit: "contain",
                                width: "100%",
                                minWidth: "50px",
                              }}
                              alt="product"
                              src={img}
                              onClick={() => setPreviewImg(img)}
                            />
                          </li>
                        </div>
                      ))}
                  </div>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="p-3 right-side">
              <div className="d-flex justify-content-between align-items-center">
                <h3>{product.name}</h3>
              </div>
              <div className="mt-2 pr-3 content">
                <SliceText count={250} text={product.description} />
              </div>
              <div className="price d-flex align-items-center">
                <h3 className="me-2">₪{product.price}</h3>
                {product.oldPrice && (
                  <s className="text-muted">₪{product.oldPrice}</s>
                )}
              </div>
              <div
                className={`${style.buttons} d-flex justify-content-center pb-5 pb-md-0 justify-content-md-start flex-row mt-5 gap-3`}
              >
                <button
                  onClick={order}
                  className="btn btn-success d-flex flex-center gap-2"
                >
                  <i className="bi bi-whatsapp fs-5" /> order via whatsapp
                </button>

                <Link to="/" className="text-decoration-none">
                  <button className="btn btn-outline-dark flex-center d-flex gap-2 fw-bold">
                    <i className="bi bi-browser-safari fs-5" /> Browse products
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
