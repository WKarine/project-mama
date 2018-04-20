import Services from "../services";

import Layout from "../components/Layout";

class TestService extends React.Component {
  static async getInitialProps({ req }) {
    const charts = await Services.charts.getCharts();
    return charts;
  }

  render() {
    return (
      <Layout>
        <div className="row">
          <p>{this.props.charts}</p>
        </div>
      </Layout>
    );
  }
}

export default TestService;
