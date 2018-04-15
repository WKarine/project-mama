import Layout from "../components/Layout";
import Head from "next/head";

export default () => (
  <Layout>
    <h1 className="main-title">rapport annuel d'activités</h1>

    <style jsx>
      {`
        .main-title {
          font-size: 4rem;
          font-variant: small-caps;
        }

        .main-title:after {
          width: 12rem;
          height: 0.8rem;
          content: "";
          display: inline-block;
          position: relative;
          background-color: grey;
        }

        .main-title:before {
          width: 12rem;
          height: 0.8rem;
          content: "";
          display: inline-block;
          position: relative;
          background-color: grey;
        }
      `}
    </style>
  </Layout>
);
