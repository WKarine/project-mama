import Head from 'next/head'

import Sidebar from './Sidebar'
import Loader from '../Loader'

import Services from "../../services";

class Layout extends React.Component {
  state = {
    categorieContent: ["dede"],
    isFetching: true,
    links: [],
  }

  async componentWillMount() {
    const categorieName = this.props.children.props.name;

    this.setState({
      categorieContent: await Services.categorie.getContent(categorieName),
      isFetching: false,
      links: await Services.sidebar.getLinks(),
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
                  {/* If fecthing is finished, pass categorieContent as prop of Categorie component */}
                  {React.cloneElement(this.props.children, { content: this.state.categorieContent })}
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
