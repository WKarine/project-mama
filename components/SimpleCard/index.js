import classnames from "classnames";

import { categoryColors } from "../../constantes/colors";

const SimpleCard = ({ cardClass, children, className }) => {
  const classes = classnames("simple-card", "card-panel", className, {
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

          @media only screen and (min-width: 992px) {
            .simple-card .card__list-container {
              display: flex;
            }

            .simple-card .card__list {
              padding: 2rem;
            }

            .simple-card .card__list-left {
              border-right: 1px solid #f1f1f1;
            }
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
          }

          .simple-card p {
            text-align: center;
          }

          .simple-card.white p {
            color: ${categoryColors.blue};
          }

          .simple-card .card__strong {
            font-size: 1.5rem;
            font-variant: small-caps;
          }
        `}
      </style>
    </div>
  );
};

export default SimpleCard;
