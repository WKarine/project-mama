import Link from 'next/link';

const CategoryLink = ({ textContent, href }) => {
  return (
    <li key={textContent}>
      <Link href={href}>
        <a className="waves-effect">
          {textContent}
        </a>
      </Link>
    </li>
  );
};

export default CategoryLink;