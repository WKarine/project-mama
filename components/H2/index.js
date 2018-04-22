import { categoryColors } from "../../constantes/colors";
import ScrollAnimation from "react-animate-on-scroll";

const H2 = ({ id, children }) => (
  <div className="col s12">
    <ScrollAnimation animateIn="slideInUp" duration="0.4">
      <h2 id={id}>{children}</h2>
    </ScrollAnimation>
    <style jsx>
      {`
        h2 {
          font-size: 2.5rem;
          font-variant: small-caps;
        }

        h2:before {
          background-color: ${categoryColors.blue};
          content: "";
          display: inline-block;
          height: 1.5rem;
          margin-right: 1rem;
          width: 1.5rem;
        }

        @media only screen and (max-width: 992px) {
          h2 {
            font-size: 2rem;
          }
        }
      `}
    </style>
  </div>
);

export default H2;
