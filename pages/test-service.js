import Services from "../services";

import Layout from "../components/Layout";

const data = [
  {
    icon: "fas fa-syringe",
    textContent: "prélèvements effectués",
    stat: 10787,
    iconProvider: "fa"
  },
  {
    icon: "fas fa-vial",
    textContent: "analyses effectuées",
    stat: 64684,
    iconProvider: "fa"
  }
];

class TestService extends React.Component {
  async componentWillMount() {
    await Services.data.setData("veiller-sante", "iconCard-3", data);
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
