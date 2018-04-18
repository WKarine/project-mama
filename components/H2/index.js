import { categoryColors } from "../../constantes/colors";

const H2 = ({ id, children }) => (
  <h2 id={id}>
    {children}
    <style jsx>
      {`
        h2 {
          font-size: 3rem;
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

        @media only screen and (max-width: 992px) {
          h2 {
            font-size: 2rem;
          }
        }
      `}
    </style>
  </h2>
);

export default H2;
