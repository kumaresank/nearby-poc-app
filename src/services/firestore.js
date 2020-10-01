import * as firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import config from "./../config";

firebase.initializeApp(config);
const db = firebase.firestore();

export const authenticateAnonymously = () => {
    return firebase.auth().signInAnonymously();
};

export const createStore = () => {
    return db.collection('stores')
        .add({
            createdAt: firebase.firestore.FieldValue.serverTimestamp(),
            users: [{
                userId: userId,
                name: userName
            }]
        });
};

export const getStores = storeId => {
    return db.collection('stores')
        .doc(storeId)
        .get();
};

export const getStoreItems = storeId => {
    return db.collection('stores')
        .doc(storeId)
        .collection('items')
        .get();
}

export const addStoreItem = (item, storeId) => {
    return getStoreItems(storeId)
        .then(querySnapshot => querySnapshot.docs)
        .then(storeItems => storeItems.find(storeItem => storeItem.data().name.toLowerCase() === item.toLowerCase()))
        .then(matchingItem => {
            if (!matchingItem) {
                return db.collection('stores')
                    .doc(storeId)
                    .collection('items')
                    .add({
                        name: item,
                        created: firebase.firestore.FieldValue.serverTimestamp(),
                        createdBy: userId
                    });
            }
            throw new Error('duplicate-item-error');
        });
};