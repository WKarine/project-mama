import Head from 'next/head'
import Sidebar from './Sidebar'

const Layout = () => (
  <div className="container">
    <Head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
      <link rel="stylesheet" href="static/vendors/materialize.min.css" />
      <link rel="stylesheet" href="static/css/index.css" />
      <title>Project-Mama</title>
    </Head>

    <Sidebar />

    <script src="static/vendors/materialize.min.js"></script>
  </div>
)

export default Layout
