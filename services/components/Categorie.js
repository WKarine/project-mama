import firebase from "firebase/app"
import firestore from "firebase/firestore"

import config from "../../constantes/firebase-config";
import {replaceNewLines} from "../../utilities/format";

class CategorieService {
  constructor() {
    if (!firebase.apps.length) {
      firebase.initializeApp(config);
    }

    this.db = firebase.firestore();
  }

  async getContent(categorieName) {
    const categorieRef = this.db.collection("categorie");
    const categorieSnapshot = await categorieRef.get();

    categorieSnapshot.forEach(doc => {
      if (doc.id === categorieName) {
        this.content = doc.data().content;
      }
    });

    return this.content;
  }

  async setContent(categorieName, textContent, id) {
    const content = await this.getContent(categorieName);

    content[id].textContent = replaceNewLines(textContent);

    this.db.collection("categorie").doc(categorieName).set({
      content: content
    }, { merge: true })
      .then(function () {
        console.log("Document successfully written!");
      })
      .catch(function (error) {
        console.error("Error writing document: ", error);
      });
  }
}

export default CategorieService;