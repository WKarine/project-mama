import { categoryColors } from "../../../constantes/colors";

const Footer = props => (
  <footer className="page-footer">
    <div className="footer__section footer__logo">
      <img className="responsive-img" src="static/images/logo-footer.png" />
    </div>

    <div className="footer__section footer__mission">
      <p className="grey-text text-lighten-4">
        LA SANTÉ DES ENTREPRISES ET DES SALARIÉS AU COEUR DE NOS PRÉOCCUPATIONS
        // Actions globales de prévention / Conseils sur la santé et la sécurité
        / Suivi de santé individuel / Indicateurs et traçabilité des expositions
      </p>
    </div>

    <div className="footer__section">
      <h5 className="white-text">Liens</h5>
      <ul>
        <li>
          <a className="grey-text text-lighten-3" href="#!">
            Réglement intérieur
          </a>
        </li>
        <li>
          <a className="grey-text text-lighten-3" href="#!">
            Status
          </a>
        </li>
        <li>
          <a className="grey-text text-lighten-3" href="#!">
            Conseil d'administration
          </a>
        </li>
        <li>
          <a className="grey-text text-lighten-3" href="#!">
            Commission de contrôle
          </a>
        </li>
        <li>
          <a className="grey-text text-lighten-3" href="#!">
            PST Formation
          </a>
        </li>
      </ul>
    </div>

    <div className="footer__section">
      <ul className="footer__buttons">
        <li>
          <a className="waves-effect btn-flat">
            <i class="material-icons left">cloud</i>
            button
          </a>
        </li>
        <li>
          <a className="waves-effect btn-flat">
            <i class="material-icons left">cloud</i>
            button
          </a>
        </li>
        <li>
          <a className="waves-effect btn-flat">
            <i class="material-icons left">cloud</i>
            button
          </a>
        </li>
      </ul>
    </div>

    <div className="footer-copyright">© 2014 Copyright Text</div>
    <style jsx>{`
      .page-footer {
        background-color: ${categoryColors.blue};
        display: flex;
        flex-wrap: wrap;
      }

      .footer__section {
        flex-basis: 25%;
        display: flex;
        flex-direction: column;
        justify-content: center;
      }

      .footer__logo {
        max-width: 150px;
        margin: auto;
      }

      .footer__mission {
        font-size: 0.7rem;
        padding: 0 0.5rem;
      }

      .footer__buttons {
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
      }

      .btn-flat {
        color: whitesmoke;
        border: 1px solid whitesmoke;
      }

      .footer-copyright {
        flex-basis: 100%;
        justify-content: center;
      }
    `}</style>
  </footer>
);

export default Footer;
