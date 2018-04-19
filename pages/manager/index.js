import Layout from "../../components/Layout";

import ConnectionForm from "./ConnectionForm";
import PanelAdmin from "./PanelAdmin";

const isRoot = Services.users.isRoot();

export default () => (
  <Layout>
    <div className="row">
      <div className="col s12">
        <h1 className="main-title">Admin</h1>
        <ConnectionForm />
        <PanelAdmin />
      </div>
    </div>

    <style jsx>{``}</style>
  </Layout>
);
