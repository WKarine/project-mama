import { brandColors } from "../../constantes/colors";

const Build = () => (
  <div className="build">
    <p>Cette section est en construction</p>
    <i className="material-icons large animated swing infinite">build</i>

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
