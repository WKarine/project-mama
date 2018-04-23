import classNames from "classnames";

import { brandColors } from "../../constantes/colors";

const IconCard = ({ cardClass, dataList }) => {
  const classes = classNames("icon-card", "card", {
    colored: cardClass === "colored",
    white: cardClass === "white"
  });

  return (
    <div className={classes}>
      {dataList.map(data => (
        <div className="card__section" key={data.textContent}>
          <div className="card__left">
            {data.iconProvider === "materialize" ? (
              <i className="card__icon large material-icons">{data.icon}</i>
            ) : (
              <i className={`card__icon ${data.icon} fa-5x`} />
            )}
            <p className="card__textContent">{data.textContent}</p>
          </div>
          <div className="card__right">
            <span className="card__stat">{data.stat}</span>
          </div>
        </div>
      ))}
      <style jsx>{`
        .icon-card {
          overflow-x: hidden;
        }
        .icon-card.card.colored {
          background-color: ${brandColors.actual};
          color: white;
        }

        .icon-card.card.white {
          background-color: white;
          color: ${brandColors.actual};
        }

        .icon-card.card .card__left {
          display: flex;
          flex-direction: column;
        }

        .icon-card.card.colored .card__left {
          border-right: 2px solid white;
        }

        .icon-card.card.white .card__left {
          border-right: 2px solid ${brandColors.actual};
        }

        .icon-card .card__section {
          display: flex;
          padding: 2rem 0;
        }

        .icon-card.card.colored .card__section:not(:last-child) {
          border-bottom: 3px dashed white;
        }

        .icon-card.card.white .card__section:not(:last-child) {
          border-bottom: 3px dashed ${brandColors.actual};
        }

        .icon-card .card__left,
        .icon-card .card__right {
          flex-basis: 50%;
        }

        .icon-card .card__icon {
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .icon-card .card__textContent {
          text-align: center;
          font-variant: small-caps;
          font-size: 1rem;
          font-weight: bold;
          padding-left: 1rem;
          padding-right: 1rem;
        }

        .icon-card .card__right {
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .icon-card .card__stat {
          font-size: 3rem;
        }
      `}</style>
    </div>
  );
};

export default IconCard;
