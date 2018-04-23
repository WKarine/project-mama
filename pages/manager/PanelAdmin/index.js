import Link from "next/link";

const PanelAdmin = () => (
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
    <style jsx>{`
      ul {
        width: 100%;
      }
      li {
        margin: 2rem;
        text-align: center;
      }
    `}</style>
  </ul>
);

export default PanelAdmin;
