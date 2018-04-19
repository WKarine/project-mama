import Layout from "../components/Layout";

import H1 from "../components/H1";
import IconCard from "../components/IconCard";

const dataList = [
  {
    icon: "battery_alert",
    textContent: "cardiologie",
    stat: 838
  },
  { icon: "battery_alert", textContent: "débriefing", stat: 91 },
  {
    icon: "battery_alert",
    textContent: "dermatologie",
    stat: 280
  },
  { icon: "battery_alert", textContent: "neurologie", stat: 290 },
  {
    icon: "battery_alert",
    textContent: "ophtalmologie",
    stat: 217
  }
];

export default () => (
  <Layout>
    <div className="container">
      <div className="row">
        <H1>Ceci est un titre</H1>

        <div className="col s12 m6 offset-m3">
          <IconCard
            dataList={dataList}
            cardClass="green"
            direction="horizontal"
          />
        </div>
      </div>
    </div>

    <style jsx>{``}</style>
  </Layout>
);
