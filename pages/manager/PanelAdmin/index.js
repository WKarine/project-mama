import Link from "next/link";

const PanelAdmin = () => (
  <div className="card-panel panel-admin">
    <ul>
      <li>
        <Link href="">
          <a class="waves-effect waves-light btn">Google Analytics</a>
        </Link>
      </li>
      <li>
        <Link href="">
          <a class="waves-effect waves-light btn">Contact</a>
        </Link>
      </li>
    </ul>
    <ul>
      <li>
        <Link href="">
          <a class="waves-effect waves-light btn">Résultats du sondage</a>
        </Link>
      </li>
      <li>
        <Link href="">
          <a class="waves-effect waves-light btn">
            Personnaliser les catégories
          </a>
        </Link>
      </li>
    </ul>
    <style jsx>{`
      .panel-admin {
        display: flex;
        justify-content: space-around;
        text-align: center;
      }
    `}</style>
  </div>
);

export default PanelAdmin;
