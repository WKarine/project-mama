import Head from 'next/head'

import Sidebar from './Sidebar'
import Loader from '../Loader'

import LayoutService from "../../services/Layout/";

class Layout extends React.Component {
  state = {
    links: [],
    isFetching: true
  }

  async componentWillMount() {
    this.setState({
      links: await LayoutService.sidebar.getLinks(),
      isFetching: false
    });
  }

  render() {
    return (
      <div className="container">
        <Head>
          <meta charset="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
          <link rel="stylesheet" href="static/vendors/materialize.min.css" />
          <link rel="stylesheet" href="static/css/index.css" />
          <title>Project-Mama</title>
        </Head>
        {
          this.state.isFetching
            ? <Loader />
            : (
              <React.Fragment>
                <Sidebar links={this.state.links} />
                <main className="content">
                  {this.props.children}
                </main>
              </React.Fragment>
            )
        }
        <script src="static/vendors/materialize.min.js"></script>
      </div>
    )
  }
}

export default Layout
