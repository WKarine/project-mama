import Layout from "../components/Layout";

// import Card from "../components/Card";
// import Chart from "../components/Chart";

export default () => (
  <Layout>
    {/* row obligatoire, vous pouvez en ajouter d'autre ensuite si besoin */}
    <div className="row">
      {/* ensuite a vous de choisir ce que vous mettez, pas obligé un col 12 */}
      <div className="col s12">
        {/* ici le contenu */}
        <h1>Ceci est un titre</h1>
        <Card className="special-card" />
        <h2>Sous-titre</h2>
        <Chart type="pie" />
      </div>
    </div>

    {/* ici le style, class obligatoire, n'utilisez pas celles de materialize, ajoutez la votre */}
    <style jsx global>
      {`
        .special-card {
          color: red;
        }
      `}
    </style>
  </Layout>
);
