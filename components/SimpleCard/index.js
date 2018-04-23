import classnames from "classnames";

import { brandColors } from "../../constantes/colors";

const SimpleCard = ({ cardClass, children, className }) => {
  const classes = classnames("simple-card", "card-panel", className, {
    colored: cardClass === "colored",
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

          .simple-card.colored .card__list li::before {
            content: "• ";
            color: white;
            margin-right: 1rem;
          }

          .simple-card.white .card__list li::before {
            content: "• ";
            color: ${brandColors.actual};
            margin-right: 1rem;
          }

          .simple-card.colored {
            background-color: ${brandColors.actual};
            color: white !important;
          }

          .simple-card.white {
            background-color: white !important;
            border: 1px solid ${brandColors.actual};
          }

          .simple-card p {
            text-align: center;
          }

          .simple-card.white p {
            color: ${brandColors.actual};
          }

          .simple-card .card__strong {
            font-size: 1.5rem;
            font-variant: small-caps;
          }

          strong {
            display: block;
            text-align: center;
            font-size: 1.2rem;
            font-weight: bold;
          }
          .evrest,
          .toxilist {
            display: flex;
            justify-content: center;
            margin-bottom: 1rem;
          }
        `}
      </style>
    </div>
  );
};

export default SimpleCard;
