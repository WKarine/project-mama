import { brandColors } from "../../constantes/colors";

const Card = props => {
  const textClass = props.textStyle === "white" ? "white-text" : "black-text";
  const cardClass = "card-panel " + props.cardClass;
  return (
    <div className="col s12 m4">
      <div className={cardClass}>
        {/* Si le h4 existe: */}
        {props.h4 && <h4>{props.h4}</h4>}

        <span className={textClass}>{props.content}</span>
        <span>
          <ul>{props.ul.map(liContent => <li>{liContent}</li>)}</ul>
        </span>
      </div>
      <style jsx>
        {`
          .blue {
            background-color: ${brandColors.purple};
            color: white;
          }
        `}
      </style>
    </div>
  );
};

export default Card;
