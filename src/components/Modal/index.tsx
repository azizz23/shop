import React from "react";
import { motion } from "framer-motion";
import { useSelector, useDispatch } from "react-redux";
import style from "../../styles/modal.module.scss";
import { closeModal } from "../../store/ModalSlice";
import type { RootState } from "../../store";
import { Link } from "react-router-dom";

type Props = {};

const Modal = (props: Props) => {
  const dispatch = useDispatch();
  const { isOpen, product } = useSelector(({ modal }: RootState) => modal);

  return isOpen ? (
    <div
      className={`${style.modal} modal fade show flex-center`}
      tabIndex={-1}
      role="dialog"
      style={{
        display: "flex",
        width: "100%",
        height: "100%",
        overflow: "hidden",
      }}
    >
      <div onClick={() => dispatch(closeModal())} className={style.backDrop} />

      <div className="modal-dialog modal-lg shadow " role="document">
        <motion.div
          transition={{ duration: 0.6 }}
          animate={{ scale: [0, 1.15, 1] }}
          className="modal-content"
        >
          <div className="modal-body">
            <div className="row">
              <div className="col-lg-5 col-6 m-auto">
                <div className="imgBox flex-center h-100">
                  <img
                    className="d-block m-auto"
                    style={{ maxWidth: "100%" }}
                    src={product.img}
                    alt="First slide"
                  />
                </div>
              </div>

              <div className="col-lg-7 mt-4">
                <h2 className="h2-responsive product-name">
                  <strong>{product.name}</strong>
                </h2>
                <h4 className="h4-responsive">
                  <span style={{ color: "#4caf50" }}>
                    <strong className="me-2">₪{product.price}</strong>
                  </span>
                  {product.oldPrice && (
                    <span className="grey-text">
                      <span className="small text-muted">
                        <s>₪{product.oldPrice}</s>
                      </span>
                    </span>
                  )}
                </h4>

                <div className="description">
                  <p className="text-muted text-cut-10 mb-5">
                    {product.description}
                  </p>
                </div>

                <div className="card-body">
                  <div className="text-center">
                    <button
                      onClick={() => dispatch(closeModal())}
                      className="btn btn-danger waves-effect waves-light"
                    >
                      Close
                    </button>
                    <Link to={`/product/${product.id}`}>
                      <button
                        onClick={() => dispatch(closeModal())}
                        className="ms-3 btn btn-success"
                      >
                        Order Now
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  ) : (
    <></>
  );
};

export default Modal;
