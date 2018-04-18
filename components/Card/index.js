import classnames from "classnames";

import { categoryColors } from "../../constantes/colors";

const Card = ({ cardClass, children }) => {
  const classes = classnames("card-panel", {
    blue: cardClass === "blue",
    white: cardClass === "white"
  });

  return (
    <div className={classes}>
      <span>{children}</span>
      <p />
      <style jsx global>
        {`
          .card__list li {
            margin-bottom: 1rem;
          }

          .blue .card__list li::before {
            content: "• ";
            color: ${categoryColors.fontColor};
            margin-right: 1rem;
          }

          .white .card__list li::before {
            content: "• ";
            color: ${categoryColors.blue};
            margin-right: 1rem;
          }

          .blue {
            background-color: ${categoryColors.blue};
            color: ${categoryColors.fontColor} !important;
          }

          .white {
            background-color: white !important;
            border: 1px solid ${categoryColors.blue};
            color: ${categoryColors.blue} !important;
          }

          .card__strong {
            font-size: 1.3rem;
            font-variant: small-caps;
          }
        `}
      </style>
    </div>
  );
};

export default Card;
