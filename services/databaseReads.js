import { auth, db } from "./firebase";

/**
 * Gets a few recent  projects for the user to display on the projects page.
 * Further requests for more projects should be done separately.
 * @returns <= 7 of the most recently edited projects from the user.
 */
export async function getRecentProjects() {
  console.log("--------- User does NOT exist!");
  const projects = [];
  const user = auth.currentUser;
  if (!user) throw Error("No user logged in.");
  console.log("--------- User exists!");

  db.ref("projects")
    .orderByChild("uid")
    .equalTo(user.uid)
    .get()
    .then((res) => {
      if (res.exists) projects = res.val();
    })
    .catch((e) => console.log(e));
  console.log("Projects:", projects);
  return projects;
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
