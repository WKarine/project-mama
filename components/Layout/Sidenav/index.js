import Link from "next/link";

import CategoryLink from "./CategoryLink";
import SubCategory from "./SubCategory";

import { sideNavColors } from "../../../constantes/colors";
import { sideNavDimensions } from "../../../constantes/dimensions";

class Sidenav extends React.Component {
  componentDidMount() {
    // Dès que le composant est initialisé on initialise aussi le js de materialize
    // Afin que la sidebar et les sous-menu fonctionnent correctement
    M.AutoInit();
  }

  render() {
    const { categoryLinks } = this.props;

    return (
      <div>
        <ul id="slide-out" className="sidenav sidenav-fixed z-depth-1">
          <Link href="/">
            <div className="logo-container">
              <img className="logo" src="static/images/logo.jpg" />
            </div>
          </Link>

          {/* On affiche tout les liens, array = sous-menu, sinon lien normal */}
          {categoryLinks.map(
            categoryLink =>
              Array.isArray(categoryLink) ? (
                <SubCategory
                  title={categoryLink[0]}
                  key={categoryLink[0]}
                  subCategoryLinks={categoryLink.slice(1)}
                />
              ) : (
                <CategoryLink
                  textContent={categoryLink.textContent}
                  href={categoryLink.href}
                  key={categoryLink.textContent}
                />
              )
          )}
        </ul>

        {/* icon pour toggle la sideNav */}
        <a href="#" data-target="slide-out" className="sidenav-trigger">
          <i className="medium material-icons">menu</i>
        </a>

        <style jsx>{`
          .logo-container {
            align-items: center;
            background-color: ${sideNavColors.logo.backgroundColor};
            border-radius: 50%;
            cursor: pointer;
            display: flex;
            height: ${sideNavDimensions.logo.height};
            justify-content: center;
            margin: 2rem auto;
            width: ${sideNavDimensions.logo.width};
          }

          .sidenav {
            background: ${sideNavColors.backgroundColor}; /* fallback for old browsers */
            background: ${sideNavColors.backgroundGradient}; /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
          }

          .sidenav-trigger {
            left: 1rem;
            position: absolute;
            top: 1rem;
            z-index: 10;
          }
        `}</style>
      </div>
    );
  }
}

export default Sidenav;
