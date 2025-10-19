import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

const firestore = firebase.firestore();

const userCourses1 = firestore
  .collection("users")
  .doc("BudwaxpQERayXvSwqJvA")
  .collection("courses")
  .doc("");

const userCourses = firestore.collection("users/BudwaxpQERayXvSwqJvA/courses");
const users1 = firestore.doc("users/BudwaxpQERayXvSwqJvA");
console.log(users);

// firestore.collection("users").get().then((snapshot) => {
//     snapshot.docs.forEach((doc) => {
//         console.log(doc.data());
//     });
// });
