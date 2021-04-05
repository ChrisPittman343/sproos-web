import { functions } from "./firebase";

/**
 * Verifies an ID Token and returns some info from the user it is signed to (if valid).
 * Throws an error if unsuccessful.
 * @param {String} idToken
 * @returns {Promise<{uid: String, name: String, photoURL: String?}?>} userData
 */
export async function getUserDataFromIdToken(idToken) {
  try {
    const userData = (await functions.httpsCallable("userData")(idToken)).data
      .body;
    return userData;
  } catch (err) {
    console.log(err);
    return null;
  }

  // admin
  //   .auth()
  //   .verifyIdToken(idToken, true)
  //   .then((data) => {
  //     userData = {
  //       uid: data.uid,
  //       photoURL: data.picture,
  //     };
  //   })
  //   .catch((err) => {
  //     console.log(err);
  //   });
}
