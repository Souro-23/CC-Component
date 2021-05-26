import firebase from "../Firebase/FirebaseConfig";
import 'firebase/storage';


const db = firebase.firestore();



export const notificationGenerator = (type, parent, body, from_user, to_user) => {
    var docRef = db.collection('Notifications').doc(to_user);
    docRef.collection('notifications').add({
        parent: parent,
        type: type,
        from_user: from_user,
        body: body,
        timestamp: new Date().getTime()
    })
}