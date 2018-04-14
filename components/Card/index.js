import { categoryColors } from "../../constantes/colors";

const Card = props => {
  const textClass = props.textColor === "white" ? "white-text" : "black-text";
  const cardClass = "card-panel " + props.cardColor;

  return (
    <div className="col s12 m4">
      <div className={cardClass}>
        {props.h4 && <h4>{props.h4}</h4>}

        <span className={textColor}>{props.content}</span>

        <span>
          <ul>{props.ul.map(liContent => <li>{liContent}</li>)}</ul>
        </span>
      </div>
      <style jsx>
        {`
          .blue {
            background-color: ${categoryColors.blue};
            color: white;
          }
        `}
      </style>
    </div>
  );
};

export default Card;
