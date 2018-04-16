import { brandColors } from "../../../constantes/colors";

const Footer = props => (
  <footer>
    <img src="../../static/images/download.png" />
    <p>
      LA SANTÉ DES ENTREPRISES ET DES SALARIÉS AU COEUR DE NOS PRÉOCCUPATIONS //
      Actions globales de prévention / Conseils sur la santé et la sécurité /
      Suivi de santé individuel / Indicateurs et traçabilité des expositions
    </p>

    <ul className="links">
      <li>Liens</li>
      <li>
        <a href="https://www.polesantetravail.fr/wp-content/uploads/2017/09/Reglement-interieur-POLE-SANTE-TRAVAIL-2017.pdf">
          Réglement intérieur
        </a>
      </li>
      <li>
        <a href="https://www.polesantetravail.fr/wp-content/uploads/2017/09/Statuts-POLE-SANTE-TRAVAIL-2017.pdf">
          Statuts
        </a>
      </li>
      <li>
        <a href="https://www.polesantetravail.fr/conseil-dadministration/">
          Conseil d'administration
        </a>
      </li>
      <li>
        <a href="https://www.polesantetravail.fr/commission-de-controle/">
          Commission de contrôle
        </a>
      </li>
      <li>
        <a href="http://www.pstformation.com/">PST Formation</a>
      </li>
    </ul>

    <ul className="link-button">
      <li>
        <a href="https://www.polesantetravail.fr/contact/#contact-form">
          <a className="waves-effect waves-light btn-large">
            <i className="material-icons left">message</i>Contact
          </a>
        </a>
      </li>
      <li>
        <a href="https://www.polesantetravail.fr/contact/#centre">
          <a className="waves-effect waves-light btn-large">
            <i className="material-icons left">gps_fixed</i>Votre centre
          </a>
        </a>
      </li>
      <li>
        <a href="https://twitter.com/PST_Nord">
          <a className="waves-effect waves-light btn-large">
            <i className="material-icons left">title</i>Twitter
          </a>
        </a>
      </li>
    </ul>

    <style jsx>
      {`
        footer {
          background-color: ${brandColors.purple};
          color: Whitesmoke;
          display: flex;
          justify-content: space-between;
          padding: 0.5rem;
        }

        img {
          display: block;
          max-height: 100px;
          margin: auto;
        }

        p {
          display: block;
          max-width: 200px;
          margin: auto;
          padding: 1rem;
        }

        .links {
          display: block;
          margin: auto;
          padding: 0.5rem;
        }

        .links a {
          color: Whitesmoke;
        }

        .links a:hover {
          color: ${brandColors.orange};
        }

        .link-button li {
          padding: 0.5rem;
        }

        .btn-large {
          height: 60px;
          width: 200px;
        }

        .link-button a {
          font-size: 1rem;
        }
      `}
    </style>
  </footer>
);

export default Footer;
