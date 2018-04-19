import Layout from "../components/Layout";
import H1 from "../components/H1";
import H2 from "../components/H2";
import H3 from "../components/H3";
import SimpleCard from "../components/SimpleCard";

export default () => (
  <Layout>
    <div className="container">
      <div className="row">
        <H1>
          Ecouter et accompagner les entreprises dans leur démarche de
          prévention
        </H1>

        <H2 id="aide-evaluation-risques">L'aide à l'évaluation des risques</H2>

        <div className="col s12">
          <p>Section en construction</p>
        </div>

        <H2 id="conseils-en-entreprise">Conseils en entreprise</H2>

        <div className="col s12">
          <p>Section en construction</p>
        </div>

        <H3 className="third-title">Etudes de postes</H3>

        <div className="col s12">
          <p>Section en construction</p>
        </div>

        <H3 className="third-title">Organisation de travail</H3>

        <div className="col s12">
          <p>Section en construction</p>
        </div>

        <H2 id="action-en-milieu-de-travail col s12">
          Les actions en milieu de travail
        </H2>

        <div className="col s12">
          <p>
            Être sur le terrain pour mener des actions de prévention est
            l’essence même du service de santé au travail. Les Actions en Milieu
            de Travail sont très diversifiées, adaptées à chaque entreprise et à
            ses problématiques :
          </p>
        </div>

        <div className="col s12 m6">
          <SimpleCard cardClass="white">
            <ul className="card__list">
              <li>
                l’étude de poste en vue de l’amélioration des conditions de
                travail, de leur adaptation dans certaines situations ou du
                maintien dans l’emploi,{" "}
              </li>
              <li>
                l’identification et l’analyse des risques professionnels,{" "}
              </li>
              <li>
                la délivrance de conseils en matière d’organisation des secours
                et des services d’urgence,{" "}
              </li>
              <li>des actions de sensibilisation, </li>
              <li>
                des mises en place de nouvelles techniques de production,
                modifications d’équipements,{" "}
              </li>
              <li>l’évaluation des risques professionnels </li>
              <li>
                l’élaboration et la mise à jour de la fiche d’entreprise,{" "}
              </li>
            </ul>
          </SimpleCard>
        </div>

        <div className="col s12 m6">
          <SimpleCard cardClass="white">
            <ul className="card__list">
              <li>
                la participation aux réunions du Comité d’Hygiène, de Sécurité
                et des Conditions de Travail,
              </li>
              <li>la réalisation de mesures métrologiques,</li>
              <li>
                l’animation de campagnes d’information et de sensibilisation aux
                questions de santé publique en rapport avec l’activité
                professionnelle,
              </li>
              <li>les enquêtes épidémiologiques,</li>
              <li>la formation aux risques spécifiques,</li>
              <li>l’étude de toute nouvelle technique de production,</li>
              <li>l’élaboration des actions de formation à la sécurité...</li>
            </ul>
          </SimpleCard>
        </div>

        <H3>Ergonomie - Métrologie</H3>

        <H3>Risque chimique</H3>

        <H3>Epidémiologie (Indicateurs Santé Travail)</H3>

        <H3>Etudes et projets</H3>

        <div className="col s12">
          <p>blabla</p>
        </div>

        <H2 id="enquetes-diagnostic">Enquêtes et diagnostic</H2>

        <div className="col s12">
          <p>blabla</p>
        </div>

        <H2 id="drogues-alcool">
          Apporter des réponses adaptées face aux problématiques de consommation
          de drogues et d'alcool sur le lieu de travail
        </H2>

        <div className="col s12">
          <p>blabla</p>
        </div>

        <H2 id="maintien-emploi">
          Accompagner les entreprises et les salariés dans la recherche de
          solutions pour le maintien dans l'emploi
        </H2>

        <div className="col s12">
          <p>blabla</p>
        </div>

        <H2 id="formation-des-salaries">
          La formation des salariés sur la santé au travil
        </H2>

        <div className="col s12">
          <p>blabla</p>
        </div>
      </div>
    </div>

    <style jsx>{``}</style>
  </Layout>
);
