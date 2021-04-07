import { auth, db } from "./firebase";
import { jsonToArray } from "../utils/jsonToArray.js";

/**
 * Attaches a listener to a user's projects, updating them when they change by
 * passing the new data to the setProjects function.
 * @param user firebase user or null
 * @param {(data: Array) => void} setProjects function for setting project data.
 * @param {(error: {name: String, message: String} | null) => void} setError function for setting errors. Will only run when an error occurs.
 * @returns {null | () => void} A cleanup function for removing all listeners from the projects.
 */
export async function listenToProjects(user, setProjects, setError) {
  if (!user) {
    setProjects([]);
    setError({
      name: "No User",
      message: "A user must be present to fetch projects.",
    });
    return () => {};
  }

  const projects = db.ref("projects").orderByChild("uid").equalTo(user.uid);
  setError(null);
  projects.on(
    "value",
    (snap) => {
      setProjects(jsonToArray(snap.val()));
    },
    (error) => {
      setError({ ...error });
    }
  );
  return () => projects.off();
}

/**
 * Gets all project details for the user to display on the projects page.
 * Returns null if there was an error fetching the projects.
 * @returns {Promise<{id: String, name: String, description: String}[]?>} projects
 */
export async function getProjectsOnce() {
  const user = auth.currentUser;
  try {
    if (!user) throw Error("No user!");
    const snap = await db
      .ref("projects")
      .orderByChild("uid")
      .equalTo(user.uid)
      .get();
    if (snap.exists()) return jsonToArray(snap.val());
  } catch (err) {
    console.log(err);
    return null;
  }
  return [];
}
