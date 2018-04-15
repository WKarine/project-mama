import Layout from "../components/Layout";

import Category from "../components/Category";

export default () => (
  <Layout>
    <h1 className="principal-title">rapport annuel d'activités</h1>

    <style jsx>
      {`
        .principal-title {
          font-size: 4rem;
          font-variant: small-caps;
        }

        .principal-title:after {
          width: 12rem;
          height: 0.8rem;
          content: "";
          display: inline-block;
          position: relative;
          background-color: grey;
        }

        .principal-title:before {
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
