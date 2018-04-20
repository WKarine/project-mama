import Link from "next/link";

import CategoryLink from "./CategoryLink";
import SubCategory from "./SubCategory";

import { sideNavColors } from "../../../constantes/colors";
import { sideNavDimensions } from "../../../constantes/dimensions";

class Sidenav extends React.Component {
  componentDidMount() {
    // Dès que le composant est initialisé on initialise aussi le js de materialize
    // Afin que la sidebar et les sous-menu fonctionnent correctement
    const $sidenav = document.querySelector(".sidenav");
    M.Sidenav.init($sidenav, {
      preventScrolling: false
    });

    const $subCategories = document.querySelectorAll(".collapsible");
    M.Collapsible.init($subCategories);
    // M.AutoInit();
  }

  render() {
    const { categoryLinks } = this.props;

    return (
      <div>
        <ul id="slide-out" className="sidenav sidenav-fixed z-depth-1">
          <Link href="/">
            <a className="logo-container">
              <img className="logo" src="static/images/logo.jpg" />
            </a>
          </Link>

          {/* On affiche tout les liens, array = sous-menu, sinon lien normal */}
          {categoryLinks.map(
            categoryLink =>
              Array.isArray(categoryLink) ? (
                <SubCategory
                  title={categoryLink[0]} // textContent de la catégorie
                  href={categoryLink[1]} // href
                  key={categoryLink[0]} // Nécessaire a react pour gérer le virtual dom
                  subCategoryLinks={categoryLink.slice(2)} // Les liens
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

          ::-webkit-scrollbar {
            width: 0.5rem;
          }

          ::-webkit-scrollbar-track {
            -webkit-box-shadow: 0 0 6px rgba(0, 0, 0, 0.8);
            border-radius: 2px;
            background: ${sideNavColors.scrollBar};
          }

          ::-webkit-scrollbar-thumb {
            border-radius: 2px;
            background: white;
          }

          .sidenav-trigger {
            z-index: 9;
          }

          @media only screen and (max-width: 992px) {
            .sidenav-trigger {
              font-size: 1.5rem;
              background-color: ${sideNavColors.backgroundColor};
              color: whitesmoke;
              border-radius: 50%;
              width: 5rem;
              height: 5rem;
              display: flex;
              justify-content: center;
              align-items: center;
              position: fixed;
              bottom: 2rem;
              right: 2rem;
            }
          }
        `}</style>
      </div>
    );
  }
}

export default Sidenav;
