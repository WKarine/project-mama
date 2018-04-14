import Head from 'next/head'

import Sidebar from './Sidebar'
import Loader from '../Loader'

import Services from "../../services";

class Layout extends React.Component {
  state = {
    // categoryContent: ["perspectives"],
    isFetching: true,
    links: [],
  }

  async componentWillMount() {
    // const categoryName = this.props.children.props.name;

    this.setState({
      // categoryContent: await Services.Category.getContent(categoryName),
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
                  {/* If fecthing is finished, pass categoryContent as prop of Category component */}
                  {React.cloneElement(this.props.children, { content: this.state.categoryContent })}
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
