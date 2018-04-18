import classnames from "classnames";

import { categoryColors } from "../../constantes/colors";

const StatCard = ({ cardClass, icone, children }) => {
  // z-depth-0 (Materialize) règle la bordure de la card
  const classes = classnames("stat-card", "card-panel", {
    // Tableau des noms de classe
    // Si le nom de classe est card-blue/card-white dans le fichier page, le css s'adaptera
    "card-blue": cardClass === "blue",
    "card-white": cardClass === "white"
  });

  return (
    <div className={classes}>
      <i className="large material-icons">{icone}</i>
      {children}

      <style jsx global>
        {`
          .stat-card.card-panel {
            display: flex;
            justify-content: center;
            flex-direction: column;
            text-align: center;
          }

          .stat-card strong {
            font-size: 3rem;
            font-variant: small-caps;
          }

          .stat-card span {
            font-size: 1.5rem;
            font-variant: small-caps;
          }

          .stat-card.card-blue {
            background-color: ${categoryColors.blue};
          }

          .stat-card.card-blue .material-icons {
            color: ${categoryColors.fontColor};
          }

          .stat-card.card-white {
            background-color: white;
          }

          .stat-card.card-white .material-icons {
            color: ${categoryColors.blue};
          }

          .stat-card.card-white strong,
          .stat-card.card-white span {
            color: ${categoryColors.blue} !important;
          }

          .stat-card.card-blue strong,
          .stat-card.card-blue span {
            color: ${categoryColors.fontColor} !important;
          }
        `}
      </style>
    </div>
  );
};

// exemple d'utilisation de la card
// <div className="col s12 m4">
//         <StatCard icone="people" cardClass="white">
//           <strong>1,5 million de salariés</strong>
//           <span>dans les hauts-de-france :</span>
//           <strong>30 %</strong>
//           <span>sont suivis par pôle snaté travail</span>
//         </StatCard>
//       </div>

export default StatCard;
