import SubCategoryLink from "./SubCategoryLink";

import { sideNavColors } from "../../../../constantes/colors";

const SubCategory = ({ href, title, subCategoryLinks }) => (
  <ul className="collapsible">
    <li className="collapsible-item">
      <div className="sub-category collapsible-header">{title}</div>

      <div className="sub-category__linkList collapsible-body">
        <ul>
          {/* On affiche chaque liens */}
          {subCategoryLinks.map(subCategoryLink => (
            <SubCategoryLink
              href={`${href}#${subCategoryLink.href}`}
              key={subCategoryLink.href}
            >
              {subCategoryLink.textContent}
            </SubCategoryLink>
          ))}
        </ul>
      </div>
    </li>
    <style jsx>{`
      .collapsible-item.active .sub-category {
        background-color: rgba(0, 0, 0, 0.05);
      }

      .sub-category {
        color: ${sideNavColors.fontColor};
        font-size: 1.5rem;
        font-variant: small-caps;
        letter-spacing: 0.1rem;
        margin-left: 0;
        padding-left: 3rem;
      }

      .sub-category:active,
      .sub-category:focus {
        outline: 0;
      }

      .sub-category__linkList {
        background-color: transparent;
      }
    `}</style>
  </ul>
);

export default SubCategory;
