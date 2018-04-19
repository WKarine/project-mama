import Link from "next/link";

import Layout from "../components/Layout";
import H1 from "../components/H1";
import H2 from "../components/H2";

import StatCard from "../components/StatCard";

export default () => (
  <Layout>
    <div className="container">
      <div className="row">
        <H1 className="main-title">
          Mener des actions au coeur des branches professionnelles
        </H1>

        <div className="col s12">
          <p>
            PÔLE SANTÉ TRAVAIL s’est fixé comme priorité d’accompagner les TPE
            de branches identifiées comme prioritaires dans le cadre de son
            projet de service et de prolonger son action vers les jeunes en
            formation dans ces métiers.
          </p>
        </div>
        <H2 id="chrd">CHRD (Cafés, Hôtels, Restaurants, Discothèques)</H2>

        <div className="col s12 m6">
          <p>trouver une icone</p>
          <Link href="http://www.chodevant.fr/">
            <a target="_blank">www.chodevant.fr</a>
          </Link>
        </div>

        <div className="col s12 m6">
          <StatCard cardClass="blue">
            <strong>1 724</strong>
            <span>ENTREPRISES CONCERNEES</span>

            <strong>13 047</strong>
            <span>SALARIES CONCERNEES</span>
          </StatCard>
        </div>

        <H2 id="colorisk">Colorisk (Peintres en bâtiments)</H2>

        <div className="col s12 m6">
          <StatCard cardClass="blue">
            <strong>429</strong>
            <span>ENTREPRISES CONCERNEES</span>

            <strong>2 803</strong>
            <span>SALARIES CONCERNEES</span>
          </StatCard>
        </div>

        <div className="col s12 m6">
          <p>trouver une icone</p>
          <Link href="http://www.colorisk.fr/">
            <a target="_blank">www.colorisk.fr</a>
          </Link>
        </div>

        <H2 id="metiers-du-bois">Les métiers du bois</H2>
        <div className="col s12 m6">
          <p>trouver une icone</p>
        </div>

        <div className="col s12 m6">
          <StatCard cardClass="blue">
            <strong>511</strong>
            <span>ENTREPRISES CONCERNEES</span>

            <strong>4 939</strong>
            <span>SALARIES CONCERNEES</span>
          </StatCard>
        </div>
      </div>
    </div>
    <style jsx>{``}</style>
  </Layout>
);
