import Link from "next/link";

import { brandColors } from "../../../constantes/colors";

const PanelAdmin = ({ email }) => (
  <div>
    <p>Connecté en tant que {email}</p>
    <ul>
      <li>
        <Link href="">
          <a className="waves-effect waves-light btn">Contact</a>
        </Link>
      </li>
      <li>
        <Link href="">
          <a className="waves-effect waves-light btn">Google Analytics</a>
        </Link>
      </li>
      <li>
        <Link href="">
          <a className="waves-effect waves-light btn">Résultats du sondage</a>
        </Link>
      </li>
      <li>
        <Link href="">
          <a className="waves-effect waves-light btn">
            Personnaliser les catégories
          </a>
        </Link>
      </li>
    </ul>
    <style jsx>{`
      ul {
        width: 100%;
      }
      li {
        margin: 2rem;
        text-align: center;
      }

      a {
        background-color: ${brandColors.actual} !important;
      }

      a:hover,
      a:active,
      a:focus {
        background-color: ${brandColors.actualHover} !important;
      }
    `}</style>
  </div>
);

export default PanelAdmin;
