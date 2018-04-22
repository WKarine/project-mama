import Layout from "../components/Layout";
import { brandColors } from "../constantes/colors";

const Page404 = () => (
  <Layout>
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
        Vous êtes perdu? Retournez à la visite <a href="/">ICI</a>
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
        color: ${brandColors.purple};
        font-size: 7rem;
      }

      p {
        margin: auto;
        margin-bottom: 5%;
        text-align: center;
      }

      a {
        color: ${brandColors.purple};
        font-size: 2rem;
      }
    `}</style>
  </Layout>
);

export default Page404;
