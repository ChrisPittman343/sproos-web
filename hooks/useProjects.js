import { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { listenToProjects } from "../services/databaseReads";
import { auth } from "../services/firebase";

/**
 * A hook for the projects page, rerenders the page if a user's projects change.
 * Updates when the user state changes, and handles the removal of listeners
 * to the database when necessary.
 * @returns {{projects: {id: String, uid: String, name: String, description: String}[], error: {name: String, message: String}}} project and error data
 */
export function useProjects() {
  const [user] = useAuthState(auth);

  const [projects, setProjects] = useState(null);
  const [error, setError] = useState(null);
  const [cleanup, setCleanup] = useState(() => {});

  useEffect(() => {
    // Adds listeners to a user's project (assuming there is one).
    // State will update through setProjects() or setErrors() if data changes or an error occurs.
    // Also sets the cleanup function for future changes in user state.
    setCleanup(listenToProjects(user, setProjects, setError));

    // Removes any existing listeners from projects.
    // This can be null if there is an error present,
    // or the hook is first running.
    return () => {
      if (typeof cleanup === "function") cleanup();
    };
  }, [user]);

  return { projects, error };
}
