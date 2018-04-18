import classnames from "classnames";

import { categoryColors } from "../../constantes/colors";

const SimpleCard = ({ cardClass, children }) => {
  const classes = classnames("simple-card", "card-panel", {
    blue: cardClass === "blue",
    white: cardClass === "white"
  });

  return (
    <div className={classes}>
      <span>{children}</span>
      <style jsx global>
        {`
          .simple-card .card__list li {
            margin-bottom: 1rem;
          }

          .simple-card.blue .card__list li::before {
            content: "• ";
            color: ${categoryColors.fontColor};
            margin-right: 1rem;
          }

          .simple-card.white .card__list li::before {
            content: "• ";
            color: ${categoryColors.blue};
            margin-right: 1rem;
          }

          .simple-card.blue {
            background-color: ${categoryColors.blue};
            color: ${categoryColors.fontColor} !important;
          }

          .simple-card.white {
            background-color: white !important;
            border: 1px solid ${categoryColors.blue};
            color: ${categoryColors.blue} !important;
          }

          .simple-card .card__strong {
            font-size: 1.3rem;
            font-variant: small-caps;
          }
        `}
      </style>
    </div>
  );
};

export default SimpleCard;
