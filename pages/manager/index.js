import firebase from "firebase/app";
import auth from "firebase/auth";

import config from "../../constantes/firebase-config";

import Layout from "../../components/Layout";

import H1 from "../../components/H1";
import ConnectionForm from "./ConnectionForm";
import PanelAdmin from "./PanelAdmin";

class Manager extends React.Component {
  state = {
    isConnected: false
  };

  componentDidMount() {
    if (!firebase.apps.length) {
      firebase.initializeApp(config);
    }

    const test = firebase
      .auth()
      .signInWithEmailAndPassword("team.mamaf3@gmail.com", "team@mama69")
      .catch(function(error) {
        // Rediriger + message erreur
      });

    console.dir(test);
  }

  state = {
    isConnected: true
  };

  render() {
    return (
      <Layout>
        <div className="container">
          <div className="row">
            <H1>Admin</H1>

            <div className="col s12 m8 offset-m2">
              {this.state.isConnected ? <PanelAdmin /> : <ConnectionForm />}
            </div>
          </div>
        </div>

        <style jsx>{``}</style>
      </Layout>
    );
  }
}

export default Manager;
