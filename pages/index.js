import Head from "next/head";
import { sideNavColors } from "../constantes/colors";

import Layout from "../components/Layout";
import News from "../components/News";

import { categoryColors, indexColors } from "../constantes/colors";
import { indexDimensions } from "../constantes/dimensions";

export default () => (
  <Layout>
    <div className="row">
      <div className="col s12">
        <section className="intro z-depth-1">
          <h1 className="intro__title">
            rapport annuel
            <br />
            d'activités
          </h1>

          <span className="year"> 2017 </span>

          <a className="intro__survey waves-effect waves-light  btn-flat">
            <i className="material-icons left">question_answer</i>accéder au
            questionnaire
          </a>

          <a className="intro__discover waves-effect waves-light btn-large">
            <i className="material-icons left">insert_chart</i>commencer la
            visite
          </a>

        </section>

        <div className="row">
          <div className="col s12 m6">
            <News />
          </div>
        </div>
      </div>
    </div>

    <style jsx global>
      {`
        .intro {
          background: url("static/images/home.jpg");
          background-size: cover;
          height: ${indexDimensions.intro.height};
          margin-top: 5vh;
          position: relative;
          width: ${indexDimensions.intro.width};
        }

        .intro__title {
          color: ${indexColors.intro.color};
          font-size: ${indexDimensions.intro.fontSize};
          font-variant: small-caps;
          margin-top: 0;
          padding-top: 10rem;
          text-align: center;
        }

        .intro__title:before {
          background-color: ${indexColors.intro.color};
          height: ${indexDimensions.intro.border.height};
          content: "";
          display: block;
          position: relative;
          left: 20%;
          width: ${indexDimensions.intro.border.width};
        }

        .intro__title:after {
          background-color: ${indexColors.intro.color};
          height: ${indexDimensions.intro.border.height};
          content: "";
          display: block;
          left: 40%;
          margin-top: 1rem;
          position: relative;
          width: ${indexDimensions.intro.border.width};
        }

        .intro__discover,
        .intro__survey {
          bottom: 1rem;
          position: absolute;
          transition: transform 0.2s ease-out;
        }

        .intro__discover {
          background: ${categoryColors.blue};
          right: 1rem;
        }

        .intro__survey {
          bottom: 1rem;
          color: ${indexColors.intro.color};
          left: 1rem;
        }

        .intro__discover:hover,
        .intro__discover:active,
        .intro__discover:focus {
          background-color: ${categoryColors.hover.blue};
          transform: translateY(-0.1rem);
        }

        .year {
          background-color: Whitesmoke;
          background-opacity: 0.5;
          border: solid 5px White;
          font-size: 5rem;
          font-weight: bold;
          margin-left: 60%;
          padding: 1.5rem;
        }
      `}
    </style>
  </Layout>
);
