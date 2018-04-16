const News = () => (
  <div className="news collection">
    <a className="collection-item news__link" href="#!">
      <h3 className="news__title">
        Prévenir les situations à Risque Psychosocial
      </h3>
      <p className="news__summary">
        Le MEDEF Lille Métropole vous invite à un prochain « Rendez-vous de la
        prévention » sur le thème : Prévenir les situations à Risque
        Psychosocial Mardi 17 avril 2018 de 9h à 17h Campus Entreprises et Cités
        40 rue Eugène Jacquet à Marcq-en-Barœul…
      </p>
    </a>
    <a className="collection-item news__link" href="#!">
      Alvin
    </a>
    <a className="collection-item news__link" href="#!">
      Alvin
    </a>
    <a className="collection-item news__link" href="#!">
      Alvin
    </a>
    <style jsx>{`
      .news {
        margin-top: 2rem;
      }

      .news__link {
        color: black !important;
      }

      .news__link:hover {
        background-color: #0082c8 !important;
        color: whitesmoke !important;
      }

      .news__title {
        font-size: 1.5rem;
      }

      .news__summary {
        font-size: 0.75rem;
      }
    `}</style>
  </div>
);

export default News;
