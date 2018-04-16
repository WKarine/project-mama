import Layout from "../components/Layout";
import Head from "next/head";
import { sideNavColors } from "../constantes/colors";

export default () => (
  <Layout>
    <h1 className="main-title"> rapport annuel d 'activités</h1>
    <span className="year"> 2017 </span>

    <style jsx>
      {`
        .main-title {
          font-size: 4rem;
          font-variant: small-caps;
          text-align: center;
        }

        .main-title:before {
          background: -webkit-linear-gradient(
            left,
            ${sideNavColors.pink} 0%,
            ${sideNavColors.purple} 30%,
            ${sideNavColors.green} 60%,
            ${sideNavColors.orange} 100%
          );
          content: "";
          display: block;
          height: 0.8rem;
          margin-bottom: 1rem;
          margin-left: 10%;
          position: relative;
          width: 40%;
        }

        .main-title:after {
          background: -webkit-linear-gradient(
            right,
            ${sideNavColors.pink} 0%,
            ${sideNavColors.purple} 30%,
            ${sideNavColors.green} 60%,
            ${sideNavColors.orange} 100%
          );
          content: "";
          display: block;
          height: 0.8rem;
          margin-left: 60%;
          margin-top: 1rem;
          position: relative;
          width: 40%;
        }

        .year {
          background-color: Whitesmoke;
          background-opacity: 0.5;
          border: solid 5px White;
          font-size: 5rem;
          font-weight: bold;
          margin-left: 60%;
          padding: 1.5rem;
        }
      `}
    </style>
  </Layout>
);
