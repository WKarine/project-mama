import { brandColors } from "../../constantes/colors";

const ListCard = () => (
  <div className="list-card card-panel z-depth-0">
    <h6>572 professionnels</h6>
    <div className="list-card__container">
      <ul className="list-card__left">
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
      <ul className="list-card__right">
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

    <style jsx>{`
      .list-card h6 {
        color: ${brandColors.actual};
        font-size: 2rem;
        font-variant: small-caps;
        text-align: center;
      }

      .list-card__left {
        padding-right:2rem;
      }

      .list-card li {
        font-size: 1rem;
      }

      .list-card span {
        color: ${brandColors.actual};
        display: inline-block;
        text-align: right;
        padding-right: 0.5rem;
        font-size: 1.5rem;
      }

      .list-card__container {
        display: flex;
        justify-content: space-around;
      }
    `}</style>
  </div>
);

export default ListCard;
