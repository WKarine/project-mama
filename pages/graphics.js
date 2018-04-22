import { ResponsivePie } from "@nivo/pie";

import Layout from "../components/Layout";

// data 1

const data1 = [
  {
    id: "Risques psycho sociaux",
    label: "rps",
    value: 30,
    color: "hsl(13, 70%, 50%)"
  },
  {
    id: "Métrologie",
    label: "metro",
    value: 76,
    color: "hsl(340, 70%, 50%)"
  },
  {
    id: "Amiante",
    label: "amiante",
    value: 65,
    color: "hsl(340, 70%, 50%)"
  },

  {
    id: "Conseil Evaluation",
    label: "evrp",
    value: 11,
    color: "hsl(86, 70%, 50%)"
  },
  {
    id: "Ergonomie",
    label: "ergo",
    value: 284,
    color: "hsl(62, 70%, 50%)"
  },
  {
    id: "Sensibilisation",
    label: "sensibilisation",
    value: 5,
    color: "hsl(272, 70%, 50%)"
  }
];

// data 2

const data2 = [
  {
    id: "Etude toxicologique",
    label: "etude",
    value: 26,
    color: "hsl(340, 70%, 50%)"
  },
  {
    id: "Accompagnement",
    label: "accomp",
    value: 1,
    color: "hsl(272, 70%, 50%)"
  },
  {
    id: "Diagnostic",
    label: "diag",
    value: 33,
    color: "hsl(340, 70%, 50%)"
  },

  {
    id: "Conseil",
    label: "conseil",
    value: 26,
    color: "hsl(86, 70%, 50%)"
  },
  {
    id: "Sensibilisation",
    label: "sensib",
    value: 4,
    color: "hsl(62, 70%, 50%)"
  },

  {
    id: "FDS",
    label: "fds",
    value: 191,
    color: "hsl(13, 70%, 50%)"
  },

  {
    id: "Demarche EVRP",
    label: "evrp",
    value: 4,
    color: "hsl(272, 70%, 50%)"
  }
];

// data 3

const data3 = [
  {
    id: "Formation des formateurs SST",
    label: "sst",
    value: 83,
    color: "hsl(340, 70%, 50%)"
  },
  {
    id: "Formation catalogue",
    label: "catalogue",
    value: 560,
    color: "hsl(272, 70%, 50%)"
  },
  {
    id: "Bilan de compétences",
    label: "compétences",
    value: 98,
    color: "hsl(340, 70%, 50%)"
  }
];

const TestNivo = () => (
  <Layout>
    <div className="container">
      <div className="row">
        <div className="col s12">
          <div className="chart-container">
            {/* chapitre Ecouter et accompagner 
section ergonomie metrologie - graphique pie */}

            <p>Répartition des actions réalisées</p>

            <ResponsivePie
              data={data1}
              margin={{
                top: 55,
                right: 115,
                bottom: 79,
                left: 111
              }}
              innerRadius={0.55}
              colors="d320c"
              colorBy="id"
              borderColor="inherit:darker(0.6)"
              radialLabelsSkipAngle={0}
              radialLabelsTextXOffset={8}
              radialLabelsTextColor="#333333"
              radialLabelsLinkOffset={3}
              radialLabelsLinkDiagonalLength={26}
              radialLabelsLinkHorizontalLength={36}
              radialLabelsLinkStrokeWidth={1}
              radialLabelsLinkColor="inherit"
              slicesLabelsSkipAngle={0}
              slicesLabelsTextColor="#333333"
              animate={false}
              motionStiffness={110}
              motionDamping={16}
              legends={[
                {
                  anchor: "bottom",
                  direction: "row",
                  translateY: 56,
                  itemWidth: 100,
                  itemHeight: 14,
                  symbolSize: 14,
                  symbolShape: "circle"
                }
              ]}
            />
          </div>
        </div>

        <div className="col s12">
          <div className="chart-container">
            {/* chapitre Ecouter et accompagner 
section toxicologie - graphique pie */}
            <p>Répartition des actions réalisées</p>
            <ResponsivePie
              data={data2}
              margin={{
                top: 55,
                right: 135,
                bottom: 79,
                left: 111
              }}
              innerRadius={0.55}
              colors="d320c"
              colorBy="id"
              borderColor="inherit:darker(0.6)"
              radialLabelsSkipAngle={0}
              radialLabelsTextXOffset={8}
              radialLabelsTextColor="#333333"
              radialLabelsLinkOffset={3}
              radialLabelsLinkDiagonalLength={26}
              radialLabelsLinkHorizontalLength={36}
              radialLabelsLinkStrokeWidth={1}
              radialLabelsLinkColor="inherit"
              slicesLabelsSkipAngle={0}
              slicesLabelsTextColor="#333333"
              animate={false}
              motionStiffness={110}
              motionDamping={16}
              legends={[
                {
                  anchor: "bottom",
                  direction: "row",
                  translateY: 56,
                  itemWidth: 100,
                  itemHeight: 14,
                  symbolSize: 14,
                  symbolShape: "circle"
                }
              ]}
            />
          </div>
        </div>

        <div className="col s12">
          <div className="chart-container">
            {/* chapitre Ecouter et accompagner 
section formation - graphique pie */}
            <p>Répartition des actions réalisées</p>
            <ResponsivePie
              data={data3}
              margin={{
                top: 55,
                right: 135,
                bottom: 79,
                left: 111
              }}
              innerRadius={0.55}
              colors="nivo"
              colorBy="id"
              borderColor="inherit:darker(0.6)"
              radialLabelsSkipAngle={0}
              radialLabelsTextXOffset={8}
              radialLabelsTextColor="#333333"
              radialLabelsLinkOffset={3}
              radialLabelsLinkDiagonalLength={26}
              radialLabelsLinkHorizontalLength={36}
              radialLabelsLinkStrokeWidth={1}
              radialLabelsLinkColor="inherit"
              slicesLabelsSkipAngle={0}
              slicesLabelsTextColor="#333333"
              animate={false}
              motionStiffness={110}
              motionDamping={16}
              legends={[
                {
                  anchor: "bottom",
                  direction: "row",
                  translateY: 56,
                  itemWidth: 100,
                  itemHeight: 14,
                  symbolSize: 14,
                  symbolShape: "circle"
                }
              ]}
            />
          </div>
        </div>
      </div>
    </div>

    <style jsx>{``}</style>
  </Layout>
);

export default TestNivo;
