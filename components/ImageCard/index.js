const ImageCard = ({ imageSrc, title, children }) => (
  <div className="card image-card">
    <div className="card-image waves-effect waves-block waves-light">
      <img className="activator" src={imageSrc} />
    </div>

    <div className="card-content">
      <span className="card-title activator grey-text text-darken-4">
        {title}
        <i className="material-icons right">more_vert</i>
      </span>
    </div>

    <div className="card-reveal">
      <span className="card-title grey-text text-darken-4">
        {title}
        <i className="material-icons right">close</i>
      </span>
      {children}
    </div>

    <style jsx>
      {`
        .card {
          width: 350px;
        }

        .image-card .card-title {
          font-size: 1.2rem;
        }
      `}
    </style>
  </div>
);

export default ImageCard;
