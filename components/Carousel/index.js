import ImageCard from "../ImageCard";

class Carousel extends React.Component {
  componentDidMount() {
    const elem = document.querySelector(".carousel");
    M.Carousel.init(elem);
  }

  render() {
    return (
      <div className="carousel">
        <a className="carousel-item">
          <ImageCard
            title="LA LOI TRAVAIL"
            imageSrc="static/images/events/loi-travail.png"
          >
            En place depuis début janvier 2017, la loi travail impacte non
            seulement les équipes de Pôle Santé Travail mais aussi nos
            entreprises adhérentes, plus particulièrement dans le suivi de santé
            de leurs salariés. <br />
            C'est pourquoi Pôle Santé Travail a choisid'oraganiser des petits
            déjeuners d'information, destinés à toute nos entreprises afin de
            les accompagner et de les aider à décrypter le volet santé travail
            de la loi d'aôut 2016.
          </ImageCard>
        </a>
        <a className="carousel-item">
          <ImageCard
            title="SEMAINE DE LA PREVENTION DE LA FFB"
            imageSrc="static/images/events/prevention-ffb.png"
          >
            MARS 2017<br />
            Information de proximité sur 3 demi-journées autour du risque
            amiante et des TMS. <br />
            Une trentaine de salariés ont bénéficié de cette action.
          </ImageCard>
        </a>
        <a className="carousel-item">
          <ImageCard
            title="FORMATHON"
            imageSrc="static/images/events/formathon.png"
          >
            MARS 2017<br />
            Pôle Santé Travail a souhaité participer au congrès des medecins
            généralistes pour valoriser les partenariats medecine de ville et
            santé au travail. Ce fut l'occasion aussi de rencontrer des médecins
            généralistes à la recherche d'une nouvelle expérience
            professionnelle. Une vingtaine de contact ont été noués et 2
            médecins ont intégrés Pôle Santé Travail en tant que médecins
            collaborateurs.
          </ImageCard>
        </a>
        <a className="carousel-item">
          <ImageCard
            title="JOURNÉE D'INFORMATION SANTÉ TRAVAIL"
            imageSrc="static/images/events/information-sante-travail.png"
          >
            MARS 2017 <br />
            Le service communication a été sollicité pour organiser une table
            ronde sur le déploiement de la loi travail au sein de la JIST de
            mars. Échanges avec les différents membres d'équipes concernés,
            préparation des interviews et animation de la table ronde le jour J.
          </ImageCard>
        </a>
        <a className="carousel-item">
          <ImageCard
            title="SALON DE L'ENTREPRISE DU NORD"
            imageSrc="static/images/events/salon-entreprise.png"
          >
            MAI 2017<br />
            Pôle Santé Travail a animé un stand lors de la 2ème édition du Salon
            de l'Entreprise du Nord. L'objetif de cet évènement était de
            proposer aux entreprises des solutions clés en mains sur différents
            domaines. Nous avons rencontrés une vingtaine d'entreprises
            adhérentes sur la journée.
          </ImageCard>
        </a>
        <a className="carousel-item">
          <ImageCard
            title="PETIT DÉJEUNER BTP - MAINTIEN DANS L'EMPLOI"
            imageSrc="static/images/events/dejeuner-btp.png"
          />
        </a>
        <a className="carousel-item">
          <ImageCard
            title="CONGRÈS DES INTERNES"
            imageSrc="static/images/events/congres-internes.png"
          />
        </a>
        <a className="carousel-item">
          <ImageCard
            title="ASSEMBLÉE GÉNÉRALE "
            imageSrc="static/images/events/assemblee-generale.png"
          />
        </a>
        <a className="carousel-item">
          <ImageCard
            title="LES APRÈS-MIDI DE LA PRÉVENTION"
            imageSrc="static/images/events/apres-midi-prevention.png"
          />
        </a>
        <a className="carousel-item">
          <ImageCard
            title="CAMPUS EXPERTS COMPTABLES EXPOLE"
            imageSrc="static/images/events/campus-experts-comptables-expole.png"
          />
        </a>
        <a className="carousel-item">
          <ImageCard
            title="SALON CRÉER"
            imageSrc="static/images/events/salon-creer.png"
          />
        </a>
        <a className="carousel-item">
          <ImageCard
            title="PETIT-DÉJEUNER D'INFORMATION ETT"
            imageSrc="static/images/events/dejeuner-information-ett.png"
          />
        </a>
        <a className="carousel-item">
          <ImageCard
            title="INFORMATION LOI TRAVAIL/PARTENARIAT CFTC"
            imageSrc="static/images/events/information-loi-travail-cftc.png"
          />
        </a>
        <a className="carousel-item">
          <ImageCard
            title="JOURNÉE D'INFORMATION DU CISME"
            imageSrc="static/images/events/journee-information-cisme.png"
          />
        </a>
        <a className="carousel-item">
          <ImageCard
            title="POLE SANTÉ TRAVAIL 2030"
            imageSrc="static/images/events/pole-sante-travail-2030.png"
          />
        </a>
        <a className="carousel-item">
          <ImageCard
            title="RENTRÉE SOCIALE DE L'URIOPPS"
            imageSrc="static/images/events/rentree-sociale-uriopps.png"
          />
        </a>
      </div>
    );
  }
}

export default Carousel;
