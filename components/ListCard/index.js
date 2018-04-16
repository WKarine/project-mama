import { categoryColors } from "../../constantes/colors";

const ListCard = props => (
  <div className="row">
    <div className="col s12 m5">
      <div className="card-panel teal">
        <span className="white-text number">{props.children}</span>
        <br />
        <span className="white-text number2">{props.children}</span>
      </div>
    </div>

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
