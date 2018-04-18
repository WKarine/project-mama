// A finir, voir IconCard ou SimpleCard comme example
import { categoryColors } from "../../constantes/colors";

const ListCard = props => (
  <div className="card-panel teal">
    <span className="white-text number">{props.children}</span>
    <br />
    <span className="white-text number2">{props.children}</span>
    <style jsx>
      {`
        .card-panel {
          display: flex;
        }
        .number,
        .number2 {
          font-size: 2rem;
          text-align: center;
        }
      `}
    </style>
  </div>
);

export default ListCard;
