import Layout from "../components/Layout";

import H1 from "../components/H1";
import ImageCard from "../components/ImageCard";

export default () => (
  <Layout>
    <div className="container">
      <div className="row">
        <H1>Ceci est un titre</H1>

        <div className="col s12 m6 offset-m3">
          <ImageCard
            imageSrc="static/images/events/formathon.png"
            title="prout"
          >
            <p>Coucou</p>
          </ImageCard>
        </div>
      </div>
    </div>

    <style jsx>{``}</style>
  </Layout>
);
