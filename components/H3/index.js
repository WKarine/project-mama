import { categoryColors } from "../../constantes/colors";

const H3 = ({ id, children }) => (
  <div className="col s12">
    <h3 id={id}>{children}</h3>
    <style jsx>
      {`
        h3 {
          font-size: 2rem;
          font-variant: small-caps;
        }

        h3:before {
          background-color: ${categoryColors.grey};
          content: "";
          display: inline-block;
          height: 1rem;
          margin-left: 2rem;
          margin-right: 1rem;
          width: 1rem;
        }
      `}
    </style>
  </div>
);

export default H3;
