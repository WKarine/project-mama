import Layout from "../components/Layout";

import Categorie from "../components/Categorie";
import H2 from "../components/h2";
import Card from "../components/Card";

export default () => (
  <Layout>
    <div className="row">
      <Card textStyle="white" cardClass="blue" ul={["lien 1", "lien2"]} />
    </div>
  </Layout>
);
