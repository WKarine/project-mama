import classNames from "classnames";

import { categoryColors } from "../../constantes/colors";

const IconCard = ({ cardClass, dataList }) => {
  const classes = classNames("card", {
    green: cardClass === "green",
    white: cardClass === "white"
  });

  return (
    <div className={classes}>
      {dataList.map(data => (
        <div className="card__section">
          <div className="card__left">
            <i className="card__icon large material-icons">{data.icon}</i>
            <p className="card__textContent">{data.textContent}</p>
          </div>
          <div className="card__right">
            <span className="card__stat">{data.stat}</span>
          </div>
        </div>
      ))}
      <style jsx>{`
        .card.green {
          background-color: ${categoryColors.green};
          color: whitesmoke;
        }

        .card.white {
          background-color: white;
          color: ${categoryColors.green};
        }

        .card.card__left {
          display: flex;
          flex-direction: column;
        }

        .card.green .card__left {
          border-right: 2px solid whitesmoke;
        }

        .card.white .card__left {
          border-right: 2px solid ${categoryColors.green};
        }

        .card__section {
          display: flex;
          padding: 2rem 0;
        }

        .card.green .card__section:not(:last-child) {
          border-bottom: 3px dashed whitesmoke;
        }

        .card.white .card__section:not(:last-child) {
          border-bottom: 3px dashed ${categoryColors.green};
        }

        .card__left,
        .card__right {
          flex-basis: 50%;
        }

        .card__icon {
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .card__textContent {
          text-align: center;
          font-variant: small-caps;
          font-size: 1.5rem;
          font-weight: bold;
        }

        .card__right {
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .card__stat {
          font-size: 5rem;
        }
      `}</style>
    </div>
  );
};

export default IconCard;
