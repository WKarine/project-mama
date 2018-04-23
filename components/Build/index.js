import { brandColors } from "../../constantes/colors";

const Build = ({ size = "small" }) => (
  <div className="build">
    <p>
      <span>en construction</span>
      <i className="material-icons large animated swing infinite">build</i>
    </p>
    <style jsx>{`
      .build {
        align-items: center;
        display: flex;
        justify-content: center;
        flex-direction: column;
        height: ${size === "small" ? "50vh" : "100vh"};
        width: 100wh;
      }

      .build p {
        align-items: center;
        color: white;
        clip-path: polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%);
        background-color: ${brandColors.orange} !important;
        display: flex;
        flex-direction: column;
        font-size: 1.5rem !important;
        font-variant: small-caps;
        font-weight: bold;
        height: 300px;
        justify-content: center;
        text-align: center;
        width: 300px;
      }

      .build i {
        color: white !important;
      }

      .build i:first-of-type {
      }
    `}</style>
  </div>
);

export default Build;
