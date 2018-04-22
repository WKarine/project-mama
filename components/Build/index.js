import { brandColors } from "../../constantes/colors";

const Build = () => (
  <div className="build">
    <i className="material-icons large">build</i>
    <style jsx>{`
      .build {
        align-items: center;
        display: flex;
        justify-content: center;
        height: 100vh;
        width: 100wh;
      }

      .build i {
        color: ${brandColors.orange} !important;
      }
    `}</style>
  </div>
);

export default Build;
