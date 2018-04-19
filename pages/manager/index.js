import Layout from "../../components/Layout";

import H1 from "../../components/H1";
import ConnectionForm from "./ConnectionForm";
import PanelAdmin from "./PanelAdmin";

export default () => (
  <Layout>
    <div className="container">
      <div className="row">
        <H1>Admin</H1>

        <div className="col s12">
          <PanelAdmin />
        </div>
      </div>
    </div>

    <style jsx>{``}</style>
  </Layout>
);
