import { categoryColors } from "../../constantes/colors";

const ListCard = props => (
  <div className="row">
    <div className="col s12 m5">
      <div className="card-panel teal">
        <span className="white-text number">121212</span>
        <br />
        <span className="white-text number">121212</span>
      </div>
    </div>

    <style jsx>
      {`
        .number {
          font-size: 2rem;
          text-align: center;
        }
      `}
    </style>
  </div>
);

export default ListCard;
