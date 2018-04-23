import Link from "next/link";

import { brandColors } from "../../constantes/colors";

const News = ({ dataList }) => (
  <ul className="news collapsible">
    {dataList.titles.map((title, i) => (
      <li className="news__item" key={title}>
        <div className="news__title collapsible-header truncate">{title}</div>

        <div className="collapsible-body">
          <Link href={"https://www.polesantetravail.fr" + dataList.urls[i]}>
            <a title="Lire la suite..." target="_blank">
              <p className="news__summary">{dataList.summaries[i]}</p>
            </a>
          </Link>
        </div>
      </li>
    ))}
    <style jsx>{`
      .news .news__item {
        background-color: ${brandColors.actual};
      }

      .news .news__title {
        font-size: 1rem;
      }

      .news .news__summary {
        font-size: 1rem !important;
        color: white;
      }
    `}</style>
  </ul>
);

export default News;
