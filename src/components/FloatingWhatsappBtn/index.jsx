import React from "react";
import { BsWhatsapp } from "react-icons/bs";
import keys from "../../config";

const { whatsapp } = keys;

const FloatingWhatsappBtn = () => {
  const openWhatsapp = () => {
    window.open(`https://wa.me/${whatsapp}`, "_blanc");
  };

  return (
    <>
      <div
        title="التواصل عن طريق الواتساب"
        onClick={openWhatsapp}
        className="whatsapp-floating-btn flex-center"
      >
        <BsWhatsapp size="30" />
      </div>
    </>
  );
};

export default FloatingWhatsappBtn;
