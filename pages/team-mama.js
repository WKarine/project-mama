import Link from "next/link";
import Layout from "../components/Layout";
import H1 from "../components/H1";

import ScrollAnimation from "react-animate-on-scroll";

export default () => (
  <Layout>
    <div className="container">
      <H1>Team-Mama</H1>
      <div className="row">
        <div className="col s12 m6">
          <ScrollAnimation animateIn="bounceInLeft">
            <div className="card">
              <div className="card-image">
                <img src="static/images/team-mama/thomas.jpg" />
                <span className="card-title">Thomas Ringot</span>
                <div className="card-content">
                  <p>
                    <strong>thomas ringot : </strong>Gestion du projet, mise en
                    place, formation de l'équipe entière et option "Hotline",
                    dit "The Boss". Dans son dos: "le Maniaque". Il a raison ce
                    connard de FullStack.
                  </p>
                </div>
                <div className="card-action">
                  <a href="#">This is a link</a>
                </div>
              </div>
            </div>
          </ScrollAnimation>
        </div>

        <div className="col s12 m6">
          <ScrollAnimation animateIn="bounceInDown">
            <div className="card">
              <div className="card-image">
                <img src="static/images/team-mama/mylene.jpg" />
                <span className="card-title">Mylène Vandaële</span>
                <div className="card-content">
                  <p>
                    <strong>mylène vandaële : </strong>Front-End, maquillage et
                    paillettes, d'un coup d'éponge sur le jsx elle passe
                    trépasse et s'éclate. Alcoolique a ses heures perdues.
                    Perdues sans son lingot.
                  </p>
                </div>
                <div className="card-action">
                  <a href="#">This is a link</a>
                </div>
              </div>
            </div>
          </ScrollAnimation>
        </div>

        <div className="col s12 m6">
          <ScrollAnimation animateIn="bounceInUp">
            <div className="card">
              <div className="card-image">
                <img src="" />
                <span className="card-title">Karine Wloch</span>
                <div className="card-content">
                  <p>
                    <strong>karine wloch : </strong>Statisticienne Pôle Santé
                    Travail, innitiatrice de ce projet, fullstack, Karine dit
                    "Mama" de par son expérience mais non de par son dynamisme
                    et de son enthousiasme. Gagnante un jour, gagnante toujours.
                  </p>
                </div>
                <div className="card-action">
                  <a href="#">This is a link</a>
                </div>
              </div>
            </div>
          </ScrollAnimation>
        </div>

        <div className="col s12 m6">
          <ScrollAnimation animateIn="bounceInRight">
            <div className="card">
              <div className="card-image">
                <img src="" />
                <span className="card-title">Simon Tesnière</span>
                <div className="card-content">
                  <p>
                    <strong>simon tesnière : </strong>Back-End, Simon dit Rahan,
                    sa longue chevelure blonde nous a tous fait rêver. De dos.
                    Du haut de ses 17 ans, ses logorrhées sont parfois censées
                    et compréhensibles de temps à autres!
                  </p>
                </div>
                <div className="card-action">
                  <a href="#">This is a link</a>
                </div>
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </div>
    </div>

    <style jsx>{`
      img {
        width: 150px;
      }

      .card-image {
        max-height: 400px;
      }

      .card-title,
      strong {
        font-size: 1.5rem;
        font-variant: small-caps;
        font-weight: bold;
      }
    `}</style>
  </Layout>
);
