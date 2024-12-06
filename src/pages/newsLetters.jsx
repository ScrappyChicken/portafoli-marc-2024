
import React from "react";
import "../components/newsletterComp/Newsletter.css";

const Newsletter = () => {
  return (
    <div style={{ height: "100%", margin: 0, padding: 0, width: "100%" }}>
    <table
      style={{ backgroundColor: "rgb(52, 73, 94)", width: "100%" }}
      cellSpacing="0"
      cellPadding="0"
      border="0"
    >
      <tbody>
        <tr>
          <td align="center">
            <table
              style={{ maxWidth: "600px", width: "100%" }}
              cellSpacing="0"
              cellPadding="0"
              border="0"
            >
              <tbody>
                <tr>
                  <td style={{ padding: "20px", textAlign: "center" }}>
                  </td>
                </tr>
                <tr>
                  <td
                    style={{
                      backgroundColor: "rgb(52, 73, 94)",
                      textAlign: "center",
                    }}
                  >
                    <div>
                      <img
                        src="/assets/img/logo.png"
                        alt="Logo"
                        style={{ maxWidth: "64px", width: "64px" }}
                      />
                    </div>
                    <div>
                      <img
                        src="/assets/img/chicken.png"
                        alt="Cake"
                        style={{ maxWidth: "374px", width: "374px" }}
                      />
                    </div>
                    <div style={{ textAlign: "center", margin: "20px 0" }}>
                      <h1
                        style={{
                          fontSize: "60px",
                          fontFamily: "'Courier New', Courier",
                          color: "#ffffff",
                          lineHeight: "125%",
                        }}
                      >
                        Mi NewsLetter
                      </h1>
                    </div>
                    <p
                      style={{
                        fontSize: "14px",
                        fontFamily: "'Courier New', Courier",
                        color: "#ffffff",
                        lineHeight: "200%",
                        textAlign: "center",
                        margin: "0 20px",
                      }}
                    >
                        ESTA NEWSLETTER NO ES UN PRODUCTO ORIGINAL, NO LA HE DISEÑADO YO, ES UNICAMENTE UN PLACEHOLDER.
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
                    </p>
                    <div style={{ margin: "20px 0" }}>
                      <a
                        href="#"
                        style={{
                          display: "inline-block",
                          border: "3px solid #fff",
                          borderRadius: "5px",
                          padding: "20px 40px",
                          fontSize: "20px",
                          fontWeight: "bold",
                          textDecoration: "none",
                          color: "#ffffff",
                        }}
                      >
                        Apuntate ya!
                      </a>
                    </div>
                    <div style={{ margin: "20px", textAlign: "center" }}>
                      <p
                        style={{
                          fontSize: "24px",
                          fontFamily: "'Courier New', Courier",
                          color: "#34495e",
                        }}
                      >
                        “Time sprouted wings.”
                      </p>
                      <p
                        style={{
                          fontSize: "14px",
                          fontFamily: "'Courier New', Courier",
                          color: "#34495e",
                        }}
                      >
                        - Sally J., VP of Fun
                      </p>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td style={{ textAlign: "center" }}>
                    <a href="http://twitter.com">
                      <img
                        src="/assets/img/twitter.png"
                        alt="Twitter"
                        style={{ maxWidth: "57px", height: "57px" }}
                      />
                    </a>
                    <a href="http://www.facebook.com">
                      <img
                        src="/assets/img/facebook.png"
                        alt="Facebook"
                        style={{ maxWidth: "57px", height: "57px" }}
                      />
                    </a>
                    <a href="http://instagram.com">
                      <img
                        src="/assets/img/instagram.png"
                        alt="Instagram"
                        style={{ maxWidth: "57px", height: "57px" }}
                      />
                    </a>
                  </td>
                </tr>
                <tr>
                  <td
                    style={{
                      padding: "20px",
                      fontFamily: "Arial, Helvetica, sans-serif",
                      fontSize: "11px",
                      textAlign: "center",
                      color: "#fff",
                    }}
                  >
                    <p>
                      Esta newsletter es falsa y nada dentro de la misma funciona
                    </p>
                    <p>
                      Carrer de la Beata Francinaina Cirer, 2, Ponent, 07011 Palma, Illes Balears
                    </p>
                    <a href="#" style={{ color: "#16a7e0" }}>
                      Unsubscribe
                    </a>{" "}
                    | <a href="#">Manage Subscription</a> |{" "}
                    <a href="#">Forward Email</a> | <a href="#">Report Abuse</a>
                  </td>
                </tr>
              </tbody>
            </table>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
);
};


export default Newsletter;
