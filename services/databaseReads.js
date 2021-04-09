import { auth, db } from "./firebase";
import { jsonToArray } from "../utils/jsonToArray.js";

/**
 * Attaches a listener to a user's projects, updating them when they change by
 * passing the new data to the setProjects function. Errors will be passed to setError if present.
 * For some GOD FORSAKEN reason, this function has to be async to
 * work in the custom hook, and I have no idea why...
 * @param user firebase user or null
 * @param {(data: Array) => void} setProjects function for setting project data.
 * @param {(error: {name: String, message: String} | null) => void} setError function for setting errors. Will only run when an error occurs.
 * @returns {null | () => void} A cleanup function for removing all listeners from the projects.
 */
export async function listenToProjects(user, setProjects, setError) {
  if (!user) {
    setProjects(null);
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
      const sortedProjects = jsonToArray(snap.val()).sort(
        (a, b) => b.lastEdited - a.lastEdited
      );
      setProjects(sortedProjects);
    },
    (error) => {
      setError({ ...error });
    }
  );
  return () => projects.off();
}

/**
 * Gets all project details for the user to display on the projects page a single time.
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

/**
 * Gets the project details for a single project by id.
 * @param {String} id
 * @returns {Promise<{id: String, uid: String, name: String, description: String}>} project details object
 */
export async function getSingleProject(id) {
  const user = auth.currentUser;
  try {
    if (!user) throw Error("No user!");

    const data = (await db.ref(`projects/${id}`).get()).val();
    const obj = {};
    obj[id] = { ...data };
    const project = jsonToArray(obj)[0];
    return project;
  } catch (err) {
    console.log(err);
    return null;
  }
}

/**
 * Returns project details + all nodes attached to the project in unsorted order.
 * If the project doesn't exist, the user is not authorized, or not signed in,
 * will throw an error.
 * @param {String} id project id to be fetched
 * @returns {Promise<{details: {id: String, name: String, description: String, uid: String},
 * nodes: {id: String, name: String, text: String}[]}>} object of project details and an unsorted array of nodes
 */
export async function getProject(id) {
  const user = auth.currentUser;
  try {
    if (!user) throw Error("No user!");
    const details = await getSingleProject(id);
    if (!details) throw Error("Invalid project!");
    const nodeData = (
      await db.ref("nodes").orderByChild("projectId").equalTo(id).get()
    ).val();
    const nodes = jsonToArray(nodeData);
    return { details, nodes };
  } catch (err) {
    console.log(err);
    return null;
  }
}
