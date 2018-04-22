import { ResponsiveBar } from "@nivo/bar";

import Layout from "../components/Layout";

const data = [
  {
    type: "Diagnostic",
    number: 154,
    numberColor: "hsl(218, 70%, 50%)"
  },
  {
    type: "Conseil",
    number: 72,
    numberColor: "hsl(218, 70%, 50%)"
  },
  {
    type: "Accompagnement",
    number: 29,
    numberColor: "hsl(218, 70%, 50%)"
  },
  {
    type: "Maintien dans l'emploi",
    number: 12,
    numberColor: "hsl(218, 70%, 50%)"
  },
  {
    type: "TMS Pro",
    number: 3,
    numberColor: "hsl(218, 70%, 50%)"
  },
  {
    type: "Sensibilisation",
    number: 2,
    numberColor: "hsl(218, 70%, 50%)"
  }
];

const data2 = [
  {
    type: "Risques chimiques",
    number: 237,
    numberColor: "hsl(218, 70%, 50%)"
  },
  {
    type: "CMR",
    number: 40,
    numberColor: "hsl(218, 70%, 50%)"
  },
  {
    type: "Autres types *",
    number: 8,
    numberColor: "hsl(218, 70%, 50%)"
  }
];

const data3 = [
  {
    country: "diagnostic",

    année_2016: 72,
    number_Color: "hsl(218, 70%, 50%)",
    année_2017: 55,
    number_Color: "hsl(130, 70%, 50%)"
  },

  {
    country: "conseil",

    année_2017: 150,
    number_Color: "hsl(130, 70%, 50%)",
    année_2016: 100,
    number_Color: "hsl(218, 70%, 50%)"
  }
];

const TestNivo = () => (
  <Layout>
    <div className="container">
      <div className="row">
        {/* Graphiques bar ergonomie */}
        <div className="col s12">
          <div className="chart-container">
            <ResponsiveBar
              data={data}
              keys={["number"]}
              indexBy="type"
              margin={{
                top: 50,
                right: 15,
                bottom: 100,
                left: 60
              }}
              padding={0.3}
              colors="d310"
              colorBy="id"
              defs={[
                {
                  id: "dots",
                  type: "patternDots",
                  background: "inherit",
                  color: "#38bcb2",
                  size: 4,
                  padding: 1,
                  stagger: true
                },
                {
                  id: "lines",
                  type: "patternLines",
                  background: "inherit",
                  color: "#eed312",
                  rotation: -45,
                  lineWidth: 6,
                  spacing: 10
                }
              ]}
              fill={[
                {
                  match: {
                    id: ""
                  },
                  id: ""
                },
                {
                  match: {
                    id: ""
                  },
                  id: ""
                }
              ]}
              borderColor="inherit:darker(1.6)"
              axisBottom={{
                orient: "bottom",
                tickSize: 12,
                tickPadding: 5,
                tickRotation: 35,
                legend: "",
                legendPosition: "center",
                legendOffset: 36
              }}
              axisLeft={{
                orient: "left",
                tickSize: 5,
                tickPadding: 5,
                tickRotation: 0,
                legend: "",
                legendPosition: "center",
                legendOffset: -40
              }}
              labelSkipWidth={12}
              labelTextColor="inherit:darker(1.6)"
              animate={true}
              motionStiffness={90}
              motionDamping={15}
              legends={[
                {
                  dataFrom: "keys",
                  anchor: "bottom-right",
                  direction: "column",
                  translateX: 120,
                  itemWidth: 100,
                  itemHeight: 20,
                  itemsSpacing: 2,
                  symbolSize: 20
                }
              ]}
            />
          </div>
        </div>

        {/* Graphiques bar toxicologie */}

        <div className="col s12">
          <div className="chart-container">
            <ResponsiveBar
              data={data2}
              keys={["number"]}
              indexBy="type"
              margin={{
                top: 50,
                right: 15,
                bottom: 100,
                left: 60
              }}
              padding={0.3}
              colors="d310"
              colorBy="id"
              defs={[
                {
                  id: "dots",
                  type: "patternDots",
                  background: "inherit",
                  color: "#38bcb2",
                  size: 4,
                  padding: 1,
                  stagger: true
                },
                {
                  id: "lines",
                  type: "patternLines",
                  background: "inherit",
                  color: "#eed312",
                  rotation: -45,
                  lineWidth: 6,
                  spacing: 10
                }
              ]}
              fill={[
                {
                  match: {
                    id: ""
                  },
                  id: ""
                },
                {
                  match: {
                    id: ""
                  },
                  id: ""
                }
              ]}
              borderColor="inherit:darker(1.6)"
              axisBottom={{
                orient: "bottom",
                tickSize: 12,
                tickPadding: 5,
                tickRotation: 35,
                legend: "",
                legendPosition: "center",
                legendOffset: 36
              }}
              axisLeft={{
                orient: "left",
                tickSize: 5,
                tickPadding: 5,
                tickRotation: 0,
                legend: "",
                legendPosition: "center",
                legendOffset: -40
              }}
              labelSkipWidth={12}
              labelTextColor="inherit:darker(1.6)"
              animate={true}
              motionStiffness={90}
              motionDamping={15}
              legends={[
                {
                  dataFrom: "keys",
                  anchor: "bottom-right",
                  direction: "column",
                  translateX: 120,
                  itemWidth: 100,
                  itemHeight: 20,
                  itemsSpacing: 2,
                  symbolSize: 20
                }
              ]}
            />
          </div>
        </div>

        {/* test */}

        <div className="col s12">
          <div className="chart-container">
            <ResponsiveBar
              data={data3}
              keys={["année_2016", "année_2017", "kebab", "fries", "donut"]}
              indexBy="country"
              margin={{
                top: 50,
                right: 140,
                bottom: 50,
                left: 60
              }}
              padding={0.3}
              colors="set2"
              colorBy="id"
              defs={[
                {
                  id: "dots",
                  type: "patternDots",
                  background: "inherit",
                  color: "#38bcb2",
                  size: 4,
                  padding: 1,
                  stagger: true
                },
                {
                  id: "lines",
                  type: "patternLines",
                  background: "inherit",
                  color: "#eed312",
                  rotation: -45,
                  lineWidth: 6,
                  spacing: 10
                }
              ]}
              fill={[
                {
                  match: {
                    id: "fries"
                  },
                  id: "dots"
                },
                {
                  match: {
                    id: "sandwich"
                  },
                  id: "lines"
                }
              ]}
              borderColor="inherit:darker(1.6)"
              axisBottom={{
                orient: "bottom",
                tickSize: 5,
                tickPadding: 5,
                tickRotation: 0,
                legend: "country",
                legendPosition: "center",
                legendOffset: 36
              }}
              axisLeft={{
                orient: "left",
                tickSize: 5,
                tickPadding: 5,
                tickRotation: 0,
                legend: "food",
                legendPosition: "center",
                legendOffset: -40
              }}
              labelSkipWidth={12}
              labelTextColor="inherit:darker(1.6)"
              animate={true}
              motionStiffness={90}
              motionDamping={15}
              legends={[
                {
                  dataFrom: "keys",
                  anchor: "bottom-right",
                  direction: "column",
                  translateX: 120,
                  itemWidth: 100,
                  itemHeight: 20,
                  itemsSpacing: 2,
                  symbolSize: 20
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
