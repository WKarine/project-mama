import Link from "next/link";

import { sideNavColors } from "../../../../../constantes/colors";
import { sideNavDimensions } from "../../../../../constantes/dimensions";

const SubCategoryLink = ({ href, children }) => (
  <li key={href}>
    <Link href={href}>
      <a className="sub-category-link waves-effect">{children}</a>
    </Link>

    <style jsx>
      {`
        .sub-category-link {
          color: ${sideNavColors.fontColor};
          font-size: ${sideNavDimensions.subCategory.fontSize};
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
