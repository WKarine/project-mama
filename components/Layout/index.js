import Head from "next/head";

import Sidenav from "./Sidenav";
import Footer from "../Layout/Footer";

import { categoryLinks } from "../../models/components/Sidenav";

const Layout = ({ children }) => (
  <div className="container-fluid">
    <Head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />

      <link
        rel="icon"
        type="image/png"
        href="../../static/images/favicon.ico"
      />

      <link
        href="https://fonts.googleapis.com/icon?family=Material+Icons"
        rel="stylesheet"
      />
      <link rel="stylesheet" href="static/vendors/materialize.min.css" />
      <link rel="stylesheet" href="static/css/index.css" />
      <title>Pôle Santé Travail: Rapport Annuel d'Activités</title>
    </Head>
    <React.Fragment>
      <Sidenav categoryLinks={categoryLinks} />

      <main id="content">{children}</main>
    </React.Fragment>

    <Footer />

    <script src="static/vendors/materialize.min.js" />
  </div>
);

export default Layout;
