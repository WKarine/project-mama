import firebase from "firebase/app";
import firestore from "firebase/firestore";

import config from "../../constantes/firebase-config";

export default class DataService {
  constructor() {
    if (!firebase.apps.length) {
      firebase.initializeApp(config);
    }
    this.db = firebase.firestore();
  }

  async getData(page) {
    const dataRef = this.db.collection("data");
    let data = {};

    try {
      const dataSnapshot = await dataRef.get();

      dataSnapshot.forEach(doc => {
        data = doc.data();
      });

      return data;
    } catch (err) {
      console.log("Error getting documents", err);
      return;
    }
  }

  async setData(page, dataName, data) {
    // on récupère les anciennes données
    const oldData = await this.getData(page);

    // Puis on les écrase
    oldData[dataName] = data;

    this.db
      .collection("data")
      .doc(page)
      .set(oldData)
      .then(function() {
        console.log("Document successfully written!");
      })
      .catch(function(error) {
        console.error("Error writing document: ", error);
      });
  }
}
