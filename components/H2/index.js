import { categoryColors } from "../../constantes/colors";

const H2 = props => (
  <h2>
    {props.children}
    <style jsx>
      {`
        h2 {
          font-size: 2rem;
          font-variant: small-caps;
        }

        h2:before {
          background-color: ${categoryColors.blue};
          content: "";
          display: inline-block;
          height: 1rem;
          margin-right: 1rem;
          width: 1rem;
        }
      `}
    </style>
  </h2>
);

export default H2;
