import Link from "next/link";

import Layout from "../components/Layout";
import H1 from "../components/H1";
import H2 from "../components/H2";
import H3 from "../components/H3";
import SimpleCard from "../components/SimpleCard";
import IconCard from "../components/IconCard";
import StatCard from "../components/StatCard";

const dataList = [
  {
    icon: "home",
    textContent: "Accueils Nouvel Adhérent",
    stat: 1879
  },
  {
    icon: "battery_alert",
    textContent: "Fiches d'entreprise crées en 2017",
    stat: 3978
  }
];

const dataList_2 = [
  {
    icon: "battery_alert",
    textContent: "Aides au DUER",
    stat: 273
  },
  {
    icon: "battery_alert",
    textContent: "Educations sanitaires",
    stat: 67
  }
];

const dataList_3 = [
  {
    icon: "home",
    textContent: "Accueils Nouvel Adhérent (Réunions collectives)",
    stat: 140
  },
  {
    icon: "battery_alert",
    textContent: "Fiches d'entreprise mises à jour en 2017",
    stat: 608
  },
  {
    icon: "battery_alert",
    textContent:
      "Informations sur les risques professionnels et les moyens de prévention",
    stat: 1268
  }
];

export default () => (
  <Layout>
    <div className="container">
      <div className="row">
        <H1 id="aide-evaluation-risques">
          Ecouter et accompagner les entreprises dans leur démarche de
          prévention
        </H1>

        <H2>L'aide à l'évaluation des risques</H2>

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

        <H2 id="action-en-milieu-de-travail">
          Les actions en milieu de travail
        </H2>

        <div className="col s12">
          <p>
            Être sur le terrain pour mener des actions de prévention est
            l’essence même du service de santé au travail.
          </p>
        </div>

        <div className="col s12 center-align">
          <strong className="amt">
            20 425 Action en Milieu de Travail réalisées en 2017
          </strong>
        </div>

        <div className="col s12">
          <SimpleCard cardClass="white">
            <p>
              Les Actions en Milieu de Travail sont très diversifiées, adaptées
              à chaque entreprise et à ses problématiques
            </p>
            <div className="card__list-container">
              <ul className="card__list card__list-left">
                <li>
                  l’étude de poste en vue de l’amélioration des conditions de
                  travail, de leur adaptation dans certaines situations ou du
                  maintien dans l’emploi,
                </li>
                <li>
                  l’identification et l’analyse des risques professionnels,
                </li>
                <li>
                  la délivrance de conseils en matière d’organisation des
                  secours et des services d’urgence,
                </li>
                <li>des actions de sensibilisation, </li>
                <li>
                  des mises en place de nouvelles techniques de production,
                  modifications d’équipements,
                </li>
                <li>l’évaluation des risques professionnels </li>
                <li>
                  l’élaboration et la mise à jour de la fiche d’entreprise,
                </li>
              </ul>
              <ul className="card__list card__list-right">
                <li>
                  la participation aux réunions du Comité d’Hygiène, de Sécurité
                  et des Conditions de Travail,
                </li>
                <li>la réalisation de mesures métrologiques,</li>
                <li>
                  l’animation de campagnes d’information et de sensibilisation
                  aux questions de santé publique en rapport avec l’activité
                  professionnelle,
                </li>
                <li>les enquêtes épidémiologiques,</li>
                <li>la formation aux risques spécifiques,</li>
                <li>l’étude de toute nouvelle technique de production,</li>
                <li>l’élaboration des actions de formation à la sécurité...</li>
              </ul>
            </div>
          </SimpleCard>
        </div>

        <div className="col s12">
          <IconCard cardClass="green" dataList={dataList} />
        </div>

        <div className="col s12">
          <IconCard cardClass="white" dataList={dataList_2} />
        </div>

        <div className="col s12">
          <IconCard cardClass="green" dataList={dataList_3} />
        </div>

        <H3>Ergonomie - Métrologie</H3>

        <div className="col s12 m6">
          <p className="ergo__intro">
            Le service ergonomie intervient auprès des entreprises pour les
            aider à structurer une démarche de prévention à partir d’une demande
            santé travail sur les thématiques suivantes : TMS, RPS, conception/
            corrections des espaces et outils de travail…
          </p>
        </div>

        <div className="col s12 m6">
          <SimpleCard cardClass="white">
            <p>
              INTERVENTIONS ERGONOMIQUES EN PRÉVENTION DES RISQUES
              PROFESSIONNELS
            </p>
            <ul className="card__list">
              <li>
                Information et conseil : 1er niveau d’intervention pour analyser
                et reformuler la demande : 1 à 2 journées
              </li>
              <li>
                Diagnostic : Identification et mise en visibilité des risques et
                présentations de plans d’actions de prévention (1 à 6 jours)
              </li>
              <li>
                Accompagnement : Évaluation des risques et mise en oeuvre des
                plans d’actions de prévention avec l’entreprise (> 6 jours)
              </li>
            </ul>
          </SimpleCard>
        </div>

        <div className="col s12 m6">
          <StatCard className="risques-chimiques" cardClass="blue">
            <strong>27 %</strong>
            <span>
              D’ACTIONS RÉALISÉES EN PLUS QU’EN 2016 À EFFECTIFS CONSTANTS
            </span>

            <strong>57 %</strong>
            <span>
              DES THÉMATIQUES INVESTIGUÉES RELÈVENT DE L’ORGANISATION DU TRAVAIL
              (CONDITIONS DE TRAVAIL/TMS ET RPS)
            </span>
          </StatCard>
        </div>

        <div className="col s12 m6">
          <StatCard className="risques-chimiques" cardClass="blue">
            <strong>74 %</strong>
            <span>
              DES ACTIONS RÉALISÉES RELÈVENT DE LA DÉMARCHE DE PRÉVENTION
              COLLECTIVE
            </span>

            <strong>94 %</strong>
            <span>
              DES ACTIONS RÉALISÉES RELÈVENT D’ACTIVITÉS EXPERTES (CONSEIL /
              DIAGNOSTIC / ACCOMPAGNEMENT)
            </span>
          </StatCard>
        </div>

        <div className="col s12">
          <StatCard cardClass="blue">
            <strong>471</strong>
            <span>DEMANDES D’INTERVENTION PARVENUES AU SERVICE ERGONOMIE</span>
          </StatCard>
        </div>

        <div className="col s12">
          <p>ici graphique en cercle</p>
        </div>

        <div className="col s12">
          <p>ici graphique en batons</p>
        </div>

        <div className="col s12">
          <StatCard cardClass="blue">
            <strong>272</strong>
            <span>ACTIONS RÉALISÉES</span>
          </StatCard>
        </div>

        <H3>Risque chimique</H3>

        <div className="col s12">
          <SimpleCard cardClass="white">
            <p>
              Le Service Toxicologie intervient dans les domaines suivants :
            </p>
            <strong>RÔLE DE CONSEIL</strong>
            <p>
              Ces interventions regroupent l’ensemble des interrogations des
              membres de l’équipe santé travail sur une thématique toxicologique
              précise (réglementation, toxicité spécifique, protection
              individuelle…). Les questions peuvent être par mail, courrier
              interne, ou une demande de RDV (dans un centre ou au service de
              toxicologie) avec un toxicologue.
            </p>
            <strong>ANALYSE DES FDS</strong>
            <p>
              Dépistage des CMR et analyse des principaux risques. FDS saisies
              et consultables dans TOXILIST.
            </p>

            <div className="toxilist">
              <Link href="https://www.toxilist.fr/">
                <a target="_blank">
                  <img
                    className="responsive-img photo logo-toxilist"
                    src="static/images/ecouter-et-accompagner/logo-toxilist.png"
                    title="En savoir plus sur Toxilist"
                  />
                </a>
              </Link>
            </div>
          </SimpleCard>
        </div>

        <div className="col s12">
          <SimpleCard cardClass="white col s12 m6">
            <strong>VISITE D’ENTREPRISE ACCOMPAGNÉE VISITE DIAGNOSTIC</strong>
            <p>
              Prestation qui consiste à accompagner un médecin du travail lors
              de sa visite d’entreprise. C’est une intervention avec échanges,
              mise en garde, et compte rendu de visite. L’objectif est
              d’orienter le médecin sur les principaux risques chimiques
              susceptibles d’être rencontrés dans un secteur d’activité.
            </p>
            <strong>INTERVENTION EN ENTREPRISE AVEC ÉTUDE POSTE</strong>
            <p>
              Sur une thématique précise, avec ou sans métrologie, mise en place
              de plan de prévention, accompagnement méthodologique…
            </p>

            <strong>
              ACCOMPAGNEMENT DANS LA MISE EN PLACE DE PLAN DE PRÉVENTION
            </strong>
          </SimpleCard>
        </div>

        <div className="col s12 m6">
          <StatCard cardClass="blue">
            <strong>332</strong>
            <span>
              DEMANDES D’INTERVENTION PARVENUES AU SERVICE TOXICOLOGIE
            </span>

            <strong>56 %</strong>
            <span>
              DU TEMPS DE TRAVAIL CONCERNE LES INTERVENTIONS EN ENTREPRISE
            </span>
            <strong>1 968</strong>
            <span>FDS CRÉÉES EN 2017</span>
          </StatCard>
        </div>

        <div className="col s12">
          <StatCard cardClass="blue">
            <strong>285</strong>
            <span>ACTIONS RÉALISÉES EN 2017</span>
          </StatCard>
        </div>

        <div className="col s12">
          <p>ici graphique en cercle</p>
        </div>

        <div className="col s12">
          <p>ici graphique en batons</p>
        </div>

        <div className="col s12">
          <StatCard cardClass="blue s12 m6">
            <strong>274</strong>
            <span>ENTREPRISES CONCERNÉES</span>
            <strong>28 826</strong>
            <span>SALARIÉS CONCERNÉS</span>
          </StatCard>
        </div>

        <H2 id="enquetes-diagnostic">Enquêtes et diagnostic</H2>

        <H3>Epidémiologie (Indicateurs Santé Travail)</H3>

        <div className="col s12">
          <SimpleCard cardClass="white">
            <p>
              Les demandes d’intervention concernant les entreprises restent
              stables par rapport à l’année dernière.
            </p>
            <p>
              La majorité des études sont réalisées grâce à la mise en place de
            </p>
            <strong className="evrest">L'Observatoire EVREST</strong>
            <p>
              Ceci étant des questionnaires spécifiques commencent à être
              utilisés.
            </p>
            <p>
              Ces questionnaires demandent plus de temps de préparation et
              d’analyse. Toutes les étapes de l’étude doivent être créées (Mise
              en forme du questionnaire, création du masque de saisie, saisie
              des données, analyses et rendus).
            </p>

            <div className="evrest">
              <Link href="http://evrest.istnf.fr">
                <a target="_blank">
                  <img
                    className="responsive-img photo logo-evrest"
                    src="static/images/ecouter-et-accompagner/logo-evrest.jpg"
                    title="En savoir plus sur Evrest"
                  />
                </a>
              </Link>
            </div>
          </SimpleCard>
        </div>

        <div className="col s12">
          <StatCard cardClass="blue">
            <strong>30</strong>
            <span>ÉTUDES ET ENQUÊTES EN DIRECTION DES ENTREPRISES</span>
            <strong>34</strong>
            <span>ACTIONS REALISEES</span>
          </StatCard>
        </div>

        <H3>Etudes et projets</H3>

        <div className="col s12">
          <SimpleCard cardClass="white">
            <strong>OBSERVATOIRE EVREST</strong>
            <ul className="card__list">
              <li>
                Animation interne autour du dispositif EVREST (intranet,
                sensibilisation en secteur)
              </li>
              <li>Production de documents</li>
              <li>Indicateurs de suivi</li>
            </ul>

            <strong>GROUPE AMIANTE</strong>
            <ul className="card__list">
              <li>
                Aide et exploitation d’un questionnaire sur l’exposition des
                salariés ayant été exposés à l’amiante
              </li>
            </ul>
            <strong>PROJET DRIVES</strong>

            <p>(33 SITES – 27 MÉDECINS DU TRAVAIL CONCERNÉS)</p>

            <li>
              Déploiement du projet concernant les DRIVES en hyper et
              supermarché afin d’élaborer des actions de prévention, en
              partenariat avec la CARSAT
            </li>
          </SimpleCard>
        </div>

        <div className="col s12">
          <SimpleCard cardClass="white">
            <ul className="card__list">
              <li>Communication</li>
              <li>Production de documents</li>
              <li>
                Analyse statistiques pour les sites ayant un effectif suffisant
              </li>
              <li>Coordination et suivi du projet</li>
              <li>Analyses globales des résultats</li>
            </ul>

            <strong>CONTROLES TECHNIQUES</strong>
            <ul className="card__list">
              <li>
                Exploitation de la base des observations faites dans le cadre du
                projet contrôles techniques en collaboration avec le service
                toxicologie
              </li>
            </ul>

            <strong>ETUDES ET ENQUETES dont SUMER et MCP</strong>
            <ul className="card__list">
              <li>
                Animation et accompagnement des équipes autour des dispositifs
                SUMER et MCP :
              </li>
              <li>SUMER : de janvier à juin 2017</li>
              <li>MCP : quinzaine du 13 au 27 novembre 2017</li>
            </ul>
          </SimpleCard>
        </div>

        <H2 id="drogues-alcool">
          Apporter des réponses adaptées face aux problématiques de consommation
          de drogues et d'alcool sur le lieu de travail
        </H2>

        <div className="col s12 m4">
          <SimpleCard cardClass="white">
            <p>
              Les consommations et addictions ont un impact réel sur l’état de
              santé du salarié.
            </p>

            <p>
              Les conduites individuelles sous l’emprise de drogues ou d’alcool
              représentent un risque à évaluer et à prendre en compte, en
              particulier sur les postes de sécurité. Cette thématique doit être
              perçue comme les autres risques et traitée comme telle. Mais
              aujourd’hui encore, c’est un sujet tabou en entreprise.
            </p>

            <p>
              Depuis la loi du 20 juillet 2011, la prévention des addictions et
              consommations est une mission de service pour la santé au travail.
            </p>

            <p>
              C’est pourquoi, PÔLE SANTÉ TRAVAIL a initié le Pôle Ressources en
              ADDictologie (PRADD) qui propose :
            </p>
          </SimpleCard>
        </div>

        <div className="col s12 m4">
          <SimpleCard cardClass="white">
            <p>Pour les salariés des :</p>

            <ul className="card__list">
              <li>
                Entretiens d’accompagnement (bilans – orientations –
                réinsertion)
              </li>
              <li>
                Consultations spécifiques sur prescription du médecin du travail
              </li>
              <li>
                Accompagnement : Évaluation des risques et mise en oeuvre des
                plans d’actions de prévention avec l’entreprise (> 6 jours)
              </li>
            </ul>

            <p>Pour les entreprises des :</p>

            <ul className="card__list">
              <li>Actions type « forum »</li>
              <li>
                interventions d’accompagnement au sein de l’entreprise avec un
                Intervenant en Prévention des Risques Professionnels
              </li>
            </ul>

            <p>
              Le PRADD est un outil d’aide pour les équipes santé travail. C’est
              le médecin du travail qui doit initier avec son équipe la question
              de la prévention autour de ce thème. Plusieurs outils ont été
              conçus par le PRADD en lien avec le service communication comme
              l’organisation d’un pot d’entreprise, quelques conseils, fiche
              constat, powerpoint de sensibilisation. Un module d’e-learning a
              également été développé.
            </p>
          </SimpleCard>
        </div>

        <div className="col s12">
          <StatCard icone="local_bar" cardClass="blue">
            <strong>80</strong>
            <span>Consultations</span>
            <strong>173</strong>
            <span>Entretiens réalisés</span>
            <strong>46</strong>
            <span>Salariés suivis</span>
            <strong>36</strong>
            <span>Entreprises accompagnées</span>
          </StatCard>
        </div>

        <H2 id="maintien-emploi">
          Accompagner les entreprises et les salariés dans la recherche de
          solutions pour le maintien dans l'emploi
        </H2>

        <div className="col s12">
          <p>Section en construction</p>
        </div>

        <H2 id="formation-des-salaries">
          La formation des salariés sur la santé au travail
        </H2>

        <div className="col s12 m6">
          <SimpleCard cardClass="white">
            <p>
              Organisme de formation créé en 1997 par les services de santé au
              travail de la métropole lilloise, PST formation a pour objectif de
              répondre aux attentes des entreprises en matière de formation de
              leurs personnels et d’actualiser son offre en continu pour coller
              aux réalités du terrain et aux besoins émergents.
            </p>

            <p>
              La force de PST formation réside dans sa connaissance du monde de
              l’entreprise et dans ses liens privilégiés avec la santé au
              travail, des atouts indéniables pour proposer une offre de
              formation adaptée et professionnelle.
            </p>
          </SimpleCard>
        </div>

        <div className="col s12 m6">
          <SimpleCard cardClass="white">
            <strong>
              UNE OFFRE DE SERVICE COMPLÈTE EN SANTÉ ET SÉCURITÉ AU TRAVAIL
            </strong>
            <p>
              L’offre de service de PST Formation couvre les différents champs
              de la santé et de la sécurité au travail : prévention mal de dos
              et des TMS, de l’incendie, des addictions, des risques à domicile,
              formations des Sauveteurs Secouristes du Travail, des formateurs
              SST, des membres CHSCT ... à travers 8 thématiques et pas loin de
              30 formations, PST Formation accompagne les entreprises dans une
              politique globale de prévention des risques.
            </p>
          </SimpleCard>
        </div>

        <div className="col s12 m6">
          <SimpleCard cardClass="white">
            <strong>
              UNE OFFRE DE SERVICE COMPLÈTE EN SANTÉ ET SÉCURITÉ AU TRAVAIL
            </strong>
            <p>
              L’offre de service de PST Formation couvre les différents champs
              de la santé et de la sécurité au travail : prévention mal de dos
              et des TMS, de l’incendie, des addictions, des risques à domicile,
              formations des Sauveteurs Secouristes du Travail, des formateurs
              SST, des membres CHSCT ... à travers 8 thématiques et pas loin de
              30 formations, PST Formation accompagne les entreprises dans une
              politique globale de prévention des risques.
            </p>

            <div className="pst">
              <Link href="http://www.pstformation.com/">
                <a target="_blank">
                  <img
                    className="responsive-img photo logo-pst"
                    src="static/images/ecouter-et-accompagner/logo-pst.jpg"
                    title="En savoir plus sur PST Formation"
                  />
                </a>
              </Link>
            </div>
          </SimpleCard>
        </div>

        <div className="col s12 m6">
          <StatCard cardClass="blue">
            <strong>3 564</strong>
            <span>SALARIÉS FORMES</span>

            <strong>60</strong>
            <span>
              SALARIÉS SUIVIS POTENTIELLEMENT PAR UN PSYCHOLOGUE DU TRAVAIL
            </span>
          </StatCard>
        </div>

        <div className="col s12 m6">
          <span>ici graphique en cercle</span>
        </div>
      </div>
    </div>

    <style jsx global>{`
      .amt {
        display: inline-block;
        padding: 1rem 0;
        font-size: 1.5rem;
      }

      @media only screen and (min-width: 992px) {
        .ergo__intro {
          height: 25rem;
          display: flex;
          justify-content: center;
          align-items: center;
          text-align: justify;
        }
      }

      .risques-chimiques {
        min-height: 30rem;
      }
    `}</style>
  </Layout>
);
