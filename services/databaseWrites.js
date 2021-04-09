import { auth, db, fb } from "./firebase";

/**
 * Updates a project's details if an ID is present, otherwise creates a new project.
 * @param {String?} id
 * @param {{name: String, description: String}} projDetails
 */
export async function editProjectDetails(id = null, projDetails) {
  const user = auth.currentUser;
  if (!user) throw Error("No user!");
  const newData = {
    lastEdited: fb.database.ServerValue.TIMESTAMP,
    uid: user.uid,
    ...projDetails,
  };

  if (id === null) {
    await db.ref("projects").push(newData, (err) => {
      console.log(err);
      return err !== null;
    });
  } else {
    await db
      .ref("projects")
      .child(id)
      .update(newData)
      .catch((err) => {
        if (err) throw Error("Error editing project details: " + err);
      });
  }
}

/**
 * Deletes a project from the database, including all nodes belonging to it.
 * Throws an error if present.
 * @param {{id: String, uid: String}!} project the project to be deleted
 */
export async function deleteProject(project) {
  const user = auth.currentUser;
  if (!user) {
    throw Error("No user!");
  } else if (user.uid !== project.uid) {
    throw Error("Unauthorized!");
  }

  await db
    .ref("projects")
    .child(project.id)
    .remove()
    .catch((err) => {
      if (err) throw Error("Error deleting project: " + err);
    });
}
