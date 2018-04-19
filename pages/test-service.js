import Services from "../services";

import Layout from "../components/Layout";

class TestService extends React.Component {
  static async getInitialProps({ req }) {
    const users = await Services.users.getAdmins();

    return users;
  }

  render() {
    return <Layout />;
  }
}

export default TestService;
