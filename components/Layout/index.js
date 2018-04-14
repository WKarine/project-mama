import Head from 'next/head'

import Sidebar from './Sidebar'

import { categoryLinksTextContent } from "../../models/components/Sidebar";

const Layout = (props) => (
  <div className="container">
    <Head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />

      <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
      <link rel="stylesheet" href="static/vendors/materialize.min.css" />

      <link rel="stylesheet" href="static/css/index.css" />
      <title>Project-Mama</title>
    </Head>
    <React.Fragment>
      <Sidebar categoryLinksTextContent={categoryLinksTextContent} />

      <main className="content">
        {
          props.children
        }
      </main>
    </React.Fragment>

    <script src="static/vendors/materialize.min.js"></script>
  </div>
);

export default Layout
