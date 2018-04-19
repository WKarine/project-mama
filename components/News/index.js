import Link from "next/link";

import { MAX_CHAR } from "../../constantes/news";

const News = () => (
  <ul className="news collapsible">
    <li className="active">
      <div className="news__title collapsible-header">First</div>
      <div className="collapsible-body">
        <p className="news__summary">
          Lorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor
          sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit amet.....Lorem
          ipsum dolor sit amet.
        </p>
        <Link href="">
          <a className="news__read waves-effect waves-light btn-small">
            <i className="material-icons right">link</i>lire la suite
          </a>
        </Link>
      </div>
    </li>
    <style jsx>{`
      .news {
        position: relative;
      }

      .news .news__title {
        font-size: 1.5rem;
      }

      .news .news__summary {
        font-size: 1rem !important;
        margin-bottom: 2rem;
      }

      .news .news__read {
        font-variant: small-caps;
        position: absolute;
        bottom: 1rem;
        right: 1rem;
      }
    `}</style>
  </ul>
);

export default News;
