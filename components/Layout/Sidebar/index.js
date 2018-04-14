import CategoryLink from './CategoryLink';

class Sidebar extends React.Component {
  componentDidMount() {
    // Initialisation du js de la Sidenav via materialize.min.js
    M.Sidenav.init(document.querySelector('.sidenav'));
  }

  render() {
    return (
      <div>
        <ul id="slide-out" className="sidenav sidenav-fixed">
          {
            this.props.links.map(link => <CategoryLink {...link} key={link.textContent} />)
          }
        </ul>
        <a href="#" data-target="slide-out" className="sidenav-trigger"><i className="material-icons">menu</i></a>
        <style jsx>{`
          .sidenav-trigger {
            position: absolute;
            top: 1rem;
            left: 1rem;
          }
        `}</style>
      </div>
    )
  }
}

export default Sidebar;