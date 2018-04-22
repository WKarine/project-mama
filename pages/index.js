import Head from "next/head";

import Layout from "../components/Layout";
import News from "../components/News";
import Loader from "../components/Loader";

import { sideNavColors } from "../constantes/colors";
import { categoryColors, indexColors } from "../constantes/colors";
import { indexDimensions } from "../constantes/dimensions";

import Services from "../services";

class Index extends React.Component {
  // static async getInitialProps({ req }) {
  //   const news = await Services.news.getNews();

  //   return news;
  // }
  state = {
    isLoading: true,
    news: []
  };

  async componentWillMount() {
    this.setState({
      news: await Services.news.getNews(),
      isLoading: false
    });
  }

  render() {
    return (
      <Layout>
        <div className="row">
          {this.state.isLoading ? (
            <Loader />
          ) : (
            <section className="intro z-depth-1">
              <div className="col s12 m6 offset-m3">
                <h1 className="intro__title">
                  Rapport annuel d'activités 2017
                </h1>
              </div>

              <div className="col s12">
                <a className="intro__survey waves-effect waves-light  btn-flat">
                  <i className="material-icons left">question_answer</i>accéder
                  au questionnaire
                </a>

                <a className="intro__discover waves-effect waves-light btn-large">
                  <i className="material-icons left">insert_chart</i>commencer
                  la visite
                </a>
              </div>
            </section>
          )}
        </div>
        <style jsx>{`
          .intro {
            background: url("static/images/home.jpg");
            background-size: cover;
            height: 100vh;
            position: relative;
          }

          .row {
            margin: 0;
          }

          @media only screen and (max-width: 992px) {
            .intro {
              background-position: 50%;
            }
          }

          .intro__title {
            background-color: rgba(255, 255, 255, 0.2);
            border-top: 3px solid whitesmoke;
            color: ${indexColors.intro.color};
            margin-top: 20vh;
            font-size: 3rem;
            text-align: center;
            text-shadow: 1px 1px rgba(0, 0, 0, 0.5);
            padding: 2rem;
            width: 100%;
          }

          @media only screen and (max-width: 992px) {
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

          @media only screen and (max-width: 992px) {
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

          @media only screen and (max-width: 992px) {
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
