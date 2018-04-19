import Link from "next/link";

import { categoryColors } from "../../constantes/colors";

import { MAX_CHAR } from "../../constantes/news";

const News = ({ dataList }) => (
  <ul className="news collapsible">
    {dataList.titles.map((title, i) => (
      <li className="news__item" key={title}>
        <div className="news__title collapsible-header">{title}</div>

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
        background-color: ${categoryColors.blue};
      }

      .news .news__title {
        font-size: 1rem;
      }

      .news .news__summary {
        font-size: 1rem !important;
        color: whitesmoke;
      }
    `}</style>
  </ul>
);

export default News;
