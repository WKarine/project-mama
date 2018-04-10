import firebase from "firebase/app"
import firestore from "firebase/firestore"

import config from "../../constantes/firebase-config";

class SidebarService {
  constructor() {
    if (!firebase.apps.length) {
      firebase.initializeApp(config);
    }

    this.db = firebase.firestore();
  }

  async getLinks() {
    const layoutRef = this.db.collection("layout");
    const layoutSnapshot = await layoutRef.get();

    layoutSnapshot.forEach(doc => {
      if (doc.id === "sidebar") {
        this.links = doc.data().links;
      }
    });

    return this.links;
  }
}
export default SidebarService;