import { ResponsivePie } from "@nivo/pie";

console.dir(ResponsivePie);
import Layout from "../components/Layout";
const data = [
  {
    id: "ruby",
    label: "ruby",
    value: 91,
    color: "hsl(242, 70%, 50%)"
  },
  {
    id: "hack",
    label: "hack",
    value: 508,
    color: "hsl(115, 70%, 50%)"
  },
  {
    id: "make",
    label: "make",
    value: 479,
    color: "hsl(204, 70%, 50%)"
  },
  {
    id: "c",
    label: "c",
    value: 477,
    color: "hsl(147, 70%, 50%)"
  },
  {
    id: "scala",
    label: "scala",
    value: 500,
    color: "hsl(183, 70%, 50%)"
  },
  {
    id: "lisp",
    label: "lisp",
    value: 105,
    color: "hsl(289, 70%, 50%)"
  },
  {
    id: "javascript",
    label: "javascript",
    value: 386,
    color: "hsl(241, 70%, 50%)"
  }
];

export default () => (
  <Layout>
    <div className="container">
      <div className="row">
        <ResponsivePie
          data={data}
          margin={{
            top: 40,
            right: 80,
            bottom: 80,
            left: 80
          }}
          innerRadius={0.5}
          padAngle={0.7}
          cornerRadius={3}
          colors="d320c"
          colorBy="id"
          borderColor="inherit:darker(0.6)"
          radialLabelsSkipAngle={10}
          radialLabelsTextXOffset={6}
          radialLabelsTextColor="#333333"
          radialLabelsLinkOffset={0}
          radialLabelsLinkDiagonalLength={16}
          radialLabelsLinkHorizontalLength={24}
          radialLabelsLinkStrokeWidth={1}
          radialLabelsLinkColor="inherit"
          slicesLabelsSkipAngle={10}
          slicesLabelsTextColor="#333333"
          animate={true}
          motionStiffness={90}
          motionDamping={15}
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

    <style jsx>{``}</style>
  </Layout>
);
