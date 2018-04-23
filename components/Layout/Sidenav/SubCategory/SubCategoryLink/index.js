import Link from "next/link";

import { sideNavColors } from "../../../../../constantes/colors";

const SubCategoryLink = ({ href, children }) => (
  <li key={href}>
    <Link href={href}>
      <a className="sub-category-link waves-effect">{children}</a>
    </Link>

    <style jsx>
      {`
        .sub-category-link {
          color: white;
          font-size: 0.8rem;
          letter-spacing: 0.1rem;
          text-indent: 2rem;
        }

        .sub-category-link:focus,
        .sub-category-link:active {
          outline: 0;
        }
      `}
    </style>
  </li>
);

export default SubCategoryLink;
