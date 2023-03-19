import { app } from "./config";
import {
  collection,
  getDocs,
  getFirestore,
  query,
  updateDoc,
  doc,
  deleteDoc,
  setDoc,
  getDoc,
  serverTimestamp,
  collectionGroup,
  onSnapshot,
} from "firebase/firestore";

export class FirebaseFirestore {
  // initialize firebase config
  static db = getFirestore(app);

  static #pathSegmentCounter = (path) => {
    const segmentCount = path.match(
      new RegExp(String.raw`(?<segment>[^/]+)`, "gi")
    ).length;
    return segmentCount;
  };

  static #isColPath = (path) => {
    const pathSegmentCount = this.#pathSegmentCounter(path).length;
    if (pathSegmentCount === 0) return false;
    return pathSegmentCount % 2 === 0;
  };

  static #isDocPath = (path) => {
    const pathSegmentCount = this.#pathSegmentCounter(path).length;
    if (pathSegmentCount === 0) return false;
    return pathSegmentCount % 2 === 1;
  };

  /**
   * Creates or updates a Firestore document in the specified collection path.
   * @param {string} path - The path of the Firestore collection / doc,
   * if path is colPath, generate doc_id
   * @param {Object} data - The data to be stored in the Firestore document.
   * @returns {Promise} A Promise that resolves to the Firestore response object.
   */
  static async createDoc(path, data) {
    switch (true) {
      case this.#isDocPath(path): {
        const docRef = doc(this.db, path);
        const doc_id = docRef.id;
        // Set the data for the document, including the doc_id and timestamps.
        const response = await setDoc(docRef, {
          ...data,
          doc_id,
          date_created: serverTimestamp(),
          date_updated: serverTimestamp(),
        });
        return response;
      }
      case this.#isColPath(path): {
        const colRef = collection(this.db, path);
        const docRef = doc(colRef);
        const doc_id = docRef.id;
        // Set the data for the document, including the doc_id and timestamps.
        const response = await setDoc(docRef, {
          ...data,
          doc_id,
          date_created: serverTimestamp(),
          date_updated: serverTimestamp(),
        });
        return response;
      }
    }
  }

  /**
   * Reads a Firestore document from the specified path.
   * @param {string} docPath - The path of the Firestore document.
   * @returns {Promise} A Promise that resolves to the data contained in the Firestore document.
   */
  static async readDoc(docPath) {
    if (!this.#isDocPath(docPath)) return
    // Get a reference to the document.
    const docRef = doc(this.db, docPath);

    // Get the document data.
    const response = await getDoc(docRef);
    const data = response.data();

    return data;
  }

  /**
   * Reads a Firestore collection from the specified path with the given query definition.
   * @param {string} colPath - The path of the Firestore collection.
   * @param {Object} queryDef - The query definition object for filtering and sorting the collection.
   * @returns {Promise} A Promise that resolves to an array of data objects from the Firestore documents in the collection.
   */
  static async readCol(colPath, queryDef) {
    if (!this.#isColPath(colPath)) return
    // Get a reference to the collection and apply the query definition.
    const colRef = collection(this.db, colPath);
    const q = query(colRef, queryDef);

    // Get the documents in the collection that match the query.
    const snapshot = await getDocs(q);

    // Map the documents to an array of data objects and return it.
    const data = snapshot.docs.map((doc) => {
      return {
        ...doc.data(),
      };
    });

    return data;
  }

  /**
   * Reads a Firestore collection group with the given ID and query definition.
   * @param {string} colGroupId - The ID of the Firestore collection group.
   * @param {Object} queryDef - The query definition object for filtering and sorting the collection group.
   * @returns {Promise} A Promise that resolves to an array of data objects from the Firestore documents in the collection group.
   */
  static async readColGroup(colGroupId, queryDef) {
    if(this.#pathSegmentCounter(colGroupId) !== 1) return
    // Get a reference to the collection group and apply the query definition.
    const colGroupRef = collectionGroup(this.db, colGroupId);
    const q = query(colGroupRef, queryDef);

    // Get the documents in the collection group that match the query.
    const snapshot = await getDocs(q);

    // Map the documents to an array of data objects and return it.
    const data = snapshot.docs.map((doc) => {
      return {
        ...doc.data(),
      };
    });

    return data;
  }

  /**
   * Updates a Firestore document with the given data.
   * @param {string} docPath - The path of the Firestore document to update.
   * @param {Object} data - The data object to update the document with.
   * @returns {Promise} A Promise that resolves to the Firestore response object.
   */
  static async updateDoc(docPath, data) {
    if (!this.#isDocPath(docPath)) return
    // Get a reference to the document and update it with the given data.
    const docRef = doc(this.db, docPath);
    const response = await updateDoc(docRef, {
      ...data,
      date_updated: serverTimestamp(),
    });

    // Return the Firestore response object.
    return response;
  }

  /**
   * Deletes a Firestore document with the given path.
   * @param {string} docPath - The path of the Firestore document to delete.
   * @returns {Promise} A Promise that resolves to the Firestore response object.
   */
  static async deleteDoc(docPath) {
    if (!this.#isDocPath(docPath)) return
    // Get a reference to the document and delete it.
    const docRef = doc(this.db, docPath);
    const response = await deleteDoc(docRef);

    // Return the Firestore response object.
    return response;
  }

  /**
   * Subscribes to changes in a Firestore document with the given path.
   * @param {string} docPath - The path of the Firestore document to subscribe to.
   * @param {function} callback - A callback function to be called when the document changes.
   * @returns {function} A function to unsubscribe from the Firestore document.
   */
  static async subscribeDoc(docPath, callback) {
    if (!this.#isDocPath(docPath)) return
    // Get a reference to the document and subscribe to changes.
    const docRef = doc(this.db, docPath);
    const unsubscribe = onSnapshot(docRef, callback);

    // Return the function to unsubscribe from the Firestore document.
    return unsubscribe;
  }

  /**
   * Subscribes to changes in a Firestore collection with the given path and query.
   * @param {string} colPath - The path of the Firestore collection to subscribe to.
   * @param {object} queryDef - A query definition object to define the filters and sorting of the data.
   * @param {function} callback - A callback function to be called when the collection changes.
   * @returns {function} A function to unsubscribe from the Firestore collection.
   */
  static async subscribeCol(colPath, queryDef, callback) {
    if (!this.#isColPath(colPath)) return
    // Get a reference to the collection and query, and subscribe to changes.
    const colRef = collection(this.db, colPath);
    const q = query(colRef, queryDef);
    const unsubscribe = onSnapshot(q, callback);

    // Return the function to unsubscribe from the Firestore collection.
    return unsubscribe;
  }

  /**
   * Subscribes to changes in a collection group with the specified query definition.
   *
   * @param {string} colGroupId - The ID of the collection group to subscribe to.
   * @param {object} queryDef - The query definition object.
   * @param {function} callback - The callback function to be called when the subscribed collection group changes.
   * @returns {function} The unsubscribe function to stop listening to changes in the subscribed collection group.
   */
  static subscribeColGroup = async (colGroupId, queryDef, callback) => {
    if (this.#pathSegmentCounter(colGroupId) !== 1) return
    const colGroupRef = collectionGroup(this.db, colGroupId);
    const q = query(colGroupRef, queryDef);
    const unsubscribe = onSnapshot(q, callback);
    return unsubscribe;
  };
}
