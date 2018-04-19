import Layout from "../../components/Layout";

import ConnectionForm from "./ConnectionForm";
import PanelAdmin from "./PanelAdmin";

export default () => (
  <Layout>
    <div className="container">
      <div className="row">
        <div className="col s12">
          <h1>Admin</h1>
          <ConnectionForm />
          <PanelAdmin />
        </div>
      </div>
    </div>

    <style jsx>{``}</style>
  </Layout>
);
