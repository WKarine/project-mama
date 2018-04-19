import Head from "next/head";
import { sideNavColors } from "../constantes/colors";

import Services from "../services";

import Layout from "../components/Layout";
import News from "../components/News";

import { categoryColors, indexColors } from "../constantes/colors";
import { indexDimensions } from "../constantes/dimensions";

class Index extends React.Component {
  static async getInitialProps({ req }) {
    const news = await Services.news.getNews();

    return news;
  }

  render() {
    return (
      <Layout>
        <div className="row">
          <section className="intro z-depth-1">
            <div className="col s12 m4 offset-m4">
              <h1 className="intro__title">rapport annuel d'activités</h1>
            </div>

            <div className="col s12">
              <span className="year"> 2017 </span>

              <a className="intro__survey waves-effect waves-light  btn-flat">
                <i className="material-icons left">question_answer</i>accéder au
                questionnaire
              </a>

              <a className="intro__discover waves-effect waves-light btn-large">
                <i className="material-icons left">insert_chart</i>commencer la
                visite
              </a>
            </div>
          </section>

          <div className="container">
            <div className="row">
              <div className="col s12 m6">
                <section className="news">
                  <News dataList={this.props} />
                </section>
              </div>
            </div>
          </div>
        </div>
        <style jsx>{`
        .col {
          padding: 0 !important;
        }

        .intro {
          background: url("static/images/home.jpg");
          background-size: cover;
          height: ${indexDimensions.intro.height};
          position: relative;
        }

        @media only screen and (max-width : 992px) {
          .intro {
            background-position: 50%;
          }
        }

        .intro__title {
          color: ${indexColors.intro.color};
          font-size: ${indexDimensions.intro.fontSize};
          font-variant: small-caps;
          border: 5px solid ${indexColors.intro.color};
          background-color: rgba(0, 0, 0, 0.5);
          padding 2.5rem;
          margin-top: 20%;
          text-align: center;
        }

        @media only screen and (max-width : 992px) {
          .intro__title {
            font-size: 3rem;
            border: none;
            background-color: transparent;
          }
        }

        .intro__discover,
        .intro__survey {
          bottom: 20%;
          position: absolute;
          transition: transform 0.2s ease-out;
          width: 20rem;
        }

        .intro__discover {
          background: ${categoryColors.blue};
          right: 20%;
        }

        @media only screen and (max-width : 992px) {
          .intro__discover {
            font-size: 1rem;
            left: calc(50% - 10rem);
            bottom: 30%;
          }
        }

        .intro__survey {
          color: ${indexColors.intro.color};
          left: 20%;
        }

        @media only screen and (max-width : 992px) {
          .intro__survey {
            font-size: 1rem;
            left: calc(50% - 10rem);
            bottom: 5%;
          }
        }

        .intro__survey:hover,
        .intro__survey:active,
        .intro__survey:focus {
          transform: translateY(-0.1rem);
        }

        .intro__discover:hover,
        .intro__discover:active,
        .intro__discover:focus {
          background-color: ${categoryColors.hover.blue};
          transform: translateY(-0.1rem);
        }

        .year {
          background-color: rgba(245, 245, 245, 0.4);
          border: solid 5px White;
          font-size: 5rem;
          font-weight: bold;
          margin-left: 60%;
          padding: 1.5rem;
          display: none;
        }
      `}</style>
      </Layout>
    );
  }
}

export default Index;
