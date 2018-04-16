import classnames from "classnames";

import { categoryColors } from "../../constantes/colors";

const StatCard = ({ cardClass, icone, children }) => {
  // z-depth-0 (Materialize) règle la bordure de la card
  const classes = classnames("card-panel", "z-depth-0" ,{
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
          .card-panel {
            display: flex;
            justify-content: center;
            flex-direction: column;
            text-align: center;
          }

          strong {
            font-size: 3rem;
            font-variant: small-caps;
          }

          span {
            font-size: 1.5rem;
            font-variant: small-caps;
          }

          .card-blue {
            background-color: ${categoryColors.blue}
          }

          .card-blue .material-icons {
            color: ${categoryColors.fontColor}
          }

          .card-white {
            background-color: white;
          }

          .card-white .material-icons {
            color: ${categoryColors.blue};
          }

          .card-white strong,
          .card-white span {
            color:${categoryColors.blue} !important;
          }

          .card-blue strong,
          .card-blue span {
            color:${categoryColors.fontColor} !important;
          }
        `}
      </style>
    </div>
  );
}

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
