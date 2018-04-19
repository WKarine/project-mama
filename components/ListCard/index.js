import { categoryColors } from "../../constantes/colors";

const ListCard = () => (
  <div className="list-card card-panel z-depth-0">
    <h6>572 professionnels</h6>
    <div className="row">
      <div className="col s12 m6">
        <ul>
          <li>
            <span>158 </span>Medecins du Travail
          </li>
          <li>
            <span>10 </span>Médecins Spécialisés
          </li>
          <li>
            <span>27 </span>IPRP et assimilés
          </li>
          <li>
            <span>55 </span>Assistants en Santé Travail
          </li>
          <li>
            <span>157 </span>Secrétaires Médicales et assistants d'équipe
          </li>
        </ul>
      </div>
      <div className="col s12 m6">
        <ul>
          <li>
            <span>46 </span>Infirmiers Santé Travail
          </li>
          <li>
            <span>14 </span>IDE
          </li>
          <li>
            <span>67 </span>Fonctions supports et administratives
          </li>
          <li>
            <span>38 </span>Opérationnels et fonctions métiers techniques
          </li>
        </ul>
      </div>
    </div>

    <style jsx>{`
      .list-card h6 {
        color: ${categoryColors.blue};
        font-size: 2rem;
        font-variant: small-caps;
        text-align: center;
      }

      .list-card span {
        color: ${categoryColors.blue};
        font-size: 2rem;
      }
    `}</style>
  </div>
);

export default ListCard;
