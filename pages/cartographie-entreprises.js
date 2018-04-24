import Layout from "../components/Layout";
import Build from "../components/Build";

import { brandColors } from "../constantes/colors";

export default () => (
  <Layout>
    <div className="container">
      <div className="row">
        {/* <H1>La cartographie des entreprises adhérentes</H1>

        <H2 id="territoire-contraste">Un territoire contrasté</H2>

        <div className="col s12">
          <p>blabla</p>
        </div>

        <H2 id="profil-entreprises">Le profil des entreprises</H2>

        <H3>Répartition des adhérents par taille</H3>

        <div className="col s12">
          <p>blabla</p>
        </div>

        <H2 id="etat-de-sante">L'état de santé des salariés</H2>

        <div className="col s12">
          <p>blabla</p>
        </div> */}
        <Build size="big" />

        <div className="col s12 m6 offset-m7">
          <a
            href="/veiller-sante"
            className="intro__discover waves-effect waves-light btn-large"
          >
            <i className="material-icons left">insert_chart</i>Continuer la
            visite
          </a>
        </div>
      </div>
    </div>
    <style jsx>{`
      .intro__discover {
        background-color: ${brandColors.pink};
      }
    `}</style>
  </Layout>
);
