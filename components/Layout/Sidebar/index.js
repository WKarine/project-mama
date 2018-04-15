import Link from "next/link";
import CategoryLink from "./CategoryLink";
import { brandColors, hoverColors } from "../../../constantes/colors";

class Sidebar extends React.Component {
  componentDidMount() {
    // Initialisation du js de la Sidenav via materialize.min.js
    M.Sidenav.init(document.querySelector(".sidenav"));
  }

  render() {
    return (
      <div id="slidebar-container">
        <ul id="slide-out" className="sidenav sidenav-fixed">
          <Link href="/">
            <a>
              <img className="logo center-align" src="static/images/logo.png" />
            </a>
          </Link>

          {this.props.categoryLinksTextContent.map(link => (
            <CategoryLink textContent={link} href={link} key={link} />
          ))}
        </ul>

        <a href="#" data-target="slide-out" className="sidenav-trigger">
          <i className="material-icons">menu</i>
        </a>

        <style jsx>{`
          .logo {
            display: block;
            max-width: 13rem;
            margin: auto;
            padding-top: 2rem;
            padding-bottom: 2rem;
          }

          ul#slide-out:after {
            content: "";
            background: -webkit-linear-gradient(
              top,
              rgba(230, 48, 109, 1) 0%,
              rgba(83, 55, 139, 1) 30%,
              rgba(177, 201, 3, 1) 60%,
              rgba(242, 148, 0, 1) 100%
            );
            display: block;
            height: 100%;
            width: 0.5rem;
            position: absolute;
            top: 0;
            right: 0;
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

export default Sidebar;
