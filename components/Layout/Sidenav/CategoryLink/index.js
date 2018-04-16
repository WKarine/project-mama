import Link from "next/link";

import { sideNavColors } from "../../../../constantes/colors";

const CategoryLink = ({ href, textContent }) => (
  <li key={textContent}>
    <Link href={href}>
      <a className="category-link waves-effect">{textContent}</a>
    </Link>
    <style jsx>
      {`
        .category-link {
          color: ${sideNavColors.fontColor};
          font-variant: small-caps;
          font-size: 1.5rem;
          letter-spacing: 0.1rem;
          margin-left: 0;
          padding-left: 3rem;
        }

        .category-link:focus,
        .category-link:active {
          outline: 0;
        }
      `}
    </style>
  </li>
);

export default CategoryLink;
