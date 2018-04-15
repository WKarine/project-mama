import Layout from "../components/Layout";
import Head from "next/head";

export default () => (
  <Layout>
    <Head>
      <link rel="stylesheet" href="static/vendor/instagram.min.css" />
    </Head>style
    <style jsx global>{`
      .container {
        padding-left: 0;
        margin: 0;
        width: 100%;
      }

      main.content {
        background-image: url(static/images/home.jpg);
        height: 100vh;
        background-color: black;
      }
      `}
    </style>
  </Layout>
);
