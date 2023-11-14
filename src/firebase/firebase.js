import firebase from 'firebase/app';
import 'firebase/firestore';

import firebaseConfig from './config';

class Firebase {

    constructor() {
        firebase.initializeApp(firebaseConfig);

        this.db = firebase.firestore();
        this.storage = firebase.storage();
    }

}

const firebaseApp = new Firebase();

export default firebaseApp;