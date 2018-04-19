import Layout from "../components/Layout";
import H1 from "../components/H1";
import H2 from "../components/H2";
import H3 from "../components/H3";

export default () => (
  <Layout>
    <div className="container">
      <div className="row">
        <H1>Mettre des moyens au service d'un projet</H1>

        <H2 id="relations-adherents">Relation adhérents</H2>

        <div className="col s12">
          <p>blabla</p>
        </div>

        <H2 id="communication">Communication</H2>

        <H3>Les supports d'information et de communication</H3>

        <H3>Le Web/Site Web de Pôle Santé Travail</H3>

        <div className="col s12">
          <p>blabla</p>
        </div>

        <H2 id="immobiliers-investissements">Immobiliers et investissements</H2>

        <div className="col s12">
          <p>blabla</p>
        </div>
      </div>
    </div>

    <style jsx>{``}</style>
  </Layout>
);
