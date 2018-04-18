import Layout from "../components/Layout";
import H2 from "../components/H2";
import Card from "../components/Card";
import Carousel from "../components/Carousel";
import StatCard from "../components/StatCard";

export default () => (
  <Layout>
    <div className="row">
      <div className="col s12">
        <h1 className="main-title">fiche d'identité</h1>
      </div>

      <div className="col s12">
        <H2>qui sommes-nous ?</H2>
      </div>
    </div>

    <div className="row">
      <div className="col s12 m3 presentation">
        <Card cardClass="white">
          Association Paritaire sans but lucratif, PÔLE SANTÉ TRAVAIL bénéficie
          du statut d'association de type loi 1901.<br />
          Agréée par le Ministère du travail pour exercer ses missions de suivi
          de santé au travail, elle couvre un territoire précis:<br />
          <ul className="card__list">
            <li>l'Audomarois,</li>
            <li>Les Flandres intérieures,</li>
            <li>la métropole Lille Roubaix Tourcoing</li>
            <li>et le Douaisis.</li>
          </ul>
          Toutes les entreprises de ce secteur adhèrent à PÔLE SANTÉ TRAVAIL
          avec le paiement d’une cotisation.
        </Card>
      </div>

      <div className="col s12 m3">
        <Card cardClass="blue">
          PLUSIEURS INSTANCES GOUVERNENT L’ASSOCIATION :<br />
          <ul className="card__list">
            <li>
              <strong className="card__strong">
                un conseil d’administration paritaire
              </strong> avec un collège employeurs et un collège salariés qui définit la politique du service de santé au travail.
            </li>
            <li>
              Une commission de contrôle qui a pour mission de surveiller
              l’organisation et la gestion du service. Elle se prononce sur les
              rapports d’activité des médecins du travail et donne son accord
              sur leur nomination ou sur leur licenciement.
            </li>
            <li>
              <strong className="card__strong">
                une commission médico technique
              </strong> qui formule des propositions relatives aux priorités du service et
              aux actions pluridisciplinaires à mener pour établir le projet de
              service.
            </li>
          </ul>
        </Card>
      </div>

      <div className="col s12 m6">
        <img className="responsive-img" width="600" src="static/images/identite/carte_2017_sans_chiffre.png"/>
      </div>
    </div>

    <div className="row">
      <div className="col s12">
        <H2>les évènements marquant de l'année</H2>
      </div>
    </div>
    <div className="row">
      <div className="col s12 m3">
        
        <Card cardClass="blue">
          <strong className="card__strong">
          26 évènements
          </strong><br/>
          <span> ont été organisés par le service communication afin d'accompagner les nouveauté en santé travai et promouvoir ainsi les nouvelles missions du service.<br/>
          Chaque évènements est une opportunité de promotion et de valorisation des métiers et de l'image  du service et de la santé  au travail en général.</span>
        </Card>
      </div>
      <div className="col s12 m9">
        <Carousel/>
      </div>
    </div>

    <div className="row">
      <div className="col s12">
        <H2>les chiffres clés</H2>
      </div>
    </div>

    <div className="row">
      <div className="col s12 m3">
        <StatCard icone="people" cardClass="blue">
          <strong>1,5 million de salariés</strong>
          <span>dans les hauts-de-france :</span>
          <strong>30 %</strong>
          <span>sont suivis par pôle santé travail</span>
        </StatCard>
      </div>

      <div className="col s12 m3">
        <StatCard icone="wc" cardClass="white">
          <strong>32 252</strong>
          <span>entreprises adhérentes</span>
          <strong>476 848</strong>
          <span>salariés suivis dont</span>
          <strong>23 496</strong>
          <span>salariés intérimaires</span>
        </StatCard>
      </div>
    </div>
    
    <style jsx>
    {`
      img{
        width:
      }
    `}
    </style>
  </Layout>
);
