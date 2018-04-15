import Link from 'next/link';

import { sideNavColors } from "../../../../constantes/colors";

const CategoryLink = ({ textContent, href }) => {
  return (
    <li key={textContent}>
      <Link href={href}>
        <a className="categoryLink waves-effect">
          {textContent}
        </a>
      </Link>
      <style jsx>{`
        .categoryLink {
          color: ${sideNavColors.fontColor};
          font-variant: small-caps;
          font-size: 1.5rem;
          letter-spacing: 0.1rem;
        }
        `}
      </style>
    </li>
  );
};

export default CategoryLink;