import firebase from "firebase/app"
import firestore from "firebase/firestore"

import config from "../../constantes/firebase-config";
import { replaceNewLines } from "../../utilities/format";

class CategoryService {
  constructor() {
    if (!firebase.apps.length) {
      firebase.initializeApp(config);
    }

    this.db = firebase.firestore();
  }

  async getContent(categoryName) {
    const categoryRef = this.db.collection("categorie");
    const categorySnapshot = await categoryRef.get();

    categorySnapshot.forEach(doc => {
      if (doc.id === categoryName) {
        this.content = doc.data().content;
      }
    });

    return this.content;
  }

  async setContent(categoryName, textContent, id) {
    const content = await this.getContent(categoryName);

    content[id].textContent = replaceNewLines(textContent);

    this.db.collection("Category").doc(categoryName).set({
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

export default CategoryService;