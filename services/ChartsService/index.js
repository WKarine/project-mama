import firebase from "firebase/app";
import firestore from "firebase/firestore";

import config from "../../constantes/firebase-config";

export default class ChartsService {
  constructor() {
    if (!firebase.apps.length) {
      firebase.initializeApp(config);
    }
    this.db = firebase.firestore();
  }
  async getCharts() {
    const ChartsRef = this.db.collection("charts");
    let charts = [];

    try {
      const ChartsData = await ChartsRef.get();

      ChartsData.forEach(doc => {
        charts = doc.data();
      });

      return charts;
    } catch (err) {
      console.log("Error getting documents", err);
      return;
    }
  }
}
