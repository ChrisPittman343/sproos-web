import { auth } from "./firebase";

/**
 *
 */
export async function getProjects() {
  const user = auth.currentUser;
  if (!user) throw Error("No user logged in.");
}

/**
 *
 * @param {String} id
 * @returns nodes[] (unsorted)
 */
export async function getProject(id) {
  const user = auth.currentUser;
  if (!user) throw Error("No user logged in.");
}
