import firebase from "firebase/app";
import auth from "firebase/auth";

import config from "../../constantes/firebase-config";

import Layout from "../../components/Layout";

import H1 from "../../components/H1";
import ConnectionForm from "./ConnectionForm";
import PanelAdmin from "./PanelAdmin";

class Manager extends React.Component {
  state = {
    isConnected: false,
    email: "",
    error: false
  };

  async componentWillMount() {
    if (!firebase.apps.length) {
      firebase.initializeApp(config);
    }
  }

  handleSubmit = e => {
    e.preventDefault();
    const email = e.currentTarget.elements.email.value;
    const password = e.currentTarget.elements.password.value;

    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(user => {
        this.setState({
          isConnected: true,
          email: user.email,
          error: false
        });

        localStorage.setItem("isConnected", true);
      })
      .catch(error => {
        // Rediriger + message erreur
        this.setState({
          error: true
        });
      });
  };

  render() {
    return (
      <Layout>
        <div className="container">
          <div className="row">
            <H1>Admin</H1>

            {this.state.error && <p>Tupuducul</p>}
            <div className="col s12 m8 offset-m2">
              {this.state.isConnected ? (
                <PanelAdmin email={this.state.email} />
              ) : (
                <ConnectionForm onSubmit={this.handleSubmit} />
              )}
            </div>
          </div>
        </div>

        <style jsx>{``}</style>
      </Layout>
    );
  }
}

export default Manager;
