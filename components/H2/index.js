import { brandColors } from "../../constantes/colors";

const H2 = props => {
  return (
    <h2>
      {props.children}
      <style jsx>
        {`
          h2 {
            font-size: 2.5rem;
            font-variant: small-caps;
          }
          h2:before {
            margin-right: 1rem;
            width: 1.3rem;
            height: 1.3rem;
            content: "";
            display: inline-block;
            position: relative;
            background-color: ${brandColors.purple};
          }
        `}
      </style>
    </h2>
  );
};

export default H2;
