import { setCookie, destroyCookie } from "nookies";

/**
 * Updates the cookie "IDT" with the new id token if the user exists.
 * Otherwise, destroys the cookie.
 * @param {*} user - null or firebase.user
 */
export async function updateIdCookie(user) {
  console.log("Updating cookie...");
  if (!user) {
    // This function isn't doing anything...
    destroyCookie(null, "IDT");
  } else {
    const idToken = await user.getIdToken();
    setCookie(null, "IDT", idToken, {
      maxAge: 900000,
      sameSite: true, // If sending cookie only instead of body with token data, turn off
      secure: true,
    });
  }
}
