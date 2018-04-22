import Layout from "../components/Layout";
import H1 from "../components/H1";
import H2 from "../components/H2";
import SimpleCard from "../components/SimpleCard";
import Carousel from "../components/Carousel";
import StatCard from "../components/StatCard";
import ListCard from "../components/ListCard";
import IconCard from "../components/IconCard";

export default () => (
  <Layout>
    <div className="container">
      <div className="row">
        <H1>fiche d'identité</H1>

        <H2 id="qui-sommes-nous">qui sommes-nous ?</H2>

        <div className="col s12 m5">
          <SimpleCard cardClass="white">
            Association Paritaire sans but lucratif, PÔLE SANTÉ TRAVAIL
            bénéficie du statut d'association de type loi 1901.<br />
            Agréée par le Ministère du travail pour exercer ses missions de
            suivi de santé au travail, elle couvre un territoire précis:<br />
            <ul className="card__list">
              <li>l'Audomarois,</li>
              <li>Les Flandres intérieures,</li>
              <li>la métropole Lille Roubaix Tourcoing</li>
              <li>et le Douaisis.</li>
            </ul>
            Toutes les entreprises de ce secteur adhèrent à PÔLE SANTÉ TRAVAIL
            avec le paiement d’une cotisation.
          </SimpleCard>
        </div>

        <div className="col s12 m6">
          <SimpleCard cardClass="blue">
            <strong className="card__strong">
              PLUSIEURS INSTANCES GOUVERNENT L’ASSOCIATION :
            </strong>
            <ul className="card__list">
              <li>
                un conseil d’administration paritaire avec un collège employeurs
                et un collège salariés qui définit la politique du service de
                santé au travail.
              </li>
              <li>
                Une commission de contrôle qui a pour mission de surveiller
                l’organisation et la gestion du service. Elle se prononce sur
                les rapports d’activité des médecins du travail et donne son
                accord sur leur nomination ou sur leur licenciement.
              </li>
              <li>
                une commission médico technique qui formule des propositions
                relatives aux priorités du service et aux actions
                pluridisciplinaires à mener pour établir le projet de service.
              </li>
            </ul>
          </SimpleCard>
        </div>

        <div className="col s12 center-align">
          <img
            className="responsive-img"
            src="static/images/identite/carte_2017_sans_chiffre.png"
          />
        </div>

        <H2>les évènements marquant de l'année</H2>

        <div className="col s12 m4">
          <div className="events__cardContainer">
            <SimpleCard cardClass="blue">
              <strong className="card__strong">26 évènements</strong>

              <br />

              <span>
                ont été organisés par le service communication afin
                d'accompagner les nouveauté en santé travai et promouvoir ainsi
                les nouvelles missions du service.<br />
                Chaque évènements est une opportunité de promotion et de
                valorisation des métiers et de l'image du service et de la santé
                au travail en général.
              </span>
            </SimpleCard>
          </div>
        </div>

        <div className="col s12 m8">
          <Carousel />
        </div>

        <div className="col s12">
          <H2>les chiffres clés</H2>
        </div>

        <div className="col s12 m5 offset m1">
          <StatCard icone="people" cardClass="blue">
            <strong>1,5 million de salariés</strong>
            <span>dans les hauts-de-france :</span>
            <strong>30 %</strong>
            <span>sont suivis par pôle santé travail</span>
          </StatCard>
        </div>

        <div className="col s12 m5 offset-m1">
          <StatCard icone="home" cardClass="white">
            <strong>32 252</strong>
            <span>entreprises adhérentes</span>
            <strong>476 848</strong>
            <span>salariés suivis dont</span>
            <strong>23 496</strong>
            <span>salariés intérimaires</span>
          </StatCard>
        </div>

        <div className="col s12">
          <ListCard />
        </div>
      </div>
    </div>
    <style jsx>{`
      .events__cardContainer {
        height: 350px;
        display: flex;
        justify-content: center;
        align-items: flex-end;
      }

      @media only screen and (max-width: 992px) {
        .events__cardContainer {
          height: initial;
        }
      }
    `}</style>
  </Layout>
);
