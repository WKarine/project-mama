import Layout from "../components/Layout";
import H1 from "../components/H1";
import H2 from "../components/H2";

export default () => (
  <Layout>
    <div className="container">
      <div className="row">
        <H1>CHRD</H1>

        <H2 id="chrd">CHRD</H2>
        <div className="col s12">
          <p>blabla</p>
        </div>
        <H2 id="colorisk">Colorisk</H2>
        <div className="col s12">
          <p>blabla</p>
        </div>
        <H2 id="metiers-du-bois">Les métiers du bois</H2>
        <div className="col s12">
          <p>blabla</p>
        </div>
      </div>
    </div>
    <style jsx>{``}</style>
  </Layout>
);
