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
          >
            Les TPE du BTP ont été invitées à participer à un petit déjeuner
            autour de la performance de leur entreprise et de comment garder ses
            salariés en bonne santé. 8 TPE étaient présentes autour de PÔLE
            SANTÉ TRAVAIL, de l’OPPBTP et du SAMETH pour échanger ensemble sur
            ces thématiques.
          </ImageCard>
        </a>
        <a className="carousel-item">
          <ImageCard
            title="CONGRÈS DES INTERNES"
            imageSrc="static/images/events/congres-internes.png"
          >
            PÔLE SANTÉ TRAVAIL a été partenaire du Congrès des internes. Des
            supports ont été spécialement crées pour cette cible privilégiée.
            Les Ressources Humaines ont pu rencontrer et échanger de manière
            privilégiée avec les futurs médecins du travail. PÔLE SANTÉ TRAVAIL
            en tant que médecins collaborateurs.
          </ImageCard>
        </a>
        <a className="carousel-item">
          <ImageCard
            title="ASSEMBLÉE GÉNÉRALE "
            imageSrc="static/images/events/assemblee-generale.png"
          >
            PÔLE SANTÉ TRAVAIL a profité de l’assemblée générale pour proposer
            un retour juridique sur la loi travail. Plus de 40 entreprises
            étaient présentes sur ce temps fort. Un second temps a été réservé
            aux administrateurs et à l’interne pour travailler sur le projet
            PÔLE SANTÉ TRAVAIL 2030.
          </ImageCard>
        </a>
        <a className="carousel-item">
          <ImageCard
            title="LES APRÈS-MIDI DE LA PRÉVENTION"
            imageSrc="static/images/events/apres-midi-prevention.png"
          >
            Maintien dans l’emploi, loi travail et les missions du service de
            santé au travail ont été les 3 thématiques d’intervention proposées
            cette année. 30 entreprises participent à ces rencontres
            d’information.
          </ImageCard>
        </a>
        <a className="carousel-item">
          <ImageCard
            title="CAMPUS EXPERTS COMPTABLES EXPOLE"
            imageSrc="static/images/events/campus-experts-comptables-expole.png"
          >
            Les experts comptables ont été identifiés comme une cible
            privilégiée du service afin d’augmenter notre visibilité auprès des
            TPE. EXPOLE est le rendez-vous annuel des experts- comptables. En
            équipe avec le CEDEST et l’ASTIL62, nous avons informé plus de 55
            contacts sur notre activité et proposé des partenariats privilégiés.
          </ImageCard>
        </a>
        <a className="carousel-item">
          <ImageCard
            title="SALON CRÉER"
            imageSrc="static/images/events/salon-creer.png"
          >
            CRÉER en Nord-Pas de Calais est un salon régional qui se tient
            chaque année à Lille Grand Palais pour aider les créateurs
            d’entreprise et les jeunes TPE. Nous avons accueilli sur le stand
            120 visiteurs qualifiés.
          </ImageCard>
        </a>
        <a className="carousel-item">
          <ImageCard
            title="PETIT-DÉJEUNER D'INFORMATION ETT"
            imageSrc="static/images/events/dejeuner-information-ett.png"
          >
            Autour de la loi travail, nous avons organisé un petit déjeuner
            d’information dédié aux agences d’emplois en lien avec le service
            juridique et le Dr LEROYER. Près de 15 Agences d’emplois ont
            participé à cette information.
          </ImageCard>
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
          >
            Le service communication a appuyé le service de toxicologie
            industriel et l’AFOMÉTRA pour leurs présentations respectives dans
            le cadre des journées du CISME : diaporama et clips vidéos ont été
            réalisés pour valoriser TOXILIST.fr et le e-learning. Bénéfice
            attendu : mutualisation des outils.
          </ImageCard>
        </a>
        <a className="carousel-item">
          <ImageCard
            title="POLE SANTÉ TRAVAIL 2010"
            imageSrc="static/images/events/pole-sante-travail-2030.png"
          >
            Le projet PÔLE SANTÉ TRAVAIL 2030 a débuté par le portrait culturel
            de notre association. Près de 100 personnes, salariés,
            administrateurs, partenaires et entreprises ont répondu aux
            sociologues du cabinet une ÎLE. Le portrait s’est poursuivi avec
            l’organisation de 3 tables rondes pluridisciplinaires qui ont
            mobilisé plus de 35 personnes.
          </ImageCard>
        </a>
        <a className="carousel-item">
          <ImageCard
            title="RENTRÉE SOCIALE DE L'URIOPPS"
            imageSrc="static/images/events/rentree-sociale-uriopps.png"
          >
            En lien avec la relation adhérents, la rentrée sociale de l’URIOPPSS
            permet de mobiliser des contacts dans le secteur des aides à
            domicile.
          </ImageCard>
        </a>
        <style jsx>{`
          .carousel {
            height: 350px;
          }

          .carousel a {
            color: initial !important;
          }
        `}</style>
      </div>
    );
  }
}

export default Carousel;
