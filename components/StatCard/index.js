import classnames from "classnames";

import { categoryColors } from "../../constantes/colors";

const StatCard = ({ cardClass, icone, children, className }) => {
  const classes = classnames("stat-card", "card-panel", className, {
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
            font-size: 1rem;
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

          .stat-card.card-blue p {
            color: ${categoryColors.fontColor};
          }
        `}
      </style>
    </div>
  );
};

export default StatCard;
