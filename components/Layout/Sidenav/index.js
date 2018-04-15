import Link from "next/link";
import CategoryLink from "./CategoryLink";
import { sideNavColors } from "../../../constantes/colors";

class Sidenav extends React.Component {
  componentDidMount() {
    // Initialisation du js de la Sidenav via materialize.min.js
    M.Sidenav.init(document.querySelector(".sidenav"));
  }

  render() {
    return (
      <div>
        <ul id="slide-out" className="sidenav sidenav-fixed bg-pan-right">
          <div className="logo-container">
            <Link href="/">
              <a className="home-link">
                <img className="logo" src="static/images/logo.png" />
              </a>
            </Link>
          </div>

          {this.props.categoryLinks.map(link => (
            <CategoryLink
              textContent={link.textContent}
              href={link.href}
              key={link.textContent}
            />
          ))}
        </ul>

        <a href="#" data-target="slide-out" className="sidenav-trigger">
          <i className="material-icons">menu</i>
        </a>

        <style jsx>{`
          .logo-container {
            display: flex;
            justify-content: center;
            align-items: center;
            border-radius: 50%;
            height: 200px;
            width: 200px;
            margin: 2rem auto;
            background-color: white;
          }

          ul#slide-out:after {
            content: "";
            background: -webkit-linear-gradient(
              top,
              ${sideNavColors.pink} 0%,
              ${sideNavColors.purple} 30%,
              ${sideNavColors.green} 60%,
              ${sideNavColors.orange} 100%
            );
            display: block;
            height: 100%;
            width: 0.5rem;
            position: absolute;
            top: 0;
            right: 0;
          }

          .sidenav {
            background-color: ${sideNavColors.backgroundColor};
          }

          .sidenav-trigger {
            position: absolute;
            top: 1rem;
            left: 1rem;
          }
        `}</style>
      </div>
    );
  }
}

export default Sidenav;
