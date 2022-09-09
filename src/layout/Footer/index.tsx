import React from "react";
import keys from "../../config";

const socialAcc = [
  // Instagram
  { link: keys.instagramUrl, logo: "bi bi-instagram" },

  // Linkedin
  { link: `https://wa.me/${keys.whatsapp}`, logo: "bi bi-whatsapp" },
];

const Footer = () => {
  return (
    <footer
      className="text-center text-white"
      style={{ backgroundColor: "#f1f1f1" }}
    >
      {/* <!-- Grid container --> */}
      <div className="container">
        {/* <!-- Section: Social media --> */}
        <section>
          {socialAcc.map((account, idx) => (
            <a
              key={idx}
              className="btn btn-link btn-floating btn-lg text-dark m-1 box-shadow-none"
              href={account.link}
              role="button"
              data-mdb-ripple-color="dark"
              target="_blanc"
            >
              <i className={account.logo}></i>
            </a>
          ))}
        </section>
        {/* <!-- Section: Social media --> */}
      </div>
      {/* <!-- Grid container --> */}

      {/* <!-- Copyright --> */}
      <div
        className="text-center text-light bg-dark p-3"
        // style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
      >
        © 2020 Copyright: Aziz-Nargila
      </div>
      {/* <!-- Copyright --> */}
    </footer>
  );
};

export default Footer;
