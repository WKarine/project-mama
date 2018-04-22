import Layout from "../components/Layout";
import { brandColors } from "../constantes/colors";
import Head from "next/head";

const Page404 = () => (
  <Layout>
    <head>
      <meta http-equiv="refresh" content="5; url=/" />
    </head>

    <div className="container">
      <div className="error">
        <span>4</span>
        <img
          className="responsive-img animated pulse infinite"
          src="static/images/404/lemon.png"
        />
        <span>4</span>
      </div>

      <p>
        Vous êtes perdu? Retournez à la visite <a href="/">ICI</a> <br />
        Sinon, vous allez être redirigé sur la page d'accueil dans 5 secondes.
      </p>
    </div>

    <style jsx>{`
      .error {
        display: flex;
        justify-content: center;
        margin-bottom: 5%;
        margin-top: 5%;
        padding: 3rem;
      }

      span {
        color: ${brandColors.actual};
        font-size: 7rem;
      }

      p {
        margin: auto;
        margin-bottom: 5%;
        text-align: center;
      }

      a {
        color: ${brandColors.actual};
        font-size: 2rem;
      }
    `}</style>
  </Layout>
);

export default Page404;
