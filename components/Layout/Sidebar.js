class Sidebar extends React.Component {

  componentDidMount() {
    M.Sidenav.init(document.querySelector('.sidenav'));
  }

  render() {
    return (
      <div>
        <ul id="slide-out" className="sidenav sidenav-fixed">
          <li><a href="#!"><i className="material-icons">cloud</i>First Link With Icon</a></li>
          <li><a href="#!">Second Link</a></li>
          <li><div className="divider"></div></li>
          <li><a className="subheader">Subheader</a></li>
          <li><a className="waves-effect" href="#!">Third Link With Waves</a></li>
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