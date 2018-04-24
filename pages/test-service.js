import Services from "../services";

import Layout from "../components/Layout";

const data = [
  {
    id: "Formation des formateurs SST",
    label: "sst",
    value: 83,
    color: "hsl(340, 70%, 50%)"
  },
  {
    id: "Formation catalogue",
    label: "catalogue",
    value: 560,
    color: "hsl(272, 70%, 50%)"
  },
  {
    id: "Bilan de compétences",
    label: "compétences",
    value: 98,
    color: "hsl(340, 70%, 50%)"
  }
];

class TestService extends React.Component {
  async componentWillMount() {
    // const charts = await Services.data.setData(
    //   "ecouter-et-accompagner",
    //   "toxiInternautes",
    //   data
    // );
    // await Services.data.setData(
    //   "ecouter-et-accompagner",
    //   "typesFormation",
    //   data
    // );
  }

  render() {
    return (
      <Layout>
        <div className="row" />
      </Layout>
    );
  }
}

export default TestService;
