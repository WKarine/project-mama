import Layout from "../components/Layout";
import H2 from "../components/H2";
import ListCard from "../components/ListCard";
import ImageCard from "../components/ImageCard";

export default () => (
  <Layout>
    <div className="row">
      <div className="col s12">
        <h1>Perspectives</h1>
      </div>

      <div className="col s12">
        <H2>titre h2</H2>
      </div>

      <div className="col s12 m4">
        <ImageCard title="Event 1" imageSrc="../static/images/events/4.png ">
          <p>DEDEDE</p>
        </ImageCard>
      </div>
    </div>
  </Layout>
);
