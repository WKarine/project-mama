import firebase from "firebase/app";
import firestore from "firebase/firestore";

import config from "../../constantes/firebase-config";

export default class UsersService {
  constructor() {
    if (!firebase.apps.length) {
      firebase.initializeApp(config);
    }
    this.db = firebase.firestore();
  }

  async getAdmins() {
    const usersRef = this.db.collection("users");
    let admins = [];

    try {
      const usersData = await usersRef.get();

      usersData.forEach(doc => {
        admins = doc.data();
      });

      return admins;
    } catch (err) {
      console.log("Error getting documents", err);
      return;
    }
  }
}
